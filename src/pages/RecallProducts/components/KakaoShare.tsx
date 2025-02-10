/* eslint-disable */

import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

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
  const APIKEY = import.meta.env.VITE_KAKAO_API_KEY;

  useEffect(() => {
    if (!window.Kakao) {
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
      script.async = true;
      script.onload = () => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(APIKEY);
        }
      };
      document.body.appendChild(script);
    } else if (!window.Kakao.isInitialized()) {
      window.Kakao.init(APIKEY);
    }
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: title,
          description: description,
          imageUrl: imageUrl,
          link: {
            mobileWebUrl: link,
            webUrl: link,
          },
        },
        buttons: [
          {
            title: '더많은 회수제품 알아보기',
            link: {
              mobileWebUrl: link,
              webUrl: link,
            },
          },
        ],
      });
    }
  };

  return (
    <button
      onClick={shareKakao}
      className="bg-yellow-400 text-black p-1 rounded-lg hover:bg-yellow-500 transition flex items-center absolute right-4 top-0"
    >
      <img src="/kakao.png" alt="카카오톡 로고" className="w-6 h-6" />
    </button>
  );
}

export default KakaoShareButton;
