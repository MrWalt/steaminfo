import { Suspense } from "react";
import UserCard from "./UserCard";
import Loading from "../lookup/loading";
import UserFriends from "./UserFriends";
import { getSteamUser } from "../_lib/data-services";
import Load from "./Load";

export default async function User({ userId, page }) {
  const { steamId } = await getSteamUser({ profileLink: userId });

  return (
    <>
      <Suspense fallback={<Loading />} key={userId}>
        <UserCard userId={steamId} />
      </Suspense>

      <Suspense fallback={<Load />}>
        <UserFriends steamId={steamId} page={page} />
      </Suspense>
    </>
  );
}
