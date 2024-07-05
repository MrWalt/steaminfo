import User from "../_components/User";

export default async function page({ searchParams }) {
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
        <>
          <User
            userId={searchParams.userId}
            page={searchParams.page ? Number(searchParams.page) : 1}
          />
        </>
      )}
    </>
  );
}
