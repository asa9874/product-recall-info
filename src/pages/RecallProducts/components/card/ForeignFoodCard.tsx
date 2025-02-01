// ForeignFoodCard.tsx
import { useState } from "react";
import { ForeignFoodRecallInfo } from "../../types/ForeignFoodRecallInfo";
import ForeignFoodCardDetail from "./ForeignFoodCardDetail";
import Card from "./Base/Card"; 

interface CardProps {
  product: ForeignFoodRecallInfo;  
}

function ForeignFoodCard({ product }: CardProps) {
  const { TITL, DETECT_TITL, CRET_DTM, BDT, DOWNLOAD_URL } = product;
  const [hasError, setHasError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
      <Card
        openModal={openModal}
        setOpenModal={setOpenModal}
        CardDetail={ForeignFoodCardDetail} 
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
              src={DOWNLOAD_URL}
              alt={TITL}
              className="w-full h-full object-cover rounded-md"
              onError={() => setHasError(true)}
            />
          )}
        </div>

        <div className="text-sm font-semibold w-full flex justify-center rounded-lg bg-red-500 text-white dark:bg-red-700 dark:text-white">
          {DETECT_TITL} 검출
        </div>

        <div className="font-semibold text-lg truncate dark:text-white">{TITL}</div>
        <div className="text-sm text-gray-700 truncate dark:text-gray-300">{BDT}</div>
      </Card>
  );
}

export default ForeignFoodCard;
