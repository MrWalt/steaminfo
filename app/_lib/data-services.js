export async function getNews() {
  const res = await fetch(
    `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json`
  );
  if (!res.ok) throw new Error("There was an error getting the news");
  const data = res.json();

  return data;
}

export async function getMarketSearch() {
  const res = await fetch(
    `https://www.steamwebapi.com/steam/api/item?key=${process.env.STEAM_WEB_API_KEY}&market_hash_name=AK-47 | Vulcan (Factory New)`
  );
  if (!res.ok) throw new Error("There was an error");
  const data = res.json();

  return data;
}

export async function getUserInfo(userId) {
  const res = await fetch(
    `https://www.steamwebapi.com/steam/api/profile?key=${process.env.STEAM_WEB_API_KEY}&id=${userId}`
  );
  if (!res.ok) throw new Error("There was an error");
  const data = await res.json();
  console.log(data);
  const { steamid, vac } = data;

  const resFinal = await fetch(`
          http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${steamid}`);

  if (!res.ok) throw new Error("There was an error");
  const dataSecond = await resFinal.json();

  const dataFinal = { ...dataSecond.response.players[0], vac };
  console.log(dataFinal);
  return dataFinal;
}

export async function getCountry(code) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  if (!res.ok) return { error: true };

  const data = await res.json();

  return data;
}
