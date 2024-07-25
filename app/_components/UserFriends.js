"use client";

import Friend from "./Friend";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { fetchFriendsIDs, fetchFriendsSteam } from "../_lib/actions";
import { FRIENDS_PER_PAGE } from "../_lib/constants";
import LoadingSkeleton from "./LoadingSkeleton";

export default function UserFriends({ steamId }) {
  const [friendsIds, setFriendsIds] = useState([]);
  const [friendsToDisplay, setFriendsToDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  let friendsToFetch;

  useEffect(function () {
    async function fetchIds() {
      const friendsIds = await fetchFriendsIDs(steamId);

      setFriendsIds(friendsIds);
    }

    if (steamId) fetchIds();
  }, []);

  if (!friendsIds?.private)
    friendsToFetch = friendsIds
      ?.map((friend, i) => {
        if (i <= page * FRIENDS_PER_PAGE && i >= (page - 1) * FRIENDS_PER_PAGE)
          return friend.steamid;
      })
      .join(",");

  useEffect(
    function () {
      setIsLoading(true);
      async function fetchFriends() {
        const friends = await fetchFriendsSteam(friendsToFetch);

        setFriendsToDisplay(friends);
        setIsLoading(false);
      }
      if (friendsToFetch) fetchFriends();
      if (!friendsToFetch) setIsLoading(false);
    },
    [friendsToFetch]
  );

  const numFriends = friendsIds?.length;
  const filteredFriends = friendsToDisplay?.sort(
    (a, b) => b.personastate - a.personastate
  );

  function handleForwardPage() {
    if (numFriends / FRIENDS_PER_PAGE > page) setPage((page) => page + 1);
  }

  function handleBackPage() {
    if (page !== 1) setPage((page) => page - 1);
  }

  return (
    <div className="flex flex-col w-[300px] row-start-1 row-end-4 col-start-4 cold-end-5 h-full">
      <span className="text-primary-50 px-4 py-1 rounded-t-sm bg-accent-950 self-start flex items-center gap-1">
        {numFriends ? numFriends : ""} Friends
      </span>

      <div className="bg-primary-600 flex flex-col gap-1 py-2 border-t-4 border-accent-950 rounded-tr-sm overflow-y-scroll scrollbar-thumb-accent-950 scrollbar-thin h-full scrollbar-track-primary-600">
        {isLoading ? (
          <LoadingSkeleton.Friends />
        ) : !friendsIds?.private ? (
          <div className="text-primary-50 pl-2">
            {filteredFriends.map((friend) => (
              <Friend
                userName={friend.personaname}
                avatar={friend.avatarfull}
                accountState={friend.personastate}
                currentlyPlaying={friend.gameextrainfo}
                key={friend.steamid}
                steamId={friend.steamid}
              />
            ))}
          </div>
        ) : (
          <span className="text-primary-50 text-center mt-4">
            Friends list is private
          </span>
        )}
      </div>
      <div className="w-full flex items-center justify-center gap-1 h-8 bg-accent-950 rounded-b-sm shrink-0 text-primary-50">
        {!friendsIds?.private && (
          <>
            <button
              className="hover:bg-accent-700 cursor-pointer rounded-sm transition-all disabled:text-primary-200 disabled:hover:bg-transparent disabled:cursor-default"
              disabled={page === 1}
            >
              <ChevronLeftIcon className="w-6 h-6" onClick={handleBackPage} />
            </button>
            <span>{page}</span>
            <button
              className="hover:bg-accent-700 cursor-pointer rounded-sm transition-all disabled:text-primary-200 disabled:hover:bg-transparent disabled:cursor-default"
              disabled={numFriends / FRIENDS_PER_PAGE < page}
            >
              <ChevronRightIcon
                className="w-6 h-6"
                onClick={handleForwardPage}
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
