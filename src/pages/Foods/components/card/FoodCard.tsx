import { useState } from "react";
import { FoodRecallInfo } from "../../types/FoodRecallInfo";
import FoodCardDetail from "./FoodCardDetail";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface CardProps {
  product: FoodRecallInfo;
}

function FoodCard({ product }: CardProps) {
  const { CRET_DTM, RTRVL_GRDCD_NM, IMG_FILE_PATH, PRDTNM, RTRVLPRVNS } = product;
  const [hasError, setHasError] = useState(false);
  const [openModal, setOpenModal] = useState(false); // 모달 열림/닫힘 상태 관리
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
              src={IMG_FILE_PATH}
              alt={PRDTNM}
              className="w-full h-full object-cover rounded-md"
              onError={() => setHasError(true)}
            />
          )}
        </div>
        <div
          className={`
      text-sm font-semibold w-full flex justify-center rounded-lg 
      ${RTRVL_GRDCD_NM === "1등급" ? "bg-red-500 text-white" :
              RTRVL_GRDCD_NM === "2등급" ? "bg-yellow-500 text-white" :
                "bg-green-500 text-white"}
    `}
        >
          {RTRVL_GRDCD_NM}  회수대상
        </div>
        <div className="font-semibold text-lg truncate">{PRDTNM}</div>
        <div className="text-sm text-gray-700 truncate">{RTRVLPRVNS}</div>
      </motion.div>
      {openModal && (
        <FoodCardDetail
          product={product}
          onClose={() => setOpenModal(false)}  // 모달 닫기 핸들러
        />
      )}
    </>
  );
}

export default FoodCard;
