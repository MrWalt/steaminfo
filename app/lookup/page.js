import { Suspense } from "react";
import Header from "../_components/Header";
import User from "../_components/User";
import LoadingSkeletonUser from "../_components/LoadingSkeletonUser";

export default function page({ searchParams }) {
  return (
    <div className="w-full">
      <Header />

      {searchParams.userId && (
        <Suspense fallback={<LoadingSkeletonUser />}>
          <User userId={searchParams.userId} />
        </Suspense>
      )}
    </div>
  );
}
