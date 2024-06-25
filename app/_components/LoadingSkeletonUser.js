export default function LoadingSkeletonUser() {
  return (
    <div className="w-[900px] min-h-[180px] bg-primary-600 rounded-sm flex gap-6 items-center py-6 px-8">
      <div className="w-[128px] h-[128px] rounded-full bg-primary-700 animate-pulse"></div>
      <div className="w-[40%] bg-primary-700 h-[140px] rounded-sm px-4 py-4 flex flex-col justify-between">
        <div>
          <div className="w-3/4 h-8 bg-primary-600 rounded-sm animate-pulse"></div>
          <div className="w-2/4 h-4 bg-primary-600 rounded-sm animate-pulse mt-2"></div>
        </div>
        <div className="w-1/4 h-6 bg-primary-600 rounded-sm animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-2 w-[320px] h-[140px] justify-between">
        <div>
          <div className="w-3/4 h-4 bg-primary-700 rounded-sm animate-pulse"></div>
          <div className="w-2/4 h-4 bg-primary-700 rounded-sm animate-pulse mt-2"></div>
        </div>
        <div>
          <div className="w-1/4 h-4 bg-primary-700 rounded-sm animate-pulse"></div>
          <div className="w-3/4 h-4 bg-primary-700 rounded-sm animate-pulse mt-1"></div>
        </div>
      </div>
    </div>
  );
}
