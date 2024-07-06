export default function PrivateFriends() {
  return (
    <div className="flex flex-col w-[300px] self-start justify-self-start row-start-1 row-end-4 h-full">
      <span className="text-primary-50 px-4 py-1 rounded-t-sm bg-accent-950 self-start">
        Friends
      </span>

      <div className="h-full bg-primary-600 flex flex-col gap-1 py-2 border-t-4 border-accent-950 rounded-tr-sm">
        <div className="text-primary-50 overflow-scroll no-scrollbar px-2">
          <p className="text-center mt-6">Friends list is private</p>
        </div>
      </div>
      <div className="w-full h-4 bg-accent-950 rounded-b-sm"></div>
    </div>
  );
}
