import { Suspense } from "react";
import Loading from "./loading";
import UserCard from "../_components/UserCard";

export default function page({ searchParams }) {
  return (
    <>
      {!searchParams.userId && (
        <div className="w-full text-center text-primary-50 col-start-1 col-end-5">
          <span className="border-b border-primary-600 inline-block px-8 py-2 text-lg">
            Start by typing in a SteamID or Profile Link
          </span>
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
