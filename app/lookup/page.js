import { Suspense } from "react";
import Header from "../_components/Header";
import User from "../_components/User";
import LoadingSkeletonUser from "../_components/LoadingSkeletonUser";

export default function page({ searchParams }) {
  return (
    <div className="w-full">
      <Header />

      {!searchParams.userId && (
        <div className="w-[900px] mx-auto mt-12">
          <p className="text-primary-50 text-xl text-center">
            Start by typing in a SteamID or Profile Link
          </p>
        </div>
      )}
      <div className="px-[96px] py-[48px]">
        {searchParams.userId && (
          <Suspense
            fallback={<LoadingSkeletonUser />}
            key={searchParams.userId}
          >
            <User userId={searchParams.userId} />
          </Suspense>
        )}

        {/* <LoadingSkeletonUser /> */}
      </div>
    </div>
  );
}
