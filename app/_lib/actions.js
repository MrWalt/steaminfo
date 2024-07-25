"use server";

import {
  getFriends,
  getGames,
  getInventory,
  getRecentlyPlayed,
  getSteamUser,
} from "./data-services";

export async function fetchRecentGameData(steamId) {
  const dataRecently = await getRecentlyPlayed(steamId);

  return dataRecently;
}

export async function fetchAllGameData(steamId) {
  const dataAllGames = await getGames(steamId);

  return dataAllGames;
}

export async function fetchInventory(steamId) {
  const items = await getInventory(steamId);

  return items;
}

export async function fetchFriendsIDs(steamId) {
  const friendsIds = await getFriends(steamId);

  return friendsIds;
}

export async function fetchFriendsSteam(steamIds) {
  const friendsProfiles = await getSteamUser(steamIds, "multiple");

  return friendsProfiles;
}
