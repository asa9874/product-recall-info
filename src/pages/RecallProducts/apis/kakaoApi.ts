/* eslint-disable */
declare global {
  interface Window {
    Kakao: any;
  }
}

const initializeKakaoAPI = (
  title: string,
  description: string,
  imageUrl: string,
  link: string
) => {
  const APIKEY = import.meta.env.VITE_KAKAO_API_KEY;
  if (!window.Kakao) {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(APIKEY);
      }
      // 카카오톡 메시지 보내기
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
    };
    document.body.appendChild(script);
  } else if (!window.Kakao.isInitialized()) {
    window.Kakao.init(APIKEY); // 이미 SDK가 로드되었으면 초기화
  } else {
    // 카카오 SDK가 이미 초기화된 경우, 바로 카카오톡 메시지 보내기
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

export default initializeKakaoAPI;