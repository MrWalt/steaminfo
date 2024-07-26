export function formatPlaytime(playtime, type = "fullText") {
  if (type === "onlyNumbers") return (playtime / 60).toFixed(0);

  if (playtime < 60 && playtime !== 1) return `${playtime} minutes`;
  if (playtime == 1) return `${playtime} minute`;
  if ((playtime / 60).toFixed(0) == 1)
    return `${(playtime / 60).toFixed(0)} hour`;
  return `${(playtime / 60).toFixed(0)} hours`;
}

export function formatItemName(itemName) {
  let formattedItemName = itemName.split("(").at(0);

  if (formattedItemName.startsWith("StatTrak"))
    formattedItemName = formattedItemName.slice(9, formattedItemName.length);

  if (formattedItemName.startsWith("★ StatTrak"))
    formattedItemName = formattedItemName.slice(11, formattedItemName.length);

  if (formattedItemName.length > 26)
    return formattedItemName.slice(0, 26) + "...";

  return formattedItemName;
}
