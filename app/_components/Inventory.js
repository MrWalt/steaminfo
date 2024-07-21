import { getInventory } from "../_lib/data-services";

export default async function Inventory({ steamId }) {
  const items = await getInventory(steamId);

  if (items.error) return null;

  // console.log(items.at(0).marketname.split("(").at(0));
  // console.log(items.at(1).marketname.split("(").at(0));
  // console.log(items.at(2).marketname.split("(").at(0));
  // console.log(items.at(3).marketname.split("(").at(0));
  return <div></div>;
}
