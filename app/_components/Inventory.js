import { useEffect, useState } from "react";
import { fetchInventory } from "../_lib/actions";
import Item from "./Item";
import LoadingSkeleton from "./LoadingSkeleton";

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

  if (isLoading) return <LoadingSkeleton.Inventory />;
  if (items.error)
    return (
      <div className="flex justify-center items-center col-span-full">
        <span className="text-primary-50 text-lg">Inventory is private</span>
      </div>
    );

  const totalInventoryValue = items.reduce(
    (acc, item) => (acc += item.pricereal),
    0
  );

  return (
    <div className="text-primary-50 col-span-full row-start-1 row-end-2 grid grid-rows-[48px_352px]">
      <div className="px-8 py-1 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl pr-4 border-r border-primary-300">
            Counter-Strike 2
          </span>
          <span className="text-accent-300 pl-4">
            {items.length} <span className="text-primary-50">Items</span>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-xs text-primary-100 italic">Total value</span>
          <span className="inline-block px-4 py-1 border border-primary-400 bg-primary-700">
            {totalInventoryValue.toFixed(2)}$
          </span>
        </div>
      </div>
      <div className="overflow-y-scroll border-t border-primary-400 px-2 py-2 w-full grid grid-cols-7 scrollbar-thin scrollbar-thumb-accent-950 scrollbar-track-primary-600 gap-1">
        {items.map((item) => (
          <Item
            itemName={item.marketname}
            image={item.image}
            price={item.pricereal}
            itemWear={item.wear}
            statTrak={item.isstattrak}
            inspect={item.inspectlink}
            key={item.id + Math.random() * 100000000}
          />
        ))}
      </div>
    </div>
  );
}
