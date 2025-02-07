import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../context';

function CollapseMenu() {
  const { selectedItem, setSelectedItem, setSearchString } = useStore();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false); // 스크롤을 내리면 숨김
      } else {
        setVisible(true); // 스크롤을 올리면 표시
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      id="collapseMenu"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: visible ? 72 : -100, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className={`fixed top-0 left-0 w-full shadow-md rounded-b-xl z-30 h-14 flex items-center justify-center
        bg-amber-50 dark:bg-gray-800`} // 다크 모드 배경 추가
    >
      <ul className="flex gap-x-5">
        {['음식', '해외식품', '의약품'].map((item) => (
          <li key={item} className="py-3 px-3 relative">
            <button
              onClick={() => {
                setSelectedItem(item);
                setSearchString('');
              }}
              className={`relative font-bold text-base transition-colors duration-200
                ${
                  selectedItem === item
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300'
                } hover:text-[#007bff] dark:hover:text-blue-500`} // 다크 모드에서 색상 변경
            >
              {item}
              <motion.span
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 dark:bg-blue-400" // 다크 모드 시 강조 색상 변경
                initial={{ scaleX: 0 }}
                animate={{ scaleX: selectedItem === item ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default CollapseMenu;
