export default function SearchBar() {
  return (
    <div className="relative w-[396px]">
      <input
        type="text"
        className="px-4 py-2 w-full rounded-md"
        placeholder="SteamID/Profile Link"
      />
      <button className="absolute top-0 right-0 bg-primary-500 rounded-md py-1 px-4 ">
        Search
      </button>
    </div>
  );
}
