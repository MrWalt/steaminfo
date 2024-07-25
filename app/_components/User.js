import { Suspense } from "react";
import UserCard from "./UserCard";
import UserFriends from "./UserFriends";
import { getSteamUser } from "../_lib/data-services";
import UserStats from "./UserStats";
import LoadingSkeleton from "./LoadingSkeleton";

export default async function User({ userId }) {
  const { steamId } = await getSteamUser(userId);

  return (
    <>
      {/* <LoadingSkeleton.User />
      <LoadingSkeleton.Friends /> */}
      <Suspense fallback={<LoadingSkeleton.User />} key={userId}>
        <UserCard userId={steamId} />
      </Suspense>

      <UserFriends steamId={steamId} />

      <UserStats steamId={steamId} />
    </>
  );
}
