"use client";

import Image from "next/image";
import Link from "next/link";

const userStatus = {
  offline: "border-primary-100 text-primary-100",
  online: "border-accent-600 text-accent-600",
  inGame: "border-green-500 text-green-500",
};

const hoverStatus = {
  offline: "hover:text-primary-50 text-primary-100",
  online: "hover:text-accent-200 text-accent-600",
  inGame: "hover:text-green-300 text-green-500",
};

export default function Friend({
  userName,
  avatar,
  steamId,
  accountState,
  currentlyPlaying,
}) {
  let status;
  if (accountState === 0) status = "offline";
  if (accountState >= 1 && !currentlyPlaying) status = "online";
  if (accountState >= 1 && currentlyPlaying) status = "inGame";

  return (
    <div className="bg-primary-700 py-2 px-4 [&:not(:last-child)]:border-b border-primary-400 flex overflow-hidden">
      <div className="flex gap-3">
        <div className="flex justify-center items-center">
          <div
            className={`relative w-11 h-11 overflow-hidden rounded-full border-[3px] ${userStatus[status]}               hover:scale-110 transition-transform cursor-pointer`}
          >
            <Link href={`/lookup/${steamId}`}>
              <Image src={avatar} fill alt="Some Image" />
            </Link>
          </div>
        </div>

        <div>
          <Link
            href={`/lookup/${steamId}`}
            className={`${userStatus[status]} ${hoverStatus[status]} transition-colors cursor-pointer text-ellipsis`}
          >
            {userName.length > 16 ? `${userName.slice(0, 16)}...` : userName}
          </Link>
          {status === "online" && (
            <p className={`${userStatus[status]} text-sm`}>Online</p>
          )}
          {status === "offline" && (
            <p className={`${userStatus[status]} text-sm`}>Offline</p>
          )}

          {status === "inGame" && currentlyPlaying && (
            <p className={`${userStatus[status]} text-sm`}>
              Playing {currentlyPlaying}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
