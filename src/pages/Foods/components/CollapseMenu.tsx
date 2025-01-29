import { useStore } from '../context';

function CollapseMenu() {
    const {selectedItem, setSelectedItem,setSearchString} = useStore();
    
    const handleClick = (item: string) => {
        setSelectedItem(item);
        setSearchString('');
    };

    return (
        <div id="collapseMenu" className="rounded-b-xl bg-amber-50 w-full flex flex-col flex-wrap items-center ">
            <ul className='flex gap-x-5'>
                <li className='py-3 px-3'>
                    <a
                        href='javascript:void(0)'
                        onClick={() => handleClick('음식')}
                        className={`hover:text-[#007bff]  font-bold block text-base ${selectedItem === '음식' ? 'text-blue-500' : 'text-gray-600'}`}
                    >
                        음식
                    </a>
                </li>
                <li className='py-3 px-3'>
                    <a
                        href='javascript:void(0)'
                        onClick={() => handleClick('의약품')}
                        className={`hover:text-[#007bff]  font-bold block text-base ${selectedItem === '의약품' ? 'text-blue-500' : 'text-gray-600'}`}
                    >
                        의약품
                    </a>
                </li>
                <li className='py-3 px-3'>
                    <a
                        href='javascript:void(0)'
                        onClick={() => handleClick('해외식품')}
                        className={`hover:text-[#007bff]  font-bold block text-base ${selectedItem === '해외식품' ? 'text-blue-500' : 'text-gray-600'}`}
                    >
                        해외식품
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default CollapseMenu;
