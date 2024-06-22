"use client";

import { useEffect, useState } from "react";
import HeaderTextLarge from "../common/HeaderTextLarge";
import Tag from "../common/Tag";
import { TagColor } from "@/types/notion-color";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import useTagStore from "@/store/tagStore";
import ProjectContainer from "../Projects/ProjectContainer";

function ListSection() {
  const [projects, setProjects] = useState<React.ReactElement[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const { tag } = useTagStore();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  let url = `/api/database/projects?start=${nextCursor}`;
  if (query) url = url + `&query=${query}`;
  if (tag) url = url + `&tag=${tag.name}`;

  const fetchPosts = async (reset: boolean) => {
    const response = await fetch(url, {
      method: "POST",
      cache: "force-cache",
      next: { revalidate: 3600 },
    });

    const json = await response.json();

    setNextCursor(json.nextCursor);

    const projectObjects = json.projects;

    if (!projectObjects) {
      return <div>No result</div>;
    }

    let projectElements = [...projects];
    if (reset) projectElements = [];

    for (let project of projectObjects) {
      projectElements.push(
        <ProjectContainer key={project.id} project={project} />
      );
    }
    setProjects(projectElements);
  };

  useEffect(() => {
    fetchPosts(true);
  }, [query, tag]);

  return (
    <div className="flex flex-col">
      <HeaderTextLarge>🖥️ Projects</HeaderTextLarge>
      <div className="grid grid-cols-2 gap-8 mt-6 h-4/5">{projects}</div>
      {nextCursor && (
        <button
          onClick={() => fetchPosts(false)}
          className="text-sm text-neutral-400 bg-white hover:bg-neutral-100 min-w-max w-min h-min px-1.5 py-0.5 mt-20 mx-auto rounded-lg"
        >
          load more ↓
        </button>
      )}
    </div>
  );
}

export default ListSection;
