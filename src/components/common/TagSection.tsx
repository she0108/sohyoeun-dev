"use client";

import { useEffect, useState } from "react";
import HeaderTextSmall from "./HeaderTextSmall";
import Tag from "./Tag";
import { TagColor } from "@/types/TagColor";

function TagSection() {
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
        {tags &&
          tags.map((tag) => (
            <Tag key={tag.name} color={tag.color}>
              {tag.name}
            </Tag>
          ))}
      </div>
    </div>
  );
}

export default TagSection;
