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
  const shareKakao = () => {
    initializeKakaoAPI(title, description, imageUrl, link);
  };

  return (
    <button
      onClick={shareKakao}
      className="bg-yellow-400 text-black p-2 rounded-lg hover:bg-yellow-500 transition flex items-center absolute right-4 top-0"
    >
      <img src="/kakao.png" alt="카카오톡 로고" className="w-5 h-5" />
    </button>
  );
}

export default KakaoShareButton;
