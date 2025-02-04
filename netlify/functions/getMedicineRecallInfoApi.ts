/// <reference types="node" />
import axios from 'axios';
import { Handler } from '@netlify/functions'; // Netlify 함수 핸들러 import

interface MedicineRecallItem {
  PRDUCT: string;
  ENTRPS: string;
  RTRVL_RESN: string;
  ENFRC_YN: string;
  RTRVL_CMMND_DT: string;
  RECALL_COMMAND_DATE: string;
  ITEM_SEQ: string;
}

export const handler: Handler = async (event) => {
  const { page, searchString }: { page: number; searchString: string } = JSON.parse(event.body || '{}'); // event에서 파라미터 추출

  console.log("의약품", page);

  const BASE_URL = "https://apis.data.go.kr/1471000/MdcinRtrvlSleStpgeInfoService03/getMdcinRtrvlSleStpgelList02";

  const API_KEY = process.env.VITE_MEDICINE_API_KEY;
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'API_KEY is missing!' }),
    };
  }

  const params = new URLSearchParams({
    serviceKey: API_KEY,
    type: "json",
    pageNo: String(page + 1), // 페이지 번호
    numOfRows: String(30), // 한 페이지에 보여줄 아이템 개수
  });

  // 검색어가 존재하면 추가
  if (searchString.trim().length > 0) {
    params.append("Prduct", searchString);
  }

  const url = `${BASE_URL}?${params.toString()}`;

  try {
    const response = await axios.get(url);
    const items = response.data.body.items;

    if (!Array.isArray(items)) {
      return {
        statusCode: 200,
        body: JSON.stringify([]), // 아이템이 없으면 빈 배열 반환
      };
    }

    const result: MedicineRecallItem[] = items.map((entry: any) => {
      const item = entry.item;
      return {
        PRDUCT: item.PRDUCT || "",
        ENTRPS: item.ENTRPS || "",
        RTRVL_RESN: item.RTRVL_RESN || "",
        ENFRC_YN: item.ENFRC_YN || "N", // 기본값 "N"
        RTRVL_CMMND_DT: item.RTRVL_CMMND_DT || "",
        RECALL_COMMAND_DATE: item.RECALL_COMMAND_DATE || "",
        ITEM_SEQ: item.ITEM_SEQ || "",
      };
    });

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
