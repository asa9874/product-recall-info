import axios from 'axios';
import { ForeignFoodRecallInfo } from '../types/ForeignFoodRecallInfo';

const CALLCOUNT = 30;

export const getForeignFoodNoticeInfo = async (
  page: number,
  searchString: string
): Promise<ForeignFoodRecallInfo[]> => {
  console.log(page);

  const url1 =
    "https://openapi.foodsafetykorea.go.kr/api/" +
    import.meta.env.VITE_FOREIGN_FOOD_API_KEY +
    `/I12810/json/${1 + page * CALLCOUNT}/${30 + page * CALLCOUNT}`;

  const url2 =
    "https://openapi.foodsafetykorea.go.kr/api/" +
    import.meta.env.VITE_FOREIGN_FOOD_API_KEY +
    `/I12810/json/1/500`;

  // searchString이 존재하면 url2, 없으면 url1
  const url = searchString ? url2 : url1;

  try {
    const response = await axios.get(url);
    const items = response.data.I12810.row;

    if (!Array.isArray(items)) {
      return [];
    }

    return items.map((item: any) => ({
      TITL: item.PRDTNM,    
      DETECT_TITL: item.RTRVLPRVNS,  
      CRET_DTM: item.CRET_DTM, 
      BDT: item.BDT,  
      DOWNLOAD_URL: item.IMG_FILE_PATH.split(",")[0],  
      NTCTXT_NO: item.RTRVLDSUSE_SEQ,   
    }));
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error;
  }
};
