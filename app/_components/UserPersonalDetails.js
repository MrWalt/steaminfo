import { CalendarDaysIcon, UserIcon } from "@heroicons/react/24/solid";
import Country from "./Country";
import { format, fromUnixTime } from "date-fns";

export default function UserPersonalDetails({
  countryCode,
  fullName,
  createdAt,
}) {
  return (
    <div className="flex flex-col gap-2 justify-between px-2 py-1 flex-shrink-0">
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
              "do MMMM',' yyyy"
            ).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
