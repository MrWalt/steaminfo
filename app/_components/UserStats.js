"use client";

import { useState } from "react";
import Playtime from "./Playtime";
import Inventory from "./Inventory";

export default function UserStats({ steamId }) {
  const [currentTab, setCurrentTab] = useState("playtime");

  function handleShowInventory() {
    setCurrentTab("inventory");
  }

  function handleShowPlaytime() {
    setCurrentTab("playtime");
  }

  return (
    <div className="flex flex-col col-start-1 col-end-4 row-start-2 row-end-4">
      <div className="flex text-primary-50">
        <span
          className={`${
            currentTab === "playtime" ? "bg-accent-950" : "bg-accent-800"
          }  inline-block px-2 py-1 rounded-tl-sm hover:bg-accent-950 transition-colors cursor-pointer`}
          onClick={handleShowPlaytime}
        >
          Playtime
        </span>
        <span
          className={`${
            currentTab === "inventory" ? "bg-accent-950" : "bg-accent-800"
          }  inline-block px-2 py-1 rounded-tr-sm hover:bg-accent-950 transition-colors cursor-pointer`}
          onClick={handleShowInventory}
        >
          Inventory
        </span>
      </div>
      <div className="bg-primary-600 rounded-b-sm border-t-4 border-accent-950 rounded-tr-sm grid grid-cols-[repeat(3,_1fr)] grid-rows-[400px]">
        {currentTab === "playtime" && <Playtime steamId={steamId} />}
        {currentTab === "inventory" && <Inventory steamId={steamId} />}
      </div>
      <div className="w-full h-4 bg-accent-950 rounded-b-sm"></div>
    </div>
  );
}
