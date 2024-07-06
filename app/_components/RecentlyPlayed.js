import { getRecentlyPlayed } from "../_lib/data-services";
import PlaytimeChart from "./PlaytimeChart";

export default async function RecentlyPlayed({ steamId }) {
  const games = await getRecentlyPlayed(steamId);

  let gamesToShow = games.map((game) => {
    return { name: game.name, value: game.playtime_2weeks };
  });

  const totalPlaytime = gamesToShow.reduce((acc, cur) => (acc += cur.value), 0);

  return (
    <div className="flex flex-col col-start-1 col-end-4 row-start-2 row-end-4 h-full">
      <div className="flex text-primary-50 ">
        <span className="bg-accent-950 inline-block px-2 py-1 rounded-tl-sm hover:bg-accent-950 transition-colors cursor-pointer">
          Playtime
        </span>
        <span className="bg-accent-800 inline-block px-2 py-1 rounded-tr-sm hover:bg-accent-950 transition-colors cursor-pointer">
          Inventory
        </span>
      </div>
      <div className=" bg-primary-600 rounded-b-sm basis-full border-t-4 border-accent-950 rounded-tr-sm grid grid-cols-[repeat(3,_1fr)]">
        <div className="flex flex-col text-primary-50 shrink-0 justify-center border border-primary-400 bg-primary-700 px-6 border-t-0 overflow-scroll no-scrollbar gap-1">
          <span className="text-sm text-primary-200">
            {(totalPlaytime / 60).toFixed(0)} hours played past 2 weeks
          </span>
          {gamesToShow.map((game) => (
            <p
              key={game.name}
              className="text-lg [&:not(:last-child)]:border-b border-accent-950"
            >
              {game.name} &mdash;{" "}
              <span className="text-accent-300">
                {(game.value / 60).toFixed(0) > 0
                  ? `${(game.value / 60).toFixed(0)} hour${
                      (game.value / 60).toFixed(0) > 1 ? "s" : ""
                    }`
                  : `${game.value} minute${game.value > 1 ? "s" : ""}`}
              </span>
            </p>
          ))}
        </div>
        <PlaytimeChart data={gamesToShow} />
      </div>
    </div>
  );
}
