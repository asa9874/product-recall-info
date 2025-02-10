/* eslint-disable */
declare global {
  interface Window {
    Kakao: any;
  }
}

const initializeKakaoAPI = async (
  title: string,
  description: string,
  imageUrl: string,
  link: string
) => {
  try {
    const response = await fetch('/.netlify/functions/kakaoShare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
        link,
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('카카오톡 공유오류');
  }
};

export default initializeKakaoAPI;
