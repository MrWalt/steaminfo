export async function getSteamUser(profileLink, type = "full") {
  // console.log("FETCH");
  if (type === "multiple") {
    const res = await fetch(
      `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&format=json&steamids=${profileLink}`
    );

    const data = await res.json();

    return data.response.players;
  }

  // Resolve Vanity URL
  if (!profileLink.startsWith("765")) {
    const res = await fetch(
      `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.STEAM_KEY}&vanityurl=${profileLink}`
    );
    const data = await res.json();
    profileLink = data.response.steamid;
  }

  const res = await fetch(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${profileLink}`
  );

  const data = await res.json();

  if (type === "full") {
    const {
      NumberOfVACBans: vacBans,
      EconomyBan: tradeBanned,
      NumberOfGameBans: gameBans,
    } = await getBans(profileLink);

    const level = await getSteamLevel(profileLink);

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
      communityvisibilitystate: isPrivate,
    } = data.response.players[0];

    if (isPrivate === 2) {
      const userData = {
        userName,
        steamId,
        avatar,
        accountState,
        profileUrl,
        vacBans,
        tradeBanned,
        gameBans,
        isPrivate: true,
      };

      return userData;
    }

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
      gameBans,
      level,
    };

    return userData;
  }

  const {
    personaname: userName,
    profileurl: profileUrl,
    avatarfull: avatar,
    gameextrainfo: currentlyPlaying,
    personastate: accountState,
  } = data.response.players[0];

  const userData = {
    userName,
    profileUrl,
    currentlyPlaying,
    avatar,
    accountState,
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

export async function getFriends(steamId) {
  const res = await fetch(
    `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.STEAM_KEY}&steamid=${steamId}&relationship=friend`
  );

  if (!res.ok) return { private: true };

  const data = await res.json();

  return data.friendslist.friends;
}

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

  // if (!res.ok) throw new Error("There was an error");

  const data = await res.json();
  return data.response;
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

export async function getRecentlyPlayed(userId) {
  const res = await fetch(
    `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_KEY}&steamid=${userId}`
  );

  if (!res.ok) throw new Error("Could not get playtime");

  const data = await res.json();
  // console.log(data.response.games[0]);

  return data.response.games;
}

export async function getInventory(userId) {
  const res = await fetch(
    `https://www.steamwebapi.com/steam/api/inventory?key=${process.env.STEAM_WEB_API_KEY}&steam_id=${userId}`
  );

  // if (!res.ok) throw new Error("Could not fetch inventory");
  const data = await res.json();
  // console.log(data);
  return data;
}
