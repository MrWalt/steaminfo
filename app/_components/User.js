import { Suspense } from "react";
import UserCard from "./UserCard";
import UserFriends from "./UserFriends";
import { getSteamUser } from "../_lib/data-services";
import LoadingSkeletonUser from "./LoadingSkeletonUser";
import LoadingSkeletonFriends from "./LoadingSkeletonFriends";

export default async function User({ userId }) {
  const { steamId } = await getSteamUser({ profileLink: userId });

  return (
    <>
      {/* <LoadingSkeletonUser />
      <LoadingSkeletonFriends /> */}
      <Suspense fallback={<LoadingSkeletonUser />} key={userId}>
        <UserCard userId={steamId} />
      </Suspense>

      <Suspense fallback={<LoadingSkeletonFriends />} key={userId / 2}>
        <UserFriends steamId={steamId} />
      </Suspense>
    </>
  );
}
