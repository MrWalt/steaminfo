import { getRecentlyPlayed } from "../_lib/data-services";

export default async function RecentlyPlayed({ steamId }) {
  const games = await getRecentlyPlayed(steamId);

  return (
    <div className="col-start-1 col-end-4">
      {games.map((game) => (
        <>
          <p>{game.name}</p>
          <p>{Math.ceil(game.playtime_2weeks / 60)} hours last 2 weeks</p>
        </>
      ))}
    </div>
  );
}
