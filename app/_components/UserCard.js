import Image from "next/image";
import UserDetails from "./UserDetails";
import UserPersonalDetails from "./UserPersonalDetails";
import { getSteamUser } from "../_lib/data-services";

const userStatus = {
  offline: "border-primary-100 text-primary-100",
  online: "border-accent-600 text-accent-600",
  inGame: "border-green-500 text-green-500",
};

export default async function UserCard({ userId }) {
  const { avatar, currentlyPlaying, accountState, profileUrl, avatarBlur } =
    await getSteamUser(userId);

  let status;
  if (accountState === 0) status = "offline";
  if (accountState >= 1 && !currentlyPlaying) status = "online";
  if (accountState >= 1 && currentlyPlaying) status = "inGame";

  return (
    <div className="col-start-1 col-end-4 bg-primary-600 flex gap-4 py-4 px-4 rounded-layout border border-primary-400 relative h-full">
      {/* User Avatar */}

      <div
        className={`relative h-[160px] min-w-[160px] rounded-full border-4 overflow-hidden ${userStatus[status]} self-center`}
      >
        <a href={avatar} alt="Photo of something" target="blank">
          <Image
            src={avatar}
            fill
            alt="Image"
            className="hover:blur object-cover transition-all scale-[1.1] round"
          />
        </a>
        <span className="absolute text-xl text-primary-50 top-[50%] right-[50%] translate-x-[50%] translate-y-[50%] view-image-text font-bold text-outline bg-primary-700 px-2 py-1 rounded-sm hover:bg-primary-200">
          View
        </span>
      </div>

      <UserDetails
        userStatus={userStatus[status]}
        status={status}
        userId={userId}
      />
      <UserPersonalDetails userId={userId} />

      <div className="flex justify-end items-end flex-shrink-0">
        <a
          href={profileUrl}
          target="blank"
          className="inline-block bg-primary-700 text-primary-50 px-3 py-2 rounded-sm hover:bg-accent-900 transition-colors"
        >
          View on Steam
        </a>
      </div>
    </div>
  );
}
