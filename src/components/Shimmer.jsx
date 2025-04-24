const Shimmer = () => {
  return (
    <div className="flex p-4 space-x-4">
      {/* Sidebar - circular shimmer placeholders */}
      <div className="w-20 flex flex-col space-y-4">
        {Array.from({ length: 18 }).map((_, index) => (
          <div
            key={index}
            className="w-12 h-12 bg-gray-300 shimmer rounded-full"
          ></div>
        ))}
      </div>

      {/* Main content shimmer cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="space-y-3 shimmer-card">
            <div className="h-36 bg-gray-300 shimmer rounded-md"></div>
            <div className="h-4 w-3/4 bg-gray-300 shimmer rounded"></div>
            <div className="h-4 w-1/2 bg-gray-300 shimmer rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
