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
      {/* <LoadingSkeletonUser />
      <LoadingSkeletonFriends />
      <LoadingSkeletonPlaytime /> */}
      <Suspense fallback={<LoadingSkeleton.User />} key={userId}>
        <UserCard userId={steamId} />
      </Suspense>

      <Suspense fallback={<LoadingSkeleton.Friends />} key={userId / 2}>
        <UserFriends steamId={steamId} />
      </Suspense>

      <UserStats steamId={steamId} />
    </>
  );
}
