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
    `/I2810/json/${1 + page * CALLCOUNT}/${30 + page * CALLCOUNT}`;

  const url2 =
    "https://openapi.foodsafetykorea.go.kr/api/" +
    import.meta.env.VITE_FOREIGN_FOOD_API_KEY +
    `/I2810/json/1/500`;

  // searchString이 존재하면 url2, 없으면 url1
  const url = searchString ? url2 : url1;

  try {
    const response = await axios.get(url);
    const items = response.data.I2810.row;

    if (!Array.isArray(items)) {
      return [];
    }
    //console.log(items);
    return items.map((item: any) => ({
      TITL: item.TITL || "",  // 제품명, 없을 경우 빈 문자열
      DETECT_TITL: item.DETECT_TITL || "",  // 유해물질, 없을 경우 빈 문자열
      CRET_DTM: item.CRET_DTM || "",  // 생성일자, 없을 경우 빈 문자열
      BDT: item.BDT || "",  // 본문내용, 없을 경우 빈 문자열
      DOWNLOAD_URL: item.DOWNLOAD_URL || "",  // 이미지 다운로드 URL, 없을 경우 빈 문자열
      NTCTXT_NO: item.NTCTXT_NO || "",  // 게시글번호, 없을 경우 빈 문자열
    }));
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error;
  }
};
