import { useEffect, useState } from "react";
import { fetchInventory } from "../_lib/actions";
import Item from "./Item";

export default function Inventory({ steamId }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      setIsLoading(true);
      async function fetchItems() {
        const items = await fetchInventory(steamId);
        setItems(items);
        setIsLoading(false);
      }
      if (steamId) fetchItems();
    },
    [steamId]
  );

  if (isLoading) return <p>Loading...</p>;
  console.log(items);
  if (items.error) return <div> Private </div>;
  return (
    <div className="text-primary-50 pt-3 col-span-full">
      <div className="mb-3 px-6">
        <p className="text-xl">Counter-Strike 2</p>
        <p className="text-accent-300">
          {items.length}{" "}
          <span className="text-primary-50">items in inventory</span>
        </p>
      </div>
      <div className="overflow-y-scroll border-t h-5/6 border-primary-400 pl-2 py-3 w-full grid grid-cols-7 scrollbar-thin scrollbar-thumb-accent-950 scrollbar-track-primary-600 gap-1">
        {items.map((item) => (
          <Item
            itemName={item.marketname}
            image={item.image}
            price={item.pricereal}
            key={item.id + Math.random() * 100000000}
          />
        ))}
      </div>
    </div>
  );
}
