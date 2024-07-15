export default function LoadingSkeletonPlaytime() {
  return (
    <div className="col-start-1 col-end-4">
      <div className="text-primary-50">
        <span className="bg-accent-950 inline-block px-2 py-1 rounded-tl-sm hover:bg-accent-950 transition-colors cursor-pointer">
          Playtime
        </span>
        <span className="bg-accent-800 inline-block px-2 py-1 rounded-tr-sm hover:bg-accent-950 transition-colors cursor-pointer">
          Inventory
        </span>
      </div>
      <div className="bg-primary-600 border-t-4 rounded-tr-sm border-accent-950 grid grid-cols-[repeat(3,_1fr)] grid-rows-[400px]">
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
      </div>
    </div>
  );
}
