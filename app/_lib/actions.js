"use server";

import { getGames, getInventory, getRecentlyPlayed } from "./data-services";

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
