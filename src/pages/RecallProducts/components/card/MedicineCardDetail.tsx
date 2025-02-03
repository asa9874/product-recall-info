import { useState } from "react";
import CardDetail from "../Base/CardDetail";
import { MedicineRecallInfo } from "../../types/MedicineRecallInfo";

interface CardDetailProps {
  product: MedicineRecallInfo;
  onClose: () => void; // 모달 닫기 핸들러
}

function MedicineCardDetail({ product, onClose }: CardDetailProps) {
  const [hasError, setHasError] = useState(false); // 이미지 오류 상태 추가

  return (
    <CardDetail onClose={onClose} >
      <h3 className="text-sm font-semibold mb-4 text-center">{product.PRDUCT}</h3>

      <div className="relative w-full h-40 sm:h-48 md:h-56 rounded-md overflow-hidden mb-4">
        {hasError ? (
          <div className="flex items-center justify-center bg-gray-800 h-full text-white text-sm dark:bg-gray-700">
            제품 이미지가 없습니다
          </div>
        ) : (
          <img
            src=""
            alt={product.PRDUCT}
            className="w-full h-full object-cover rounded-md"
            onError={() => setHasError(true)} // 오류 발생 시 hasError 상태 true로 변경
          />
        )}
      </div>

      <div className="space-y-3">
        <p className="text-xs text-gray-400">등록일: {product.RECALL_COMMAND_DATE.split(" ")[0]}</p>
        <p className="text-xs text-gray-300 whitespace-pre-line">상세 내용: {product.RTRVL_RESN}</p>
      </div>

      <div className="mt-4 border-t pt-3">
        <p className="text-xs text-gray-400">게시글 번호: {product.ITEM_SEQ}</p>
      </div>
    </CardDetail>
  );
}

export default MedicineCardDetail;
