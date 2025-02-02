/// <reference types="node" />
import axios from 'axios';
import { Handler } from '@netlify/functions'; // Netlify 함수 핸들러 import

interface FoodRecallInfo {
  PRDTNM: string;
  RTRVLPRVNS: string;
  BSSHNM: string;
  ADDR: string;
  TELNO: string;
  BRCDNO: string;
  FRMLCUNIT: string;
  MNFDT: string;
  RTRVLPLANDOC_RTRVLMTHD: string;
  DISTBTMLMT: string;
  PRDLST_TYPE: string;
  IMG_FILE_PATH: string;
  PRDLST_CD: string;
  CRET_DTM: string;
  RTRVLDSUSE_SEQ: string;
  PRDLST_REPORT_NO: string;
  RTRVL_GRDCD_NM: string;
  PRDLST_CD_NM: string;
  LCNS_NO: string;
}

const CALLCOUNT = 30;

export const handler: Handler = async (event) => {
  const { page, searchString }: { page: number; searchString: string } = JSON.parse(event.body || '{}'); // event에서 파라미터 추출
  console.log("음식", page);

  const url1 =
    "https://openapi.foodsafetykorea.go.kr/api/" +
    process.env.VITE_FOOD_API_KEY +
    `/I0490/json/${1 + page * CALLCOUNT}/${30 + page * CALLCOUNT}`;

  const url2 =
    "https://openapi.foodsafetykorea.go.kr/api/" +
    process.env.VITE_FOOD_API_KEY +
    `/I0490/json/1/500`;

  // searchString이 존재하면 url2, 없으면 url1
  const url = searchString ? url2 : url1;

  try {
    const response = await axios.get(url);
    const items = response.data.I0490.row;

    if (!Array.isArray(items)) {
      return {
        statusCode: 200,
        body: JSON.stringify([]), // 아이템이 없으면 빈 배열 반환
      };
    }

    const result: FoodRecallInfo[] = items.map((item: any) => ({
      PRDTNM: item.PRDTNM || "",
      RTRVLPRVNS: item.RTRVLPRVNS || "",
      BSSHNM: item.BSSHNM || "",
      ADDR: item.ADDR || "",
      TELNO: item.TELNO || "",
      BRCDNO: item.BRCDNO || "",
      FRMLCUNIT: item.FRMLCUNIT || "",
      MNFDT: item.MNFDT || "",
      RTRVLPLANDOC_RTRVLMTHD: item.RTRVLPLANDOC_RTRVLMTHD || "",
      DISTBTMLMT: item.DISTBTMLMT || "",
      PRDLST_TYPE: item.PRDLST_TYPE || "",
      IMG_FILE_PATH: item.IMG_FILE_PATH?.split(",")[0] || "",
      PRDLST_CD: item.PRDLST_CD || "",
      CRET_DTM: item.CRET_DTM || "",
      RTRVLDSUSE_SEQ: item.RTRVLDSUSE_SEQ || "",
      PRDLST_REPORT_NO: item.PRDLST_REPORT_NO || "",
      RTRVL_GRDCD_NM: item.RTRVL_GRDCD_NM || "",
      PRDLST_CD_NM: item.PRDLST_CD_NM || "",
      LCNS_NO: item.LCNS_NO || "",
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(result), // 성공적인 결과 반환
    };
  } catch (error) {
    console.error("API 호출 에러:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'API 호출 에러' }),
    };
  }
};
