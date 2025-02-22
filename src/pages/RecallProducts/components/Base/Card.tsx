import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FoodRecallInfo } from '../../types/FoodRecallInfo';
import { ForeignFoodRecallInfo } from '../../types/ForeignFoodRecallInfo';
import { MedicineRecallInfo } from '../../types/MedicineRecallInfo';

interface CardProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  children: React.ReactNode;
  CardDetail: React.ElementType;
  product: FoodRecallInfo | ForeignFoodRecallInfo | MedicineRecallInfo;
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
        {children}
      </motion.div>

      {openModal && (
        <CardDetail product={product} onClose={() => setOpenModal(false)} />
      )}
    </>
  );
}

export default Card;
