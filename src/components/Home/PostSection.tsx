"use client";

import HeaderTextLarge from "../common/HeaderTextLarge";
import Tag from "../common/Tag";
import RouterButton from "../common/RouterButton";
import { useEffect, useState } from "react";
import { TagColor } from "@/types/TagColor";
import { formatDate } from "@/lib/utils";

function PostSection() {
  const [posts, setPosts] = useState<React.ReactElement[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/database/posts", { method: "POST" });
      const postObjects = await response.json();

      const postElements: React.ReactElement[] = [];
      for (let post of postObjects) {
        postElements.push(
          <div className="w-full h-min bg-neutral-100 hover:bg-neutral-200/60 rounded-3xl px-6 py-5">
            <h3 className="text-xl font-medium mb-1.5">{post.title}</h3>
            <p className="text-base font-normal text-neutral-500 mb-3">
              {post.description}
            </p>
            <div className="flex flex-row items-center gap-3">
              <span className="text-sm text-neutral-400 mr-2">
                {formatDate(post.date)}
              </span>
              {post.tags.map(
                (tag: { id: string; name: string; color: TagColor }) => (
                  <Tag key={tag.name} color={tag.color}>
                    {tag.name}
                  </Tag>
                )
              )}
            </div>
          </div>
        );
      }
      setPosts(postElements);
    };
    fetchPosts();
  }, []);

  const skeleton = [
    <div
      key={0}
      className="w-full h-[134px] bg-neutral-100 rounded-3xl px-6 py-5 animate-pulse"
    />,
    <div
      key={1}
      className="w-full h-[134px] bg-neutral-100 rounded-3xl px-6 py-5 animate-pulse"
    />,
  ];

  return (
    <div>
      <div className="flex justify-between items-end">
        <HeaderTextLarge>📂 Posts</HeaderTextLarge>
        <RouterButton to="/posts">more -&gt;</RouterButton>
      </div>
      <div className="flex flex-col gap-5 mt-3">{posts ? posts : skeleton}</div>
    </div>
  );
}

export default PostSection;
