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
    `https://www.steamwebapi.com/steam/api/item?key=YC7BATSKPQBYTLRM&market_hash_name=AK-47 | Vulcan (Factory New)`
  );
  if (!res.ok) throw new Error("There was an error");
  const data = res.json();

  return data;
}

export async function getUserInfo(userId) {
  console.log(userId);
  const res = await fetch(
    `https://www.steamwebapi.com/steam/api/profile?key=YC7BATSKPQBYTLRM&id=${userId}`
  );

  if (!res.ok) throw new Error("There was an error");
  const data = await res.json();
  console.log(data);
  return data;
}
