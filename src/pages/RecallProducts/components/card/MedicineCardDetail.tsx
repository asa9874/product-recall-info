import CardDetail from '../Base/CardDetail';
import { MedicineRecallInfo } from '../../types/MedicineRecallInfo';
import KakaoShareButton from '../KakaoShare';

interface CardDetailProps {
  product: MedicineRecallInfo;
  onClose: () => void;
}

function MedicineCardDetail({ product, onClose }: CardDetailProps) {
  const { PRDUCT, RECALL_COMMAND_DATE, RTRVL_RESN, ITEM_SEQ } = product;

  return (
    <CardDetail onClose={onClose}>
      <KakaoShareButton
        title={`${PRDUCT}`}
        description={`${RTRVL_RESN}`}
        imageUrl={''}
        link="https://productrecall.netlify.app/"
      />
      <h3 className="text-sm font-semibold mb-4 text-center">{PRDUCT}</h3>
      <div className="relative w-full h-40 sm:h-48 md:h-56 rounded-md overflow-hidden mb-4">
        <div className="w-full h-full object-cover rounded-md bg-black flex items-center justify-center text-white text-sm">
          제품 이미지가 없습니다
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs text-gray-400">
          등록일: {RECALL_COMMAND_DATE.split(' ')[0]}
        </p>
        <p className="text-xs text-gray-300 whitespace-pre-line">
          상세 내용: {RTRVL_RESN}
        </p>
      </div>

      <div className="mt-4 border-t pt-3">
        <p className="text-xs text-gray-400">게시글 번호: {ITEM_SEQ}</p>
      </div>
    </CardDetail>
  );
}

export default MedicineCardDetail;
