"use client";

import { useEffect, useState } from "react";
import Avatar from "../common/Avatar";
import { TagColor } from "@/types/TagColor";
import Tag from "../common/Tag";
import { formatDate } from "@/lib/utils";

interface FrontmatterSectionProps {
  pageId: string;
}

interface PropsType {
  title: string;
  tags: {
    id: string;
    name: string;
    color: TagColor;
  }[];
  description: string;
  date: string;
}

function FrontmatterSection({ pageId }: FrontmatterSectionProps) {
  const [props, setProps] = useState<PropsType | null>(null);

  useEffect(() => {
    const fetchProps = async () => {
      const response = await fetch(`/api/page/${pageId}`, { method: "GET" });
      const json = await response.json();
      setProps(json);
    };
    fetchProps();
  }, [pageId]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-extrabold">{props && props.title}</h1>
      <div className="flex items-center gap-3 my-4">
        <Avatar size={24} />
        <span className="font-medium">sohyoeun</span>
        <span className="text-neutral-500 whitespace-pre">
          |{"   "}
          {props && formatDate(props.date)}
        </span>
      </div>
      <div className="flex items-center gap-3 mb-10">
        {props &&
          props.tags.map((t, index) => (
            <Tag key={index} color={t.color}>
              {t.name}
            </Tag>
          ))}
      </div>
    </div>
  );
}

export default FrontmatterSection;
