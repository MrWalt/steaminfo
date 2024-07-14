"use client";

import { DocumentTextIcon } from "@heroicons/react/24/solid";

export default function SteamIdClipboard({ steamId }) {
  function handleCopy() {
    navigator.clipboard.writeText(steamId);
  }

  return (
    <div className="inline-block">
      <div
        className="flex items-center gap-1 text-sm text-primary-100 cursor-pointer hover:bg-primary-400 transition-all rounded-sm active:bg-accent-900"
        onClick={handleCopy}
      >
        <span>{steamId}</span>
        <DocumentTextIcon className="w-4 h-4 inline-block" />
      </div>
    </div>
  );
}
