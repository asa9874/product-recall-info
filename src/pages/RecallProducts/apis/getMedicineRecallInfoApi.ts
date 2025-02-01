import axios from 'axios';
import { MedicineRecallInfo } from '../types/MedicineRecallInfo';


export const getMedicineNoticeInfo = async (page: number, searchString: string): Promise<MedicineRecallInfo[]> => {
  console.log("의약품", page);

  const BASE_URL = "https://apis.data.go.kr/1471000/MdcinRtrvlSleStpgeInfoService03/getMdcinRtrvlSleStpgelList02";

  const API_KEY = import.meta.env.VITE_MEDICINE_API_KEY;

  const params = new URLSearchParams({
    serviceKey: API_KEY,
    type: "json",
    pageNo: String(page+1),
    numOfRows: String(30),
  });

  // 검색어가 존재하면 추가
  if (searchString.trim().length > 0) {
      params.append("Prduct", searchString);
  }

  const url = `${BASE_URL}?${params.toString()}`;

  try {
    const response = await axios.get(url);
    const items = response.data.body.items;
    console.log(items);
    if (!Array.isArray(items)) {
      return [];
    }
    return items.map((entry: any) => {
      const item = entry.item;
      return {
        PRDUCT: item.PRDUCT || "", // 제품명
        ENTRPS: item.ENTRPS || "", // 업체명
        RTRVL_RESN: item.RTRVL_RESN || "", // 회수 사유
        ENFRC_YN: item.ENFRC_YN || "N", // 강제 여부 (기본값 "N")
        RTRVL_CMMND_DT: item.RTRVL_CMMND_DT || "", // 회수 명령일
        RECALL_COMMAND_DATE: item.RECALL_COMMAND_DATE || "", // 회수 명령 날짜
        ITEM_SEQ: item.ITEM_SEQ || "" // 품목 일련번호
      };
    });
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error;
  }

};
