export default function LoadingSkeleton() {
  return null;
}

function Friends() {
  return (
    <div className="text-primary-50 overflow-scroll scrollbar-none pl-2">
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
  );
}

function Playtime() {
  return (
    <>
      <div className="bg-primary-700 w-full h-full border border-primary-400 border-t-0 px-6 py-8 flex flex-col gap-2">
        <div className="bg-primary-400 w-3/4 h-3 rounded-sm animate-pulse mb-2"></div>
        <div className="bg-primary-400 w-2/3 h-5 rounded-sm animate-pulse"></div>
        <div className="bg-primary-400 w-3/4 h-5 rounded-sm animate-pulse"></div>
        <div className="bg-primary-400 w-1/3 h-5 rounded-sm animate-pulse"></div>
        <div className="bg-primary-400 w-3/3 h-5 rounded-sm animate-pulse"></div>
        <div className="bg-primary-400 w-2/4 h-5 rounded-sm animate-pulse"></div>
      </div>
      <div className="w-full h-full flex flex-col py-6 px-4 items-center">
        <p className="text-xs text-center text-primary-200 italic mb-5">
          Outer circle is recent games, inner circle is top 5 games
        </p>
        <div className="w-[185px] h-[185px] bg-primary-700 rounded-full animate-pulse flex items-center justify-center mb-4">
          <div className="w-[130px] h-[130px] rounded-full bg-primary-600 flex items-center justify-center">
            <div className="w-[120px] h-[120px] rounded-full bg-primary-700 flex items-center justify-center">
              <div className="w-[65px] h-[65px] rounded-full bg-primary-600"></div>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-5 bg-primary-700 rounded-sm animate-pulse mb-2"></div>
        <div className="w-2/4 h-5 bg-primary-700 rounded-sm animate-pulse"></div>
      </div>
      <div className="w-full h-full border-l border-primary-400 px-4 py-8 grid grid-rows-[auto,_repeat(5,_1fr)] gap-2">
        <div className="w-3/4 h-3 bg-primary-700 rounded-sm animate-pulse"></div>
        <div className="w-full h-full bg-primary-700 rounded-sm flex px-2 gap-3 items-center">
          <div className="w-[42px] h-[42px] rounded-sm animate-pulse bg-primary-600 shrink-0"></div>
          <div className="w-full">
            <div className="w-2/3 h-4 bg-primary-600 animate-pulse mb-1"></div>
            <div className="w-2/4 h-4 bg-primary-600 animate-pulse"></div>
          </div>
        </div>

        <div className="w-full h-full bg-primary-700 rounded-sm flex px-2 gap-3 items-center">
          <div className="w-[42px] h-[42px] rounded-sm animate-pulse bg-primary-600 shrink-0"></div>
          <div className="w-full">
            <div className="w-3/4 h-4 bg-primary-600 animate-pulse mb-1"></div>
            <div className="w-1/4 h-4 bg-primary-600 animate-pulse"></div>
          </div>
        </div>

        <div className="w-full h-full bg-primary-700 rounded-sm flex px-2 gap-3 items-center">
          <div className="w-[42px] h-[42px] rounded-sm animate-pulse bg-primary-600 shrink-0"></div>
          <div className="w-full">
            <div className="w-1/3 h-4 bg-primary-600 animate-pulse mb-1"></div>
            <div className="w-3/4 h-4 bg-primary-600 animate-pulse"></div>
          </div>
        </div>

        <div className="w-full h-full bg-primary-700 rounded-sm flex px-2 gap-3 items-center">
          <div className="w-[42px] h-[42px] rounded-sm animate-pulse bg-primary-600 shrink-0"></div>
          <div className="w-full">
            <div className="w-2/3 h-4 bg-primary-600 animate-pulse mb-1"></div>
            <div className="w-3/4 h-4 bg-primary-600 animate-pulse"></div>
          </div>
        </div>

        <div className="w-full h-full bg-primary-700 rounded-sm flex px-2 gap-3 items-center">
          <div className="w-[42px] h-[42px] rounded-sm animate-pulse bg-primary-600 shrink-0"></div>
          <div className="w-full">
            <div className="w-1/3 h-4 bg-primary-600 animate-pulse mb-1"></div>
            <div className="w-2/4 h-4 bg-primary-600 animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function User() {
  return (
    <div className="min-h-[180px] bg-primary-600 flex gap-4 items-center py-4 px-4 relative rounded-layout col-start-1 col-end-4 border border-primary-400">
      <div className="absolute rounded-sm animate-pulse top-3 right-3 px-12 py-5 bg-primary-700"></div>
      <div className="w-[160px] h-[160px] rounded-full bg-primary-700 animate-pulse"></div>
      <div className="w-1/3 bg-primary-700 h-[168px] rounded-sm px-4 py-4 flex flex-col justify-between">
        <div>
          <div className="w-3/4 h-8 bg-primary-600 rounded-sm animate-pulse"></div>
          <div className="w-2/4 h-4 bg-primary-600 rounded-sm animate-pulse mt-2"></div>
        </div>
        <div className="w-1/4 h-6 bg-primary-600 rounded-sm animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-2 w-[320px] h-[140px] justify-between">
        <div>
          <div className="w-2/4 h-4 bg-primary-700 rounded-sm animate-pulse"></div>
          <div className="w-2/4 h-4 bg-primary-700 rounded-sm animate-pulse mt-2"></div>
        </div>
        <div>
          <div className="w-1/4 h-4 bg-primary-700 rounded-sm animate-pulse"></div>
          <div className="w-2/4 h-4 bg-primary-700 rounded-sm animate-pulse mt-1"></div>
        </div>
      </div>
    </div>
  );
}

function Inventory() {
  return (
    <div className="text-primary-50 col-span-full row-start-1 row-end-2 grid grid-rows-[48px_352px]">
      <div className="px-8 py-1 flex items-center justify-between">
        <div className="flex items-center">
          <span className="inline-block text-xl pr-4 border-r border-primary-300">
            Counter-Strike 2
          </span>
          <div className="pl-4 flex items-center gap-2">
            <span className="inline-block px-4 py-2 bg-primary-400 animate-pulse"></span>
            <span className="inline-block">Items</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-xs text-primary-100 italic">Total value</span>
          <span className="inline-block px-7 py-4 border border-primary-400 bg-primary-700 animate-pulse"></span>
        </div>
      </div>
      <div className="overflow-y-scroll border-t border-primary-400 px-2 py-2 w-full grid grid-cols-7 scrollbar-thin scrollbar-thumb-accent-950 scrollbar-track-primary-600 gap-1">
        <div className="w-[140px] h-[200px] bg-primary-700 animate-pulse"></div>
        <div className="w-[140px] h-[200px] bg-primary-700 animate-pulse"></div>
        <div className="w-[140px] h-[200px] bg-primary-700 animate-pulse"></div>
        <div className="w-[140px] h-[200px] bg-primary-700 animate-pulse"></div>
        <div className="w-[140px] h-[200px] bg-primary-700 animate-pulse"></div>
        <div className="w-[140px] h-[200px] bg-primary-700 animate-pulse"></div>
        <div className="w-[140px] h-[200px] bg-primary-700 animate-pulse"></div>
      </div>
    </div>
  );
}

LoadingSkeleton.Friends = Friends;
LoadingSkeleton.Playtime = Playtime;
LoadingSkeleton.User = User;
LoadingSkeleton.Inventory = Inventory;
