import { useEffect } from 'react';
import initializeKakaoAPI from '../apis/kakaoApi';

interface KakaoShareProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

function KakaoShareButton({
  title,
  description,
  imageUrl,
  link,
}: KakaoShareProps) {
  useEffect(() => {
    if (!window.Kakao) {
      initializeKakaoAPI(title, description, imageUrl, link);
    }
  }, [title, description, imageUrl, link]);

  const shareKakao = () => {
    initializeKakaoAPI(title, description, imageUrl, link);
  };

  return (
    <button
      onClick={shareKakao}
      className="bg-yellow-400 text-black p-1 rounded-lg hover:bg-yellow-500 transition flex items-center"
    >
      <img src="/kakao.png" alt="카카오톡 로고" className="w-6 h-6" />
    </button>
  );
}

export default KakaoShareButton;
