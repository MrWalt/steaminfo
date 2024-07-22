import { useEffect, useState } from "react";
import { fetchInventory } from "../_lib/actions";

export default function Inventory({ steamId }) {
  const [items, setItems] = useState([]);
  useEffect(
    function () {
      async function fetchItems() {
        const items = await fetchInventory(steamId);
        setItems(items);
      }
      if (steamId) fetchItems();
    },
    [steamId]
  );
  console.log(items);
  if (items.error) return <div> Private </div>;
  return <div>Inventory</div>;
}
