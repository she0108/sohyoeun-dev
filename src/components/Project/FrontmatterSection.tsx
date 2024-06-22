"use client";

import { useEffect, useState } from "react";
import Avatar from "../common/Avatar";
import { TagColor } from "@/types/notion-color";
import Tag from "../common/Tag";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

const skeleton = <div></div>;

interface FrontmatterSectionProps {
  pageId: string;
}

interface PropsType {
  name: string;
  tags: {
    id: string;
    name: string;
    color: TagColor;
  }[];
  skills: {
    id: string;
    name: string;
    color: TagColor;
  }[];
  description1: string;
  description2: string;
  start: string;
  end: string;
  thumbnail: string;
}

function FrontmatterSection({ pageId }: FrontmatterSectionProps) {
  const [props, setProps] = useState<PropsType | null>(null);

  useEffect(() => {
    const fetchProps = async () => {
      const response = await fetch(`/api/page/project/${pageId}`, {
        method: "GET",
        cache: "force-cache",
        next: { revalidate: 3600 },
      });
      const json = await response.json();
      setProps(json);
      console.log(json);
    };
    fetchProps();
  }, [pageId]);

  if (!props) return skeleton;

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-96 relative overflow-hidden mb-4">
        <Image
          src={props.thumbnail}
          alt="project thumbnail"
          fill
          className="object-cover rounded-xl border border-neutral-200"
        />
      </div>
      <h1 className="text-5xl font-extrabold">{props.name}</h1>
      <h2 className="text-2xl font-semibold">{props.description1}</h2>
      <div className="flex items-center gap-3 mb-2">
        {props &&
          props.tags.map((t, index) => (
            <Tag key={index} color={t.color}>
              {t.name}
            </Tag>
          ))}
      </div>
      <div className="flex items-center gap-3 mb-10">
        {props &&
          props.skills.map((s, index) => (
            <Tag key={index} color={s.color}>
              {s.name}
            </Tag>
          ))}
      </div>
    </div>
  );
}

export default FrontmatterSection;
