import { useState } from "react";
import CardDetail from "./Base/CardDetail";
import { MedicineRecallInfo } from "../../types/MedicineRecallInfo";
interface CardDetailProps {
  product: MedicineRecallInfo;
  onClose: () => void; // 모달 닫기 핸들러
}

function MedicineCardDetail({ product, onClose }: CardDetailProps) {
    const [hasError, setHasError] = useState(false); // 이미지 오류 상태 추가

  return (
    <CardDetail onClose={onClose}>
        <></>
    </CardDetail>
  );
}

export default MedicineCardDetail;
