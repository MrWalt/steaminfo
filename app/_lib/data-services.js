export async function getSteamUser(profileLink) {
  let userId;

  if (profileLink.startsWith("765")) userId = profileLink;

  if (profileLink.split("/").length > 1) userId = profileLink.split("/").at(4);
  if (profileLink.split("/").length === 1) userId = profileLink;

  if (!userId.startsWith("765")) {
    const res = await fetch(
      `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.STEAM_KEY}&vanityurl=${userId}`
    );
    const data = await res.json();
    userId = data.response.steamid;
  }

  const res = await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${userId}`
  );

  const data = await res.json();

  const { NumberOfVACBans: vacBans, EconomyBan: tradeBanned } = await getBans(
    userId
  );
  const level = await getSteamLevel(userId);

  const {
    personaname: userName,
    avatarfull: avatar,
    steamid: steamId,
    loccountrycode: countryCode,
    realname: fullName,
    timecreated: createdAt,
    lastlogoff: lastSeen,
    gameextrainfo: currentlyPlaying,
    personastate: accountState,
    profileurl: profileUrl,
  } = data.response.players[0];

  const userData = {
    userName,
    steamId,
    avatar,
    countryCode,
    fullName,
    createdAt,
    lastSeen,
    currentlyPlaying,
    accountState,
    profileUrl,
    vacBans,
    tradeBanned,
    level,
  };

  return userData;
}

// export async function getNews() {
//   const res = await fetch(
//     `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json`
//   );
//   if (!res.ok) throw new Error("There was an error getting the news");
//   const data = res.json();

//   return data;
// }

// export async function getMarketSearch() {
//   const res = await fetch(
//     `https://www.steamwebapi.com/steam/api/item?key=${process.env.STEAM_WEB_API_KEY}&market_hash_name=AK-47 | Vulcan (Factory New)`
//   );
//   if (!res.ok) throw new Error("There was an error");
//   const data = res.json();

//   return data;
// }

export async function getCountry(code) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  if (!res.ok) return { error: true };

  const data = await res.json();

  return data;
}

export async function getSteamLevel(steamId) {
  const res = await fetch(
    `http://api.steampowered.com/IPlayerService/GetSteamLevel/v1?key=${process.env.STEAM_KEY}&steamid=${steamId}`
  );
  // console.log(res);
  if (!res.ok) throw new Error("There was an error");

  const data = await res.json();

  return data.response.player_level;
}

export async function getGames(userId) {
  const res = await fetch(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${userId}&format=json&include_appinfo=true&include_played_free_games=true`
  );

  if (!res.ok) throw new Error("There was an error");

  const data = await res.json();
  // console.log(data.response);
}

export async function getBans(userId) {
  const res = await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1?key=${process.env.STEAM_KEY}&steamids=${userId}`
  );
  // console.log(res);
  if (!res.ok) throw new Error("Error");

  const data = await res.json();

  return data.players.at(0);
}
