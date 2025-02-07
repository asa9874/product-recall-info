/// <reference types="node" />
import axios from 'axios';
import { Handler } from '@netlify/functions'; // Netlify 함수 핸들러 import

interface ForeignFoodRecallItem {
  TITL: string;
  DETECT_TITL: string;
  CRET_DTM: string;
  BDT: string;
  DOWNLOAD_URL: string;
  NTCTXT_NO: string;
}

const CALLCOUNT = 30;

const cleanHtml = (html: string): string => {
  let result = html.replace(/<p[^>]*>/g, '`').replace(/<\/p>/g, '`');
  result = result.replace(/&nbsp;/g, ' ');
  result = result.replace(/\s+/g, ' ').trim();
  result = result.replace(/`/g, '\n');
  return result;
};

export const handler: Handler = async (event) => {
  const { page, searchString }: { page: number; searchString: string } =
    JSON.parse(event.body || '{}'); // event에서 파라미터 추출

  console.log('해외음식', page);

  const url1 =
    'https://openapi.foodsafetykorea.go.kr/api/' +
    process.env.VITE_FOREIGN_FOOD_API_KEY +
    `/I2810/json/${1 + page * CALLCOUNT}/${30 + page * CALLCOUNT}`;

  const url2 =
    'https://openapi.foodsafetykorea.go.kr/api/' +
    process.env.VITE_FOREIGN_FOOD_API_KEY +
    `/I2810/json/1/500`;

  // searchString이 존재하면 url2, 없으면 url1
  const url = searchString ? url2 : url1;

  try {
    const response = await axios.get(url);
    const items = response.data.I2810.row;

    if (!Array.isArray(items)) {
      return {
        statusCode: 200,
        body: JSON.stringify([]), // 아이템이 없으면 빈 배열 반환
      };
    }

    const result: ForeignFoodRecallItem[] = items.map((item: any) => ({
      TITL: item.TITL || '', // 제품명
      DETECT_TITL: item.DETECT_TITL || '', // 유해물질
      CRET_DTM: item.CRET_DTM || '', // 생성일자
      BDT: cleanHtml(item.BDT || ''), // 본문내용
      DOWNLOAD_URL: item.DOWNLOAD_URL || '', // 이미지 다운로드 URL
      NTCTXT_NO: item.NTCTXT_NO || '', // 게시글번호
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(result), // 성공적인 결과 반환
    };
  } catch (error) {
    console.error('API 호출 에러:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'API 호출 에러' }),
    };
  }
};
