"use client";

import HeaderTextLarge from "../common/HeaderTextLarge";
import Tag from "../common/Tag";
import RouterButton from "../common/RouterButton";
import { useEffect, useState } from "react";
import { TagColor } from "@/types/notion-color";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

function PostSection() {
  const [posts, setPosts] = useState<React.ReactElement[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/database/posts?size=2", {
        method: "POST",
        cache: "force-cache",
        next: { revalidate: 3600 },
      });
      const json = await response.json();

      const postObjects = json.posts;

      const postElements: React.ReactElement[] = [];
      for (let post of postObjects) {
        postElements.push(
          <Link href={`/note/${post.id}`} key={post.id}>
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
          </Link>
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
        <HeaderTextLarge>📂 Notes</HeaderTextLarge>
        <RouterButton to="/posts">more -&gt;</RouterButton>
      </div>
      <div className="flex flex-col gap-5 mt-3">{posts ? posts : skeleton}</div>
    </div>
  );
}

export default PostSection;
