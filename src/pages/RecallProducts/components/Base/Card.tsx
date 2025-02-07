import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  children: React.ReactNode; // 자식 컴포넌트로 데이터를 전달
  CardDetail: React.ElementType;
  product: any;
}

function Card({
  setOpenModal,
  children,
  openModal,
  CardDetail,
  product,
}: CardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <motion.div
        ref={ref}
        className="bg-zinc-50 dark:bg-zinc-900 w-full h-80 p-4 rounded-lg shadow-md flex justify-center flex-col space-y-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setOpenModal(true)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
        transition={{ duration: 0.2 }}
      >
        {children} {/* 자식 컴포넌트 렌더링 */}
      </motion.div>

      {openModal && (
        <CardDetail
          product={product}
          onClose={() => setOpenModal(false)} // 모달 닫기 핸들러
        />
      )}
    </>
  );
}

export default Card;
