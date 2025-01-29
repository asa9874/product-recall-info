import { useEffect } from "react";
import { FoodRecallInfo } from "../../types/FoodRecallInfo";



interface CardDetailProps {
  product: FoodRecallInfo;
  onClose: () => void; // 모달 닫기 핸들러
}

function FoodCardDetail({ product, onClose }: CardDetailProps) {
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

  useEffect(() => {
    // 모달이 열릴 때 스크롤을 비활성화
    document.body.style.overflow = "hidden";

    // 모달이 닫힐 때 스크롤을 원래대로 되돌림
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); // 빈 배열을 넣어 컴포넌트가 마운트될 때만 실행

  // 모달 배경 클릭 시 모달 닫기 처리
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleModalClick} // 배경 클릭 시 onClose 호출
    >
      <div
        className="bg-white w-full max-w-xl p-3 rounded-lg shadow-lg relative space-y-4"
        // 내부 클릭 시 이벤트가 부모로 전달되지 않도록 stopPropagation 처리
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-sm font-semibold mb-4 text-center">{PRDTNM}</h3>

        <div className="relative w-full h-40 sm:h-48 md:h-56 rounded-md overflow-hidden mb-4">
          <img
            src={IMG_FILE_PATH}
            alt={PRDTNM}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="space-y-3">
          <p className="text-xs text-gray-500">등록일: {CRET_DTM}</p>
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



          <p className="text-xs text-gray-700">회수 사유: {RTRVLPRVNS}</p>

          <div className="mt-4 border-t pt-3">
            <h4 className="text-xs font-bold">업체 정보</h4>
            <p className="text-xs">제조업체명: {BSSHNM}</p>
            <p className="text-xs">업체 주소: {ADDR}</p>
            <p className="text-xs">전화번호: {TELNO}</p>
          </div>

          <div className="mt-4 border-t pt-3">
            <h4 className="text-xs font-bold">제품 정보</h4>
            <p className="text-xs">바코드 번호: {BRCDNO}</p>
            <p className="text-xs">포장 단위: {FRMLCUNIT}</p>
            <p className="text-xs">제조일자: {MNFDT}</p>
            <p className="text-xs">유통/소비기한: {DISTBTMLMT}</p>
            <p className="text-xs">식품분류: {PRDLST_TYPE}</p>
            <p className="text-xs">품목코드: {PRDLST_CD}</p>
            <p className="text-xs">품목유형(코드명): {PRDLST_CD_NM}</p>
            <p className="text-xs">품목제조보고번호: {PRDLST_REPORT_NO}</p>
          </div>

          <div className="mt-4 border-t pt-3">
            <h4 className="text-xs font-bold">회수 정보</h4>
            <p className="text-xs">회수 방법: {RTRVLPLANDOC_RTRVLMTHD}</p>
            <p className="text-xs">회수/판매중지 일련번호: {RTRVLDSUSE_SEQ}</p>
            <p className="text-xs">업체 인허가 번호: {LCNS_NO}</p>
          </div>
        </div>

        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default FoodCardDetail;
