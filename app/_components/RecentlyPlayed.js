import { getRecentlyPlayed } from "../_lib/data-services";
import PlaytimeChart from "./PlaytimeChart";

export default async function RecentlyPlayed({ steamId }) {
  const games = await getRecentlyPlayed(steamId);

  let gamesToShow = games.map((game) => {
    return { name: game.name, value: Math.ceil(game.playtime_2weeks / 60) };
  });

  return (
    <div className="flex flex-col col-start-1 col-end-4">
      <div className="flex text-primary-50 ">
        <span className="bg-accent-950 inline-block px-2 py-1 rounded-tl-sm hover:bg-accent-950 transition-colors cursor-pointer">
          Playtime
        </span>
        <span className="bg-accent-800 inline-block px-2 py-1 rounded-tr-sm hover:bg-accent-950 transition-colors cursor-pointer">
          Inventory
        </span>
      </div>
      <div className=" bg-primary-600 rounded-b-sm basis-full border-t-4 border-accent-950 rounded-tr-sm">
        <PlaytimeChart data={gamesToShow} />
        {/* <div className="flex flex-col shrink-0 text-primary-50">
          {gamesToShow.map((game) => (
            <>
              <p>
                {game.name} &mdash; {game.value} Hours
              </p>
            </>
          ))} */}
        {/* </div> */}
      </div>
    </div>
  );
}
