import { useState } from "react";
import { ProductRecallInfo } from "../types/ProductRecallInfo";

interface CardProps {
  product: ProductRecallInfo; // product prop을 하나로 받아오기
}

function Card({ product }: CardProps) {
  const { CRET_DTM, RTRVL_GRDCD_NM, IMG_FILE_PATH, PRDTNM, RTRVLPRVNS } = product;
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-zinc-50 w-full h-90 p-4 rounded-lg shadow-md flex justify-center flex-col space-y-2">
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
    </div>
  );
}

export default Card;
