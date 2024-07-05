import { CalendarDaysIcon, UserIcon } from "@heroicons/react/24/solid";
import Country from "./Country";
import { format, fromUnixTime } from "date-fns";
import { getSteamUser } from "../_lib/data-services";
import PrivateProfile from "./PrivateProfile";

const levelColor = {
  0: "border-gray-500",
  1: "border-red-700",
  2: "border-orange-600",
  3: "border-yellow-400",
  4: "border-green-800",
  5: "border-blue-700",
  6: "border-violet-700",
  7: "border-fuschia-500",
  8: "border-rose-950",
  9: "border-yellow-600",
};

export default async function UserPersonalDetails({ userId }) {
  const { countryCode, level, fullName, createdAt, isPrivate } =
    await getSteamUser({
      profileLink: userId,
    });

  if (isPrivate) return <PrivateProfile />;

  const levelString = String(level);
  const levelIdentifier =
    levelString.split("").length > 1
      ? levelString.split("").at(levelString.split("").length - 2)
      : 0;

  return (
    <>
      {/* Level */}
      <div className="absolute top-3 right-3 px-3 py-2 text-primary-50  flex justify-center items-center border border-primary-400 gap-1 rounded-sm ">
        <p>Level</p>
        <div
          className={`w-8 h-8 bg-primary-500 rounded-full ml-1 flex items-center justify-center border-2 ${levelColor[levelIdentifier]}`}
        >
          <span className="text-lg">{level}</span>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 justify-between px-2 py-1 basis-full">
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
          <p className="text-xs text-primary-50 ml-7">Joined</p>
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-5 h-5 text-primary-50" />
            <span className="text-md text-primary-50">
              {format(
                fromUnixTime(createdAt),
                "do MMM',' yyyy"
              ).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
