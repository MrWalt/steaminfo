import { getFriends, getSteamUser } from "../_lib/data-services";
import Friend from "./Friend";
import PrivateFriends from "./PrivateFriends";

const friendCaps = Array.from({ length: 10 }, (value, i) => i * 100 + 100);

export default async function UserFriends({ steamId }) {
  const friends = await getFriends(steamId);

  if (friends?.private) return <PrivateFriends />;

  // God forgive me for this stupid code, steam api forced my hand

  const friendsToFetch = friends.map((friend) => friend.steamid);

  let friendsSlice = friendCaps.map((cap) => {
    const spliced = friendsToFetch.slice(`${cap - 100}`, cap);

    return spliced;
  });

  const fetchedFriends = await Promise.all(
    friendsSlice.map(async function (ids) {
      const steamIds = ids.join(",");

      return await getSteamUser({
        profileLink: steamIds,
        type: "multiple",
      });
    })
  );

  const friendsToDisplay = [...fetchedFriends.flat()].sort(
    (a, b) => b.personastate - a.personastate
  );

  return (
    <div className="flex flex-col w-[300px]">
      <span className="text-primary-50 px-4 py-1 rounded-t-sm bg-accent-950 self-start">
        {friends.length} Friends
      </span>

      <div className="h-[620px] bg-primary-600 flex flex-col gap-1 py-2 border-t-4 border-accent-950 rounded-tr-sm">
        <div className="text-primary-50 overflow-scroll no-scrollbar px-2">
          {friendsToDisplay.map((friend) => {
            if (friend?.steamid) {
              return (
                <Friend
                  userName={friend.personaname}
                  avatar={friend.avatarfull}
                  accountState={friend.personastate}
                  currentlyPlaying={friend.gameextrainfo}
                  key={friend.steamid}
                  steamId={friend.steamid}
                />
              );
            }
          })}
        </div>
      </div>
      <div className="w-full h-4 bg-accent-950 rounded-b-sm"></div>
    </div>
  );
}
