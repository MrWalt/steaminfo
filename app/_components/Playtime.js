import Image from "next/image";
import { getGames, getRecentlyPlayed } from "../_lib/data-services";
import PlaytimeChart from "./PlaytimeChart";
import { unstable_noStore as noStore } from "next/cache";
import { GAMES_TO_DISPLAY } from "../_lib/constants";
import { formatPlaytime } from "../_lib/helpers";

export default async function Playtime({ steamId }) {
  noStore();
  const recentlyPlayedGames = await getRecentlyPlayed(steamId);
  const allGames = await getGames(steamId);

  const topGames = allGames?.games
    ?.sort((a, b) => b.playtime_forever - a.playtime_forever)
    ?.map((game, i) => {
      if (i < GAMES_TO_DISPLAY) return game;
    })
    .slice(0, GAMES_TO_DISPLAY);

  const recentGamesToDisplay = recentlyPlayedGames?.map((game) => {
    return { name: game.name, value: game.playtime_2weeks };
  });

  const topGamesToDisplay = topGames?.map((game) => {
    return {
      gameName: game.name,
      value: game.playtime_forever,
      gameId: game.appid,
      avatar: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
    };
  });

  const recentPlaytime = recentGamesToDisplay?.reduce(
    (acc, cur) => (acc += cur.value),
    0
  );

  const totalPlaytime = allGames?.games?.reduce(
    (acc, cur) => (acc += cur.playtime_forever),
    0
  );

  // Refactor later

  return (
    <div className="flex flex-col col-start-1 col-end-4 row-start-2 row-end-4">
      <div className="flex text-primary-50">
        <span className="bg-accent-950 inline-block px-2 py-1 rounded-tl-sm hover:bg-accent-950 transition-colors cursor-pointer">
          Playtime
        </span>
        <span className="bg-accent-800 inline-block px-2 py-1 rounded-tr-sm hover:bg-accent-950 transition-colors cursor-pointer">
          Inventory
        </span>
      </div>
      <div className="bg-primary-600 rounded-b-sm border-t-4 border-accent-950 rounded-tr-sm grid grid-cols-[repeat(3,_1fr)] grid-rows-[400px]">
        {allGames?.games?.length > 0 && totalPlaytime !== 0 ? (
          <>
            <Playtime.RecentPlaytime
              recentGamesToDisplay={recentGamesToDisplay}
              recentPlaytime={recentPlaytime}
            />
            <Playtime.Chart
              topGamesToDisplay={topGamesToDisplay}
              recentGamesToDisplay={recentGamesToDisplay}
              totalPlaytime={totalPlaytime}
              gameCount={allGames.game_count}
            />
            <Playtime.TopGames topGamesToDisplay={topGamesToDisplay} />
          </>
        ) : (
          <span className="text-primary-50 text-center col-span-full my-auto text-lg">
            Playtime is private
          </span>
        )}
      </div>
    </div>
  );
}

// Using HOC as moving everything to seperate components will clutter the _components folder

// This shows the Recently Played Games
function RecentPlaytime({ recentPlaytime, recentGamesToDisplay }) {
  if (!recentPlaytime)
    return (
      <div className="grow-0 text-primary-50 border border-primary-400 overflow-scroll no-scrollbar flex flex-col bg-primary-700 border-t-0 gap-1 px-6 py-8">
        <span className="text-center">
          User has not played anything recently
        </span>
      </div>
    );

  return (
    <div className="grow-0 text-primary-50 border border-primary-400 overflow-scroll no-scrollbar flex flex-col bg-primary-700 border-t-0 gap-1 px-6 py-8">
      <span className="text-sm text-primary-200 mb-2">
        {formatPlaytime(recentPlaytime)} played past 2 weeks
      </span>
      {recentGamesToDisplay?.map((game) => (
        <p
          key={game.name}
          className="text-lg [&:not(:last-child)]:border-b border-accent-950"
        >
          {game.name} &mdash;{" "}
          <span className="text-accent-300">{formatPlaytime(game.value)}</span>
        </p>
      ))}
    </div>
  );
}

// This shows the Charts for both playtimes
function Chart({
  recentGamesToDisplay,
  topGamesToDisplay,
  totalPlaytime,
  gameCount,
}) {
  return (
    <div className="text-primary-50 py-6 px-4">
      <p className="text-xs text-center text-primary-200 italic">
        Outer circle is recent games, inner circle is top 5 games
      </p>
      <PlaytimeChart
        recentPlaytime={recentGamesToDisplay}
        totalPlaytime={topGamesToDisplay}
      />
      <p className="text-center text-xl">
        {" "}
        <span className="text-accent-300">{gameCount}</span> owned games
      </p>
      <p className="text-center">
        <span className="text-accent-300">{formatPlaytime(totalPlaytime)}</span>{" "}
        hours on record
      </p>
    </div>
  );
}

// This shows the top games

function TopGames({ topGamesToDisplay }) {
  return (
    <div className="grid grid-rows-[auto,_repeat(5,_1fr)] grid-cols-1 gap-2 text-primary-50 border-l border-primary-400 px-4 py-8">
      <p className="text-primary-100 text-sm">5 most played games</p>
      {topGamesToDisplay?.map((game) => (
        <div
          key={game.gameName}
          className="bg-primary-700 border border-primary-500 rounded-sm flex gap-2 items-center px-2"
        >
          <div className="relative w-[42px] h-[42px] overflow-hidden border-2 border-accent-900">
            <Image
              src={game.avatar}
              fill
              className="object-cover"
              alt={`${game.gameName} logo`}
              quality={100}
            />
          </div>
          <div>
            <p>{game.gameName}</p>
            <p>
              <span className="text-accent-300">
                {formatPlaytime(game.value, "onlyNumbers")}
              </span>{" "}
              hours
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

Playtime.RecentPlaytime = RecentPlaytime;
Playtime.Chart = Chart;
Playtime.TopGames = TopGames;
