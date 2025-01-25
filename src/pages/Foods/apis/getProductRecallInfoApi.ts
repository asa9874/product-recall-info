import axios from 'axios';
import { ProductRecallInfo } from '../types/ProductRecallInfo';


export const getProductRecallInfo = async (page: number): Promise<ProductRecallInfo[]> => {
  const url =
    "https://openapi.foodsafetykorea.go.kr/api/" +
    import.meta.env.VITE_API_KEY +
    `/I0490/json/${page}/${page+30}`;

  try {
    const response = await axios.get(url);
    const items = response.data.I0490.row;
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
      IMG_FILE_PATH: item.IMG_FILE_PATH,
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

