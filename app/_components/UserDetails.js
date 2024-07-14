import { formatDistanceStrict, fromUnixTime } from "date-fns";
import { getSteamUser } from "../_lib/data-services";
import SteamIdClipboard from "./SteamIdClipboard";

export default async function UserDetails({ userStatus, userId, status }) {
  const {
    userName,
    steamId,
    vacBans,
    currentlyPlaying,
    lastSeen,
    tradeBanned,
    gameBans,
  } = await getSteamUser(userId);

  return (
    <>
      <div className="flex flex-col gap-1 py-2 bg-primary-700 rounded-sm justify-between ps-4 pe-12 flex-shrink-0 relative min-w-[30%]">
        <div>
          <p className={`text-2xl ${userStatus}`}>{userName}</p>
          <SteamIdClipboard steamId={steamId} />
          {/* <p className="text-sm text-primary-100">{steamId}</p> */}
        </div>
        {tradeBanned !== "none" || vacBans || gameBans ? (
          <div className="mt-auto">
            {tradeBanned === "banned" && (
              <p className="text-xs text-red-500">Currently trade banned</p>
            )}
            {vacBans > 0 && (
              <p className="text-xs text-red-500">
                {vacBans} VAC {`${vacBans === 1 ? " ban" : " bans"}`} on record
              </p>
            )}
            {gameBans > 0 && (
              <p className="text-xs text-red-500">
                {gameBans} game {`${gameBans === 1 ? " ban" : " bans"}`} on
                record
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
          {status === "online" && (
            <span className="text-accent-600">Online</span>
          )}
          {status === "inGame" && (
            <span className="text-green-500">Playing {currentlyPlaying}</span>
          )}
        </div>
      </div>
    </>
  );
}
