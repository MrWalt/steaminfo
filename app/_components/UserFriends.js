import { getFriends, getSteamUser } from "../_lib/data-services";
import Friend from "./Friend";

// const friendCaps = Array.from({ length: 20 }, (value, i) => i * 100 + 100);

export default async function UserFriends({ steamId }) {
  const friends = await getFriends(steamId);
  let friendsToDisplay, friendsSlice, fetchedFriends, friendsToFetch;

  // God forgive me for this stupid code, steam api forced my hand
  // if (!friends?.private)
  //   friendsToFetch = friends?.map((friend) => friend.steamid);

  // if (!friends?.private)
  //   friendsSlice = friendCaps?.map((cap) => {
  //     const spliced = friendsToFetch?.slice(`${cap - 100}`, cap);

  //     return spliced;
  //   });

  // I hope this does not cause a timeout // This causes a timeout, figure out different way
  // if (!friends?.private)
  //   fetchedFriends = await Promise.all(
  //     friendsSlice.map(async function (ids) {
  //       const steamIds = ids.join(",");

  //       return await getSteamUser(steamIds, "multiple");
  //     })
  //   );

  if (!friends?.private)
    friendsToFetch = friends
      ?.map((friend, i) => {
        if (i < 30) return friend.steamid;
      })
      ?.splice(0, 30);

  if (!friends?.private)
    fetchedFriends = await getSteamUser(friendsToFetch.join(","), "multiple");

  if (!friends?.private)
    friendsToDisplay = fetchedFriends
      .flat()
      .sort((a, b) => b.personastate - a.personastate);

  return (
    <div className="flex flex-col w-[300px] row-start-1 row-end-4 col-start-4 cold-end-5 h-full">
      <span className="text-primary-50 px-4 py-1 rounded-t-sm bg-accent-950 self-start">
        {friends?.length} Friends
      </span>

      <div className="bg-primary-600 flex flex-col gap-1 py-2 border-t-4 border-accent-950 rounded-tr-sm overflow-y-scroll scrollbar-thumb-accent-950 scrollbar-thin h-full scrollbar-track-primary-600">
        {!friends?.private ? (
          <div className="text-primary-50 pl-2">
            {friendsToDisplay.map((friend) => (
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
      <div className="w-full h-4 bg-accent-950 rounded-b-sm shrink-0"></div>
    </div>
  );
}
