
function CollapseMenu() {
    return (
        <div id="collapseMenu" className="rounded-b-xl bg-amber-50 w-full flex flex-col flex-wrap items-center ">
            <ul className='flex gap-x-5'>
                <li className='py-3 px-3'><a href='javascript:void(0)' className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>음식</a></li>
                <li className='py-3 px-3'><a href='javascript:void(0)' className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>의약품</a></li>
                <li className='py-3 px-3'><a href='javascript:void(0)' className='hover:text-[#007bff] text-gray-600 font-bold block text-base'>해외식품</a></li>
            </ul>
        </div>
    )
}


export default CollapseMenu