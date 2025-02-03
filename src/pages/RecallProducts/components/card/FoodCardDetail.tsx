import { useState } from "react";
import { FoodRecallInfo } from "../../types/FoodRecallInfo";
import CardDetail from "../Base/CardDetail";

interface CardDetailProps {
  product: FoodRecallInfo;
  onClose: () => void; // 모달 닫기 핸들러
}

function FoodCardDetail({ product, onClose }: CardDetailProps) {
  const [hasError, setHasError] = useState(false); // 이미지 오류 상태 추가

  const {
    CRET_DTM,
    RTRVL_GRDCD_NM,
    IMG_FILE_PATH,
    PRDTNM,
    RTRVLPRVNS,
    BSSHNM,
    ADDR,
    TELNO,
    BRCDNO,
    FRMLCUNIT,
    MNFDT,
    RTRVLPLANDOC_RTRVLMTHD,
    DISTBTMLMT,
    PRDLST_TYPE,
    PRDLST_CD,
    RTRVLDSUSE_SEQ,
    PRDLST_REPORT_NO,
    PRDLST_CD_NM,
    LCNS_NO,
  } = product;
  

  return (
    <CardDetail onClose={onClose}>
      <h3 className="text-sm font-semibold mb-4 text-center dark:text-white">{PRDTNM}</h3>
      <div className="relative w-full h-40 sm:h-48 md:h-56 rounded-md overflow-hidden mb-4">
        {hasError ? (
          <div className="flex items-center justify-center bg-black h-full text-white text-sm">
            제품 이미지가 없습니다
          </div>
        ) : (
          <img
            src={IMG_FILE_PATH}
            alt={PRDTNM}
            className="w-full h-full object-cover rounded-md"
            onError={() => setHasError(true)} // 오류 발생 시 hasError 상태 true로 변경
          />
        )}
      </div>
      <div className="space-y-3">
        <p className="text-xs text-gray-500 dark:text-gray-300">등록일: {CRET_DTM}</p>
        <p className="text-xs font-semibold">
          회수등급: <span className="text-red-500">{RTRVL_GRDCD_NM}</span>
          <div className="tooltip-container inline-block relative z-100 group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div className="tooltip absolute bg-black text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
              {RTRVL_GRDCD_NM === "1등급" && (
                <span>식품등의 섭취 또는 사용으로 인해 인체건강에 미치는 위해영향이 매우 크거나 중대한 위반행위</span>
              )}
              {RTRVL_GRDCD_NM === "2등급" && (
                <span>식품등의 섭취 또는 사용으로 인해 인체건강에 미치는 위해영향이 크거나 일시적인 경우</span>
              )}
              {RTRVL_GRDCD_NM === "3등급" && (
                <span>식품등의 섭취 또는 사용으로 인해 인체의 건강에 미치는 위해 영향이 비교적 적은 경우</span>
              )}
            </div>
          </div>
        </p>

        <p className="text-xs text-gray-700 dark:text-gray-300">회수 사유: {RTRVLPRVNS}</p>

        <div className="mt-4 border-t pt-3">
          <h4 className="text-xs font-bold dark:text-white">업체 정보</h4>
          <p className="text-xs dark:text-gray-300">제조업체명: {BSSHNM}</p>
          <p className="text-xs dark:text-gray-300">업체 주소: {ADDR}</p>
          <p className="text-xs dark:text-gray-300">전화번호: {TELNO}</p>
        </div>

        <div className="mt-4 border-t pt-3">
          <h4 className="text-xs font-bold dark:text-white">제품 정보</h4>
          <p className="text-xs dark:text-gray-300">바코드 번호: {BRCDNO}</p>
          <p className="text-xs dark:text-gray-300">포장 단위: {FRMLCUNIT}</p>
          <p className="text-xs dark:text-gray-300">제조일자: {MNFDT}</p>
          <p className="text-xs dark:text-gray-300">유통/소비기한: {DISTBTMLMT}</p>
          <p className="text-xs dark:text-gray-300">식품분류: {PRDLST_TYPE}</p>
          <p className="text-xs dark:text-gray-300">품목코드: {PRDLST_CD}</p>
          <p className="text-xs dark:text-gray-300">품목유형(코드명): {PRDLST_CD_NM}</p>
          <p className="text-xs dark:text-gray-300">품목제조보고번호: {PRDLST_REPORT_NO}</p>
        </div>

        <div className="mt-4 border-t pt-3">
          <h4 className="text-xs font-bold dark:text-white">회수 정보</h4>
          <p className="text-xs dark:text-gray-300">회수 방법: {RTRVLPLANDOC_RTRVLMTHD}</p>
          <p className="text-xs dark:text-gray-300">회수/판매중지 일련번호: {RTRVLDSUSE_SEQ}</p>
          <p className="text-xs dark:text-gray-300">업체 인허가 번호: {LCNS_NO}</p>
        </div>
      </div>
    </CardDetail>
  );
}

export default FoodCardDetail;
