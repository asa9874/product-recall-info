/* eslint-disable */
declare global {
  interface Window {
    Kakao: any;
  }
}

import axios from 'axios';

const initializeKakaoAPI = async (
  title: string,
  description: string,
  imageUrl: string,
  link: string
) => {
  try {
    const response = await axios.post(
      '/.netlify/functions/kakaoApi',
      {
        title,
        description,
        imageUrl,
        link,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('카카오톡 공유 오류', error);
  }
};

export default initializeKakaoAPI;
