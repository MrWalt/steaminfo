import { Suspense } from "react";
import Loading from "./loading";
import UserCard from "../_components/UserCard";

export default function page({ searchParams }) {
  return (
    <>
      {!searchParams.userId && (
        <div className="col-start-1 col-end-5">
          <p className="text-primary-50 text-xl text-center">
            Start by typing in a SteamID or Profile Link
          </p>
        </div>
      )}

      {searchParams.userId && (
        <Suspense fallback={<Loading />} key={searchParams.userId}>
          <UserCard userId={searchParams.userId} />
        </Suspense>
      )}
    </>
  );
}
