// MedicineCard.tsx
import { useState } from "react";
import MedicineCardDetail from "./MedicineCardDetail"; 
import Card from "./Base/Card"; 
import { MedicineRecallInfo } from "../../types/MedicineRecallInfo";

interface CardProps {
  product: MedicineRecallInfo;  
}

function MedicineCard({ product }: CardProps) {
  const { PRDUCT, ENTRPS, RTRVL_RESN, ENFRC_YN, RTRVL_CMMND_DT, ITEM_SEQ } = product;
  const [hasError, setHasError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card
      openModal={openModal}
      setOpenModal={setOpenModal}
      CardDetail={MedicineCardDetail} 
      product={product} 
    >
      <div className="text-sm text-gray-500">{RTRVL_CMMND_DT}</div>
      <div className="relative w-full h-44 rounded-md overflow-hidden">
        {hasError ? (
          <div className="flex items-center justify-center bg-black h-full text-white text-sm">
            제품 이미지가 없습니다
          </div>
        ) : (
          <img
            src={`/images/medicine/${ITEM_SEQ}.jpg`} 
            alt={PRDUCT}
            className="w-full h-full object-cover rounded-md"
            onError={() => setHasError(true)}
          />
        )}
      </div>
      <div className={`text-sm font-semibold w-full flex justify-center rounded-lg ${ENFRC_YN === "Y" ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}>
        {ENFRC_YN === "Y" ? "강제 회수" : "자율 회수"}
      </div>
      <div className="font-semibold text-lg truncate">{PRDUCT}</div>
      <div className="text-sm text-gray-700 truncate">{ENTRPS}</div>
      <div className="text-xs text-gray-600 truncate">{RTRVL_RESN}</div>
    </Card>
  );
}

export default MedicineCard;
