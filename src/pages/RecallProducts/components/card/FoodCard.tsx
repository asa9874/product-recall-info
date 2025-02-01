import { useState } from "react";
import { FoodRecallInfo } from "../../types/FoodRecallInfo";
import FoodCardDetail from "./FoodCardDetail";
import Card from "./Base/Card";

interface CardProps {
  product: FoodRecallInfo;
}

function FoodCard({ product }: CardProps) {
  const { CRET_DTM, RTRVL_GRDCD_NM, IMG_FILE_PATH, PRDTNM, RTRVLPRVNS } = product;
  const [hasError, setHasError] = useState(false);
  const [openModal, setOpenModal] = useState(false); 


  return (
    <Card
      openModal={openModal}
      setOpenModal={setOpenModal}
      CardDetail={FoodCardDetail} 
      product={product} 
    >
      <div className="text-sm text-gray-500 dark:text-gray-400">{CRET_DTM.split(" ")[0]}</div>
      
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
          ${RTRVL_GRDCD_NM === "1등급" ? "bg-red-500 text-white dark:bg-red-700" :
          RTRVL_GRDCD_NM === "2등급" ? "bg-yellow-500 text-white dark:bg-yellow-700" :
          "bg-green-500 text-white dark:bg-green-700"}
        `}
      >
        {RTRVL_GRDCD_NM}  회수대상
      </div>

      <div className="font-semibold text-lg truncate dark:text-white">{PRDTNM}</div>
      <div className="text-sm text-gray-700 truncate dark:text-gray-300">{RTRVLPRVNS}</div>
    </Card>
  );
}

export default FoodCard;
