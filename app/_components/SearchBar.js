"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userToSearch, setUserToSearch] = useState("");

  function handleSearch() {
    if (searchQuery.startsWith("765")) {
      setUserToSearch(searchQuery);
      return;
    }

    if (searchQuery.split("/").length > 1) {
      setUserToSearch(searchQuery.split("/").at(4));
      return;
    }

    if (searchQuery.split("/").length === 1) {
      setUserToSearch(searchQuery);
    }
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
      <Link href={`/lookup/${userToSearch}`}>
        <button
          onMouseOver={handleSearch}
          className="bg-primary-400 rounded-r-sm py-2 px-6 text-primary-50 hover:bg-primary-300 transition-colors flex items-center gap-2 h-full"
        >
          <MagnifyingGlassIcon className="h-5 w-5 pointer-events-none" />
        </button>
      </Link>
    </div>
  );
}
