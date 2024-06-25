import { MapPinIcon, MapIcon } from "@heroicons/react/24/solid";
import { getCountry } from "../_lib/data-services";

export default async function Country({ countryCode }) {
  const country = await getCountry(countryCode);

  if (country.error)
    return (
      <>
        <div className="flex gap-2 flex-grow-0 justify-start items-center text-primary-50">
          <MapPinIcon className="w-5 h-5" />
          <span>No Location</span>
        </div>
      </>
    );

  const countryFlag = country.at(0).flags.png;
  const countryName = country.at(0).name.common;

  return (
    <>
      <div className="flex gap-2 flex-grow-0 justify-start items-center text-primary-50">
        <MapPinIcon className="w-5 h-5" />
        <span>{countryName}</span>
        <div className="w-[32px] h-[16px] relative">
          <img
            src={countryFlag}
            alt={`Flag of ${countryName}`}
            className="object-cover aspect-video"
          />
        </div>
      </div>
    </>
  );
}
