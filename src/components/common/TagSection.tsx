"use client";

import { useEffect, useState } from "react";
import HeaderTextSmall from "./HeaderTextSmall";
import Tag from "./Tag";
import { TagColor } from "@/types/notion-color";
import useTagStore from "@/store/tagStore";
import SelectedTag from "./SelectedTag";

const skeleton = [
  <div
    key={0}
    className="bg-neutral-200/60 hover:bg-neutral-200/90 text-neutral-900/80 w-16 h-6 rounded-md text-sm animate-pulse"
  />,
  <div
    key={1}
    className="bg-neutral-200/60 hover:bg-neutral-200/90 text-neutral-900/80 w-20 h-6 rounded-md text-sm animate-pulse"
  />,
  <div
    key={2}
    className="bg-neutral-200/60 hover:bg-neutral-200/90 text-neutral-900/80 w-24 h-6 rounded-md text-sm animate-pulse"
  />,
  <div
    key={3}
    className="bg-neutral-200/60 hover:bg-neutral-200/90 text-neutral-900/80 w-16 h-6 rounded-md text-sm animate-pulse"
  />,
  <div
    key={4}
    className="bg-neutral-200/60 hover:bg-neutral-200/90 text-neutral-900/80 w-24 h-6 rounded-md text-sm animate-pulse"
  />,
  <div
    key={5}
    className="bg-neutral-200/60 hover:bg-neutral-200/90 text-neutral-900/80 w-16 h-6 rounded-md text-sm animate-pulse"
  />,
];

function TagSection() {
  const { tag: selectedTag } = useTagStore();
  const [tags, setTags] = useState<
    { name: string; color: TagColor }[] | null
  >();

  useEffect(() => {
    const fetchTags = async () => {
      const response = await fetch("/api/database/tags", { method: "GET" });
      const json = await response.json();
      setTags(json);
    };
    fetchTags();
  }, []);

  return (
    <div>
      <HeaderTextSmall>🏷️ Tags</HeaderTextSmall>
      <div className="mt-2 flex flex-wrap gap-2">
        {selectedTag && (
          <SelectedTag color={selectedTag.color}>
            {selectedTag.name}
          </SelectedTag>
        )}
        {tags
          ? tags
              .filter((tag) =>
                selectedTag ? tag.name !== selectedTag.name : true
              )
              .map((tag) => (
                <Tag key={tag.name} color={tag.color}>
                  {tag.name}
                </Tag>
              ))
          : skeleton}
      </div>
    </div>
  );
}

export default TagSection;
