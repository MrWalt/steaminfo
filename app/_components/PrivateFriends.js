export default function PrivateFriends() {
  return (
    <div className="w-full h-[620px] bg-primary-600 rounded-sm mt-8 relative flex flex-col gap-1 py-[1px] ">
      <div className="absolute top-0 left-0 translate-y-[-100%] text-primary-50 px-4 py-1 rounded-t-sm bg-accent-950">
        <span>Friends</span>
      </div>
      <div className="absolute bottom-0 w-full h-4 bg-accent-950 translate-y-[100%] rounded-b-sm"></div>
      <div className="text-primary-50 overflow-scroll no-scrollbar px-2">
        <p className="text-center mt-6">Friend list is private</p>
      </div>
    </div>
  );
}
