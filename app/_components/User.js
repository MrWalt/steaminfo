import { Suspense } from "react";
import UserCard from "./UserCard";
import UserFriends from "./UserFriends";
import { getSteamUser } from "../_lib/data-services";
import LoadingSkeletonUser from "./LoadingSkeletonUser";
import LoadingSkeletonFriends from "./LoadingSkeletonFriends";
import UserStats from "./UserStats";

export default async function User({ userId }) {
  const { steamId } = await getSteamUser(userId);

  return (
    <>
      {/* <LoadingSkeletonUser />
      <LoadingSkeletonFriends />
      <LoadingSkeletonPlaytime /> */}
      <Suspense fallback={<LoadingSkeletonUser />} key={userId}>
        <UserCard userId={steamId} />
      </Suspense>

      <Suspense fallback={<LoadingSkeletonFriends />} key={userId / 2}>
        <UserFriends steamId={steamId} />
      </Suspense>

      <UserStats steamId={steamId} />
    </>
  );
}
