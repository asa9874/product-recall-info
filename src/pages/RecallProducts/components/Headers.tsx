import { useState } from 'react';
import { useStore } from '../context';
import CollapseMenu from './CollapseMenu';
import DarkModeToggle from './DarkModeToggle';

function Headers() {
  const { searchString, setSearchString } = useStore(); // zustand store에서 값 가져오기
  const [inputValue, setInputValue] = useState(searchString); // 입력값 state 관리

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchString(inputValue); // 검색어를 zustand store에 저장
  };
  return (
    <div className='sticky top-0 z-50'>
      <header className='flex shadow-[0px_10px_16px_rgba(17,_17,_26,_0.1)] dark:shadow-gray-700 py-4 px-4 sm:px-6 bg-white dark:bg-gray-900 font-sans min-h-[70px] tracking-wide relative z-50 '>
        <div className='flex items-center hidden sm:flex'>
          <img src='/logo.png' alt='logo' className='w-10 h-10' />
          <span className="hidden md:flex items-center text-lg font-semibold text-gray-700 dark:text-gray-100 tracking-wide">
            제품회수정보
          </span>
        </div>
        <form className="max-w-md mx-auto w-full" onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="제품이름을 입력해주세요"
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 
                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              검색
            </button>
          </div>
        </form>
        <DarkModeToggle />
      </header>
      <CollapseMenu />
    </div>

  )
}

export default Headers
