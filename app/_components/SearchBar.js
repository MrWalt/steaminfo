"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleSearch() {
    const params = new URLSearchParams(searchParams);
    params.set("userId", searchQuery);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-[560px] flex">
      <input
        type="text"
        name="userId"
        className="px-4 py-2 w-full rounded-s-sm focus:outline-none focus:shadow-inner transition-shadow"
        placeholder="SteamID/Profile Link"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className=" top-0 right-0 bg-primary-400 rounded-r-sm py-2 px-6 text-primary-50 hover:bg-primary-300 transition-colors flex items-center gap-2"
      >
        {/* <span>Search</span> */}
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
