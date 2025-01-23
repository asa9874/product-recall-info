
function Headers() {
  return (
    <>
      <header className='flex shadow-[0px_10px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
        <div className='flex flex-wrap items-center gap-10 w-full max-w-screen-xl mx-auto'>
          
          <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
            </svg>
            <a>나쁜음식은있다</a>
          </div>
          
          <div id="collapseMenu">
            <ul className='flex gap-x-5'>
              <li className='py-3 px-3'><a href='javascript:void(0)' className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>음식</a></li>
              <li className='py-3 px-3'><a href='javascript:void(0)' className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>의약품</a></li>
            </ul>
          </div>
          <div className='flex items-center space-x-4'></div>
        </div>
      </header>
    </>
  )
}

export default Headers
