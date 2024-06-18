"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import HeaderTextSmall from "./HeaderTextSmall";

function SearchSection() {
  const router = useRouter();
  const path = usePathname();
  const [query, setQuery] = useState<string>("");

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query) {
      if (path === "/") router.push(`/posts?query=${query}`);
      else router.replace(`/posts?query=${query}`);
    }
  };

  return (
    <div>
      <HeaderTextSmall>🔍 Search</HeaderTextSmall>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="검색어를 입력하세요"
        className="text-base w-full mt-2 px-4 py-2 bg-neutral-100 rounded-2xl focus:outline-none"
      />
    </div>
  );
}

export default SearchSection;
