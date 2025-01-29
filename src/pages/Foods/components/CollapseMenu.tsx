import { useStore } from '../context';

function CollapseMenu() {
    const { selectedItem, setSelectedItem, setSearchString } = useStore();

    const handleClick = (item: string) => {
        setSelectedItem(item);
        setSearchString('');
    };

    return (
        <div id="collapseMenu" className="rounded-b-xl bg-amber-50 w-full flex flex-col flex-wrap items-center ">
            <ul className='flex gap-x-5'>
                {['음식', '의약품', '해외식품'].map((item) => (
                    <li key={item} className='py-3 px-3 relative'>
                        <a
                            href='javascript:void(0)'
                            onClick={() => handleClick(item)}
                            className={`relative font-bold block text-base ${selectedItem === item ? 'text-blue-500' : 'text-gray-600'} hover:text-[#007bff]`}
                        >
                            {item}
                            <span
                                className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transition-all ${
                                    selectedItem === item ? 'scale-x-100' : 'scale-x-0'
                                }`}
                            ></span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CollapseMenu;
