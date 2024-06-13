"use client";

import { useEffect, useState } from "react";
import HeaderTextLarge from "../common/HeaderTextLarge";
import Tag from "../common/Tag";
import { TagColor } from "@/types/TagColor";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

function ListSection() {
  const [posts, setPosts] = useState<React.ReactElement[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>("0");

  const fetchPosts = async () => {
    const response = await fetch(`/api/database/posts/${nextCursor}`, {
      method: "POST",
    });
    const json = await response.json();

    setNextCursor(json.nextCursor);

    const postObjects = json.posts;
    const postElements = [...posts];
    for (let post of postObjects) {
      postElements.push(
        <Link href={`/posts/${post.id}`}>
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

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <HeaderTextLarge>📂 Posts</HeaderTextLarge>
      <div className="flex flex-col gap-5 mt-3 h-4/5">{posts}</div>
      {nextCursor && (
        <button
          onClick={fetchPosts}
          className="text-sm text-neutral-400 bg-white hover:bg-neutral-100 min-w-max w-min h-min px-1.5 py-0.5 rounded-lg"
        >
          more
        </button>
      )}
    </div>
  );
}

export default ListSection;
