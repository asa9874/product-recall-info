import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface CardDetailProps {
  onClose: () => void;
  children: React.ReactNode;
}

function CardDetail({ onClose, children }: CardDetailProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50 sm:items-center items-end"
      onClick={handleModalClick}
    >
      <motion.div
        className="bg-white w-full sm:max-w-xl p-3 rounded-lg shadow-lg relative space-y-4 dark:bg-gray-800 dark:text-white"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 200 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.y > 100) {
            onClose();
          }
        }}
      >
        <div className="sm:hidden w-12 h-1 bg-gray-400 rounded-full mx-auto mb-2" />
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
