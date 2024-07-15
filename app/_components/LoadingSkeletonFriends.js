export default function LoadingSkeletonFriends() {
  return (
    <div className="flex flex-col w-[300px] row-start-1 row-end-4 col-start-4 cold-end-5 h-full">
      <div className="items-center flex text-primary-50 px-4 py-1 rounded-t-sm bg-accent-950 self-start gap-2">
        <div className="h-4 w-7 bg-accent-800 rounded-sm animate-pulse"></div>
        <span className="">Friends</span>
      </div>
      <div className="min-w-full h-full bg-primary-600 flex flex-col gap-1 py-2 border-t-4 border-accent-950 rounded-tr-sm ">
        <div className="text-primary-50 overflow-scroll no-scrollbar px-2">
          <div className="bg-primary-700 w-full h-[70px] flex gap-2 items-center px-3 [&:not(:last-child)]:border-b border-primary-400">
            <div className="w-11 h-11 rounded-full bg-primary-500 flex-shrink-0 animate-pulse"></div>
            <div className="flex flex-col gap-1 w-full">
              <div className="w-3/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
              <div className="w-2/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
            </div>
          </div>

          <div className="bg-primary-700 w-full h-[70px] flex gap-2 items-center px-3 [&:not(:last-child)]:border-b border-primary-400">
            <div className="w-11 h-11 rounded-full bg-primary-500 flex-shrink-0 animate-pulse"></div>
            <div className="flex flex-col gap-1 w-full">
              <div className="w-3/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
              <div className="w-2/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
            </div>
          </div>

          <div className="bg-primary-700 w-full h-[70px] flex gap-2 items-center px-3 [&:not(:last-child)]:border-b border-primary-400">
            <div className="w-11 h-11 rounded-full bg-primary-500 flex-shrink-0 animate-pulse"></div>
            <div className="flex flex-col gap-1 w-full">
              <div className="w-3/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
              <div className="w-2/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
            </div>
          </div>

          <div className="bg-primary-700 w-full h-[70px] flex gap-2 items-center px-3 [&:not(:last-child)]:border-b border-primary-400">
            <div className="w-11 h-11 rounded-full bg-primary-500 flex-shrink-0 animate-pulse"></div>
            <div className="flex flex-col gap-1 w-full">
              <div className="w-3/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
              <div className="w-2/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
            </div>
          </div>

          <div className="bg-primary-700 w-full h-[70px] flex gap-2 items-center px-3 [&:not(:last-child)]:border-b border-primary-400">
            <div className="w-11 h-11 rounded-full bg-primary-500 flex-shrink-0 animate-pulse"></div>
            <div className="flex flex-col gap-1 w-full">
              <div className="w-3/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
              <div className="w-2/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
            </div>
          </div>

          <div className="bg-primary-700 w-full h-[70px] flex gap-2 items-center px-3 [&:not(:last-child)]:border-b border-primary-400">
            <div className="w-11 h-11 rounded-full bg-primary-500 flex-shrink-0 animate-pulse"></div>
            <div className="flex flex-col gap-1 w-full">
              <div className="w-3/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
              <div className="w-2/4 h-3 rounded-sm bg-primary-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-4 bg-accent-950 rounded-b-sm"></div>
    </div>
  );
}
