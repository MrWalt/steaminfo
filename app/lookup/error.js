"use client";

export default function Error() {
  return (
    <div className="w-full text-center text-primary-50 col-start-1 col-end-5">
      <span className="border-b border-primary-600 inline-block px-8 py-2 text-lg">
        This user does not exist, please enter a valid SteamID
      </span>
    </div>
  );
}
