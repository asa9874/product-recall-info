import DarkModeToggle from '../RecallProducts/components/DarkModeToggle';

function Headers() {
  return (
    <div className="">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-[0px_10px_16px_rgba(17,_17,_26,_0.1)] dark:shadow-gray-700 py-4 px-4 sm:px-6 bg-white dark:bg-gray-900 font-sans min-h-[70px] tracking-wide">
        <div className="flex items-center hidden sm:flex">
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <span className="hidden md:flex items-center text-lg font-semibold text-gray-700 dark:text-gray-100 tracking-wide">
            제품회수정보
          </span>
        </div>
        <DarkModeToggle />
      </header>
    </div>
  );
}


export default Headers
