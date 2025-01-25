import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CardProps {
    CRET_DTM: string; // 생성일
    RTRVL_GRDCD_NM: string; // 회수 등급
    IMG_FILE_PATH: string; // 이미지 경로
    PRDTNM: string; // 제품명
    RTRVLPRVNS: string; // 회수 사유
}

function Card({ CRET_DTM, RTRVL_GRDCD_NM, IMG_FILE_PATH, PRDTNM, RTRVLPRVNS }: CardProps) {
    const [hasError, setHasError] = useState(false); 

    return (
        <div className="bg-zinc-50 w-full h-80 p-4 rounded-lg shadow-md flex justify-center flex-col space-y-2">
        <div className="text-sm text-gray-500">{CRET_DTM}</div>
        <div className="text-sm text-red-500 font-semibold">{RTRVL_GRDCD_NM}</div>
        <div className="relative w-full h-32 rounded-md overflow-hidden">
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
        {!IMG_FILE_PATH && <Skeleton height="100%" />}
      </div>
        <div className="font-semibold text-lg truncate">{PRDTNM}</div>
        <div className="text-sm text-gray-700 truncate">{RTRVLPRVNS}</div>
        </div>
    );
}

export default Card;
  