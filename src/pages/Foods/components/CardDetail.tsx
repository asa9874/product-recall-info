import { ProductRecallInfo } from "../types/ProductRecallInfo";

interface CardDetailProps {
  product: ProductRecallInfo;
  onClose: () => void; // 모달 닫기 핸들러
}

function CardDetail({ product, onClose }: CardDetailProps) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-xl p-3 rounded-lg shadow-lg relative space-y-4">
        
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

export default CardDetail;
