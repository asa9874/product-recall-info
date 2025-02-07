import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface CardDetailProps {
  onClose: () => void; // 모달 닫기 핸들러
  children: React.ReactNode;
}

function CardDetail({ onClose, children }: CardDetailProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // 모달 배경 클릭 시 모달 닫기 처리
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleModalClick} // 배경 클릭 시 onClose 호출
    >
      <motion.div
        className="bg-white w-full max-w-xl p-3 rounded-lg shadow-lg relative space-y-4 dark:bg-gray-800 dark:text-white"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {children}
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition dark:bg-blue-800 dark:hover:bg-blue-700"
          onClick={onClose}
        >
          닫기
        </button>
      </motion.div>
    </div>
  );
}

export default CardDetail;
