/// <reference types="node" />
import { Handler } from '@netlify/functions';
import axios from 'axios';

interface KakaoShareRequest {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const handler: Handler = async (event) => {
  try {
    const { title, description, imageUrl, link }: KakaoShareRequest =
      JSON.parse(event.body || '{}');

    const APIKEY = process.env.VITE_KAKAO_API_KEY;
    if (!APIKEY) {
      throw new Error('Kakao API key is missing in environment variables');
    }

    const response = await axios.post(
      'https://kapi.kakao.com/v1/api/talk/friends/message/default/send',
      {
        objectType: 'feed',
        content: {
          title,
          description,
          imageUrl,
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
      },
      {
        headers: {
          Authorization: `Bearer ${APIKEY}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Success',
        data: response.data,
      }),
    };
  } catch (error) {
    console.error('Error sharing on Kakao:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
    };
  }
};

export { handler };
