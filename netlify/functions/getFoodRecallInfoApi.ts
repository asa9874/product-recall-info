/// <reference types="node" />
import axios from 'axios';
import { FoodRecallInfo } from '../../src/pages/RecallProducts/types/FoodRecallInfo';

const CALLCOUNT=30;
export const getFoodRecallInfo = async (page: number,searchString:string): Promise<FoodRecallInfo[]> => {
  console.log("음식",page)
  const url1 =
    "https://openapi.foodsafetykorea.go.kr/api/" +
    process.env.VITE_FOOD_API_KEY +
    `/I0490/json/${1+page*CALLCOUNT}/${30+page*CALLCOUNT}`;


  const url2 =
    "https://openapi.foodsafetykorea.go.kr/api/" +
    import.meta.env.VITE_FOOD_API_KEY +
    `/I0490/json/1/500`;

  // searchString이 존재하면 url2, 없으면 url1
  const url = searchString ? url2 : url1;

  try {
    const response = await axios.get(url);
    const items = response.data.I0490.row;

    if (!Array.isArray(items)) {
      return [];
    }
    
    return items.map((item: any) => ({
      PRDTNM: item.PRDTNM,
      RTRVLPRVNS: item.RTRVLPRVNS,
      BSSHNM: item.BSSHNM,
      ADDR: item.ADDR,
      TELNO: item.TELNO,
      BRCDNO: item.BRCDNO,
      FRMLCUNIT: item.FRMLCUNIT,
      MNFDT: item.MNFDT,
      RTRVLPLANDOC_RTRVLMTHD: item.RTRVLPLANDOC_RTRVLMTHD,
      DISTBTMLMT: item.DISTBTMLMT,
      PRDLST_TYPE: item.PRDLST_TYPE,
      IMG_FILE_PATH: item.IMG_FILE_PATH.split(",")[0],
      PRDLST_CD: item.PRDLST_CD,
      CRET_DTM: item.CRET_DTM,
      RTRVLDSUSE_SEQ: item.RTRVLDSUSE_SEQ,
      PRDLST_REPORT_NO: item.PRDLST_REPORT_NO,
      RTRVL_GRDCD_NM: item.RTRVL_GRDCD_NM,
      PRDLST_CD_NM: item.PRDLST_CD_NM,
      LCNS_NO: item.LCNS_NO,
    }));
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error;
  }
};

