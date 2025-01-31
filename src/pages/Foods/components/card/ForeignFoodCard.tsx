import { useState } from "react";
import { ForeignFoodRecallInfo } from "../../types/ForeignFoodRecallInfo";
import ForeignFoodCardDetail from "./ForeignFoodCardDetail";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface CardProps {
  product: ForeignFoodRecallInfo; // 제품 정보를 받아오기
}

function ForeignFoodCard({ product }: CardProps) {
  const { TITL, DETECT_TITL, CRET_DTM, BDT, DOWNLOAD_URL } = product;
  //console.log(DOWNLOAD_URL);
  const [hasError, setHasError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // 한번만 트리거
    threshold: 0.5,    // 화면에 50% 이상 보일 때
  });

  return (
    <>
      <motion.div
        ref={ref}
        className="bg-zinc-50 w-full h-90 p-4 rounded-lg shadow-md flex justify-center flex-col space-y-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer "
        onClick={() => setOpenModal(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-sm text-gray-500">{CRET_DTM.split(" ")[0]}</div>
        <div className="relative w-full h-44 rounded-md overflow-hidden">
          {hasError ? (
            <div className="flex items-center justify-center bg-black h-full text-white text-sm">
              제품 이미지가 없습니다
            </div>
          ) : (
            <img
              src={DOWNLOAD_URL}
              alt={TITL}
              className="w-full h-full object-cover rounded-md"
              onError={() => setHasError(true)}
            />
          )}
        </div>
        <div className="text-sm font-semibold w-full flex justify-center rounded-lg bg-red-500 text-white">
          {DETECT_TITL} 검출
        </div>
        <div className="font-semibold text-lg truncate">{TITL}</div>
        <div className="text-sm text-gray-700 truncate">{BDT}</div>
      </motion.div>
      {openModal && (
        <ForeignFoodCardDetail product={product} onClose={() => setOpenModal(false)} />
      )}
    </>
  );
}

export default ForeignFoodCard;
