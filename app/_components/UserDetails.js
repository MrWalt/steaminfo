import { formatDistanceStrict, fromUnixTime } from "date-fns";
import { getSteamUser } from "../_lib/data-services";

const levelColor = {
  0: "border-gray-500",
  1: "border-red-700",
  2: "border-orange-600",
  3: "border-yellow-500",
  4: "border-green-800",
  5: "border-blue-700",
  6: "border-violet-700",
  7: "border-fuschia-500",
  8: "border-rose-950",
  9: "border-yellow-900",
};

export default async function UserDetails({ userStatus, userId, status }) {
  const {
    userName,
    steamId,
    vacBans,
    currentlyPlaying,
    lastSeen,
    tradeBanned,
    level,
  } = await getSteamUser(userId);

  const levelString = String(level);
  const levelIdentifier =
    levelString.split("").length > 1
      ? levelString.split("").at(levelString.split("").length - 2)
      : "";

  return (
    <div className="flex flex-col gap-1 py-2 bg-primary-700 rounded-sm justify-between ps-4 pe-12 flex-shrink-0 relative min-w-[30%]">
      <div>
        <p className={`text-2xl ${userStatus}`}>{userName}</p>
        <p className="text-sm text-primary-100">{steamId}</p>
        <div className="absolute right-2 bottom-2 text-primary-50 flex items-center justify-center flex-col">
          <p>Level</p>
          <div
            className={`w-8 h-8 bg-primary-500 rounded-full ml-1 flex items-center justify-center border-2 ${levelColor[levelIdentifier]}`}
          >
            <span className="text-lg">{level}</span>
          </div>
        </div>
      </div>
      {tradeBanned !== "none" || vacBans ? (
        <div className="mt-auto">
          {tradeBanned === "banned" && (
            <p className="text-xs text-red-500">Currently trade banned</p>
          )}
          {vacBans > 0 && (
            <p className="text-xs text-red-500">
              {vacBans} VAC {`${vacBans === 1 ? " ban" : " bans"}`} on record
            </p>
          )}
        </div>
      ) : (
        ""
      )}

      <div className="text-primary-50">
        {status === "offline" && lastSeen ? (
          <>
            <span className="text-xs">Last seen</span>
            <p>
              {`${formatDistanceStrict(
                new Date(),
                fromUnixTime(lastSeen)
              )} ago`}
            </p>
          </>
        ) : (
          ""
        )}
        {!lastSeen && status === "offline" && (
          <span className="text-primary-100">Offline</span>
        )}
        {status === "online" && <span className="text-accent-600">Online</span>}
        {status === "inGame" && (
          <span className="text-green-500">Playing {currentlyPlaying}</span>
        )}
      </div>
    </div>
  );
}
