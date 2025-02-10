import { useState } from 'react';
import { ForeignFoodRecallInfo } from '../../types/ForeignFoodRecallInfo';
import CardDetail from '../Base/CardDetail';
import KakaoShareButton from '../KakaoShare';
interface CardDetailProps {
  product: ForeignFoodRecallInfo;
  onClose: () => void; // 모달 닫기 핸들러
}

function ForeignFoodCardDetail({ product, onClose }: CardDetailProps) {
  const { TITL, DETECT_TITL, CRET_DTM, BDT, DOWNLOAD_URL, NTCTXT_NO } = product;
  const [hasError, setHasError] = useState(false); // 이미지 오류 상태 추가

  return (
    <CardDetail onClose={onClose}>
      <KakaoShareButton
        title={`${TITL}`}
        description={`${DETECT_TITL} 검출`}
        imageUrl={DOWNLOAD_URL}
        link="https://productrecall.netlify.app/"
      />
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
        <p className="text-xs text-gray-400">
          등록일: {CRET_DTM.split(' ')[0]}
        </p>
        <p className="text-xs font-semibold">
          유해물질: <span className="text-red-500">{DETECT_TITL}</span>
        </p>
        <p className="text-xs text-gray-300 whitespace-pre-line">
          상세 내용: {BDT}
        </p>
      </div>

      <div className="mt-4 border-t pt-3">
        <p className="text-xs text-gray-400">게시글 번호: {NTCTXT_NO}</p>
      </div>
    </CardDetail>
  );
}

export default ForeignFoodCardDetail;
