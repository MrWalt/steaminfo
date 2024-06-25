import Image from "next/image";
import { getUserInfo } from "../_lib/data-services";
import Country from "./Country";
import { CalendarDaysIcon, UserIcon } from "@heroicons/react/24/solid";

function formatDate(date) {
  const userDate = new Date(date * 1000);
  const formattedYear = userDate.getFullYear();
  const formattedMonth = userDate.toLocaleString("default", { month: "long" });
  const formattedDay = userDate.getDay();
  const suffixes = {
    1: "st",
    2: "nd",
    3: "rd",
  };

  return `${formattedMonth} ${formattedDay}${
    suffixes[Number(formattedDay)] ?? "th"
  }, ${formattedYear}`;
}

const userStatus = {
  0: "border-primary-100 text-primary-100",
  1: "border-accent-600 text-accent-600",
  2: "border-green-500 text-green-500",
};

export default async function User({ userId }) {
  const user = await getUserInfo(userId);

  //   console.log(user.response.players[0]);

  const {
    personaname: userName,
    avatarfull: avatar,
    steamid: steamId,
    loccountrycode: countryCode,
    realname: fullName,
    timecreated: createdAt,
    vac: vacBans,
    lastlogoff: lastSeen,
    gameextrainfo: currentlyPlaying,
    personastate,
    profileurl: profileUrl,
  } = user;

  const status = personastate ? 1 : 0;

  //   console.log(new Date(user.lastlogoff * 1000));

  return (
    // <div></div>
    // Avatar, UserName, SteamID and Status
    <div className="max-w-[980px]">
      <div className="bg-primary-600 flex gap-6 py-6 px-6 rounded-sm">
        <div
          className={`relative h-[128px] min-w-[128px] rounded-full border-4 overflow-hidden ${
            status === 1
              ? currentlyPlaying
                ? userStatus[2]
                : userStatus[1]
              : userStatus[0]
          }`}
        >
          <a href={avatar} alt="Photo of something" target="blank">
            <Image
              src={avatar}
              fill
              alt="Image"
              className="hover:blur object-cover transition-all scale-[1.1]"
            />
          </a>
          <span className="absolute text-2xl text-primary-50 top-[50%] right-[50%] translate-x-[50%] translate-y-[50%] view-image-text font-bold text-outline bg-accent-600 px-2 py-1 rounded-sm">
            View
          </span>
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1 px-4 py-2 bg-primary-700 rounded-sm min-w-[40%] justify-between">
          <div>
            <p
              className={`text-2xl ${
                status === 1
                  ? currentlyPlaying
                    ? userStatus[2]
                    : userStatus[1]
                  : userStatus[0]
              }`}
            >
              {userName}
            </p>
            <p className="text-sm text-primary-100">{steamId}</p>
            {vacBans > 0 && (
              <span className="text-sm text-red-500 mt-auto">
                {vacBans} VAC ban on record
              </span>
            )}
          </div>
          <div className="text-primary-50">
            {!status && (
              <>
                <span className="text-xs">Last seen</span>
                <p>{formatDate(lastSeen)}</p>
              </>
            )}
            {status === 1 && !currentlyPlaying && (
              <span className="text-accent-600">Online</span>
            )}
            {status === 1 && currentlyPlaying && (
              <span className="text-green-500">Playing {currentlyPlaying}</span>
            )}
          </div>
        </div>

        {/* Personal Details / Location, Name, Member Since*/}
        <div className="flex flex-col gap-2 justify-between px-2 py-1">
          <div className="flex flex-col gap-1">
            <Country countryCode={countryCode} />
            {fullName !== "" && (
              <div className="flex items-center gap-2">
                <UserIcon className="w-5 h-5 text-primary-50" />
                <span
                  className={`text-md text-primary-50 inline-block ${
                    fullName ? "italic" : ""
                  }`}
                >
                  {fullName || "No Name"}
                </span>
              </div>
            )}
          </div>
          <div>
            <span className="text-xs text-primary-50 ml-7">Member since</span>
            <div className="flex items-center gap-2">
              <CalendarDaysIcon className="w-5 h-5 text-primary-50" />
              <span className="text-md text-primary-50">
                {formatDate(createdAt)}
              </span>
            </div>
          </div>
        </div>

        {/* View on Steam Button */}
        <div className="flex flex-col justify-end">
          <a
            href={profileUrl}
            target="blank"
            className="inline-block text-primary-50 bg-primary-700 py-2 px-4 rounded-sm hover:bg-accent-900 transition-colors"
          >
            View On Steam
          </a>
        </div>
      </div>
    </div>
  );
}
