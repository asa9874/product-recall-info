function LoadingCard() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 w-full h-90 p-4 rounded-lg shadow-md flex justify-center flex-col space-y-2">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-4"></div>
      </div>
      <div className="relative w-full h-44 rounded-md overflow-hidden">
        <div className="flex items-center justify-center bg-gray-300 dark:bg-gray-600 h-full text-white text-sm animate-pulse rounded-md">
          <svg
            className="w-12 h-12 text-gray-400 dark:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="text-sm font-semibold w-full flex justify-center rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse h-4 mb-2"></div>
      <div className="font-semibold text-lg truncate">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3 mb-2"></div>
      </div>
      <div className="text-sm text-gray-700 dark:text-gray-300 truncate">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
      </div>
    </div>
  );
}

export default LoadingCard;
