import axios from 'axios';
import { MedicineRecallInfo } from '../types/MedicineRecallInfo';


export const getMedicineNoticeInfo = async (page: number, searchString: string): Promise<MedicineRecallInfo[]> => {
  try {
    const response = await axios.post('/.netlify/functions/getMedicineRecallInfoApi', {
      page,
      searchString,
    });

    const items = response.data;

    if (!Array.isArray(items)) {
      return [];
    }

    return items.map((entry: any) => ({
      PRDUCT: entry.PRDUCT || "", // 제품명
      ENTRPS: entry.ENTRPS || "", // 업체명
      RTRVL_RESN: entry.RTRVL_RESN || "", // 회수 사유
      ENFRC_YN: entry.ENFRC_YN || "N", // 강제 여부 (기본값 "N")
      RTRVL_CMMND_DT: entry.RTRVL_CMMND_DT || "", // 회수 명령일
      RECALL_COMMAND_DATE: entry.RECALL_COMMAND_DATE || "", // 회수 명령 날짜
      ITEM_SEQ: entry.ITEM_SEQ || "" // 품목 일련번호
    }));
  } catch (error) {
    console.error('API 호출 에러:', error);
    throw error;
  }
};
