import { getFriends, getSteamUser } from "../_lib/data-services";
import Friend from "./Friend";

const friendCaps = Array.from({ length: 1 }, (value, i) => i * 100 + 100);

export default async function UserFriends({ steamId }) {
  const friends = await getFriends(steamId);
  // // God forgive me for this stupid code, steam api forced my hand

  // const friendsToFetch = friends.map((friend) => friend.steamid);

  // let friendsSlice = friendCaps.map((cap) => {
  //   const spliced = friendsToFetch.slice(`${cap - 100}`, cap);

  //   return spliced;
  // });

  // const fetchedFriends = await Promise.all(
  //   friendsSlice.map(async function (ids) {
  //     const steamIds = ids.join(",");

  //     return await getSteamUser(steamIds, "multiple");
  //   })
  // );

  let friendsToFetch, fetchedFriends, friendsToDisplay;

  if (!friends?.private)
    friendsToFetch = friends
      ?.map((friend, i) => {
        if (i < 30) return friend.steamid;
      })
      ?.splice(0, 30);

  if (!friends?.private)
    fetchedFriends = await getSteamUser(friendsToFetch.join(","), "multiple");

  if (!friends?.private)
    friendsToDisplay = fetchedFriends.sort(
      (a, b) => b.personastate - a.personastate
    );

  return (
    // <></>
    <div className="flex flex-col w-[300px] row-start-1 row-end-4 col-start-4 cold-end-5 h-full">
      <span className="text-primary-50 px-4 py-1 rounded-t-sm bg-accent-950 self-start">
        {friends?.length} Friends
      </span>

      <div className="bg-primary-600 flex flex-col gap-1 py-2 border-t-4 border-accent-950 rounded-tr-sm overflow-scroll no-scrollbar h-full">
        {!friends?.private ? (
          <div className="text-primary-50 px-2">
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
          <p className="text-primary-50 text-center text-lg mt-2">
            Friends list is private
          </p>
        )}
        {friends?.error && <p>{friends.error}</p>}
      </div>
      <div className="w-full h-4 bg-accent-950 rounded-b-sm shrink-0"></div>
    </div>
  );
}
