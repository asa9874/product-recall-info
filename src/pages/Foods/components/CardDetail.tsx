import { ProductRecallInfo } from "../types/ProductRecallInfo";

interface CardDetailProps {
    product: ProductRecallInfo;
    onClose: () => void; // 모달 닫기 핸들러
  }
  
  function CardDetail({ product, onClose }: CardDetailProps) {
    const { CRET_DTM, RTRVL_GRDCD_NM, IMG_FILE_PATH, PRDTNM, RTRVLPRVNS } = product;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-96 p-4 rounded-lg shadow-lg relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✖
          </button>
  
          <h3 className="text-lg font-semibold mb-4">{PRDTNM}</h3>
          <div className="relative w-full h-44 rounded-md overflow-hidden mb-4">
            <img
              src={IMG_FILE_PATH}
              alt={PRDTNM}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <p className="text-sm text-gray-500">등록일: {CRET_DTM}</p>
          <p className="text-sm font-semibold">등급: {RTRVL_GRDCD_NM}</p>
          <p className="text-sm text-gray-700">회수 사유: {RTRVLPRVNS}</p>
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
  
  export default CardDetail;
  