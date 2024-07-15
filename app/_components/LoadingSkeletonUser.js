export default function LoadingSkeletonUser() {
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
