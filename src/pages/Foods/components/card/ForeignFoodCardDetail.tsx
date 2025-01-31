import { useEffect, useState } from "react";
import { ForeignFoodRecallInfo } from "../../types/ForeignFoodRecallInfo";

interface CardDetailProps {
  product: ForeignFoodRecallInfo;
  onClose: () => void; // 모달 닫기 핸들러
}

function ForeignFoodCardDetail({ product, onClose }: CardDetailProps) {
  const { TITL, DETECT_TITL, CRET_DTM, BDT, DOWNLOAD_URL, NTCTXT_NO } = product;
  const [hasError, setHasError] = useState(false); // 이미지 오류 상태 추가

  // 모달이 열릴 때 스크롤을 비활성화
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose(); // 배경 클릭 시 모달 닫기
    }
    //console.log(DOWNLOAD_URL)
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleModalClick} // 배경 클릭 시 onClose 호출
    >
      <div
        className="bg-white w-full max-w-xl p-3 rounded-lg shadow-lg relative space-y-4"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트가 부모로 전달되지 않도록 stopPropagation 처리
      >
        <h3 className="text-sm font-semibold mb-4 text-center">{TITL}</h3>

        <div className="relative w-full h-40 sm:h-48 md:h-56 rounded-md overflow-hidden mb-4">
          {hasError ? (
            <div className="flex items-center justify-center bg-black h-full text-white text-sm">
              제품 이미지가 없습니다
            </div>
          ) : (
            <img
              src={DOWNLOAD_URL}
              alt={TITL}
              className="w-full h-full object-cover rounded-md"
              onError={() => setHasError(true)} // 오류 발생 시 hasError 상태 true로 변경
            />
          )}
        </div>

        <div className="space-y-3">
          <p className="text-xs text-gray-500">등록일: {CRET_DTM.split(" ")[0]}</p>
          <p className="text-xs font-semibold">
            유해물질: <span className="text-red-500">{DETECT_TITL}</span>
          </p>
          <p className="text-xs text-gray-700">상세 내용: {BDT}</p>
        </div>

        <div className="mt-4 border-t pt-3">
          <h4 className="text-xs font-bold">게시글 정보</h4>
          <p className="text-xs">게시글 번호: {NTCTXT_NO}</p>
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

export default ForeignFoodCardDetail;
