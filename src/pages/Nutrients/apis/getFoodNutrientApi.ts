import axios from 'axios';
import { FoodNutrients } from '../types/FoodNutrients';

export const getFoodNutrient = async (page: number, searchString: string): Promise<FoodNutrients[]> => {
  console.log("영양소", page, searchString);

  const BASE_URL = "https://apis.data.go.kr/1471000/FoodNtrCpntDbInfo01/getFoodNtrCpntDbInq01";
  const API_KEY = import.meta.env.VITE_NUTRIENTS_API_KEY;

  const params = new URLSearchParams({
    serviceKey: API_KEY,
    type: "json",
    pageNo: String(page + 1),
    numOfRows: "50",
  });

  // 검색어가 존재하면 추가
  if (searchString.trim().length > 0) {
    params.append("FOOD_NM_KR", searchString);
  }

  const url = `${BASE_URL}?${params.toString()}`;

  try {
    const response = await axios.get(url);
    const items = response.data.body?.items;

    if (!Array.isArray(items)) {
      return [];
    }

    return items.map((entry: any) => {
      const item = entry;
      return {
        id:                  "",
        NUM:                 item.NUM || 0,
        FOOD_CD:             item.FOOD_CD || "",
        FOOD_NM_KR:          item.FOOD_NM_KR || "",
        DB_GRP_CM:           item.DB_GRP_CM || "",
        DB_GRP_NM:           item.DB_GRP_NM || "",
        FOOD_OR_CD:          item.FOOD_OR_CD || "",
        FOOD_OR_NM:          item.FOOD_OR_NM || "",
        FOOD_CAT1_CD:        item.FOOD_CAT1_CD || "",
        FOOD_CAT1_NM:        item.FOOD_CAT1_NM || "",
        FOOD_REF_CD:         item.FOOD_REF_CD || "",
        FOOD_REF_NM:         item.FOOD_REF_NM || "",
        FOOD_CAT2_CD:        item.FOOD_CAT2_CD || "",
        FOOD_CAT2_NM:        item.FOOD_CAT2_NM || "",
        FOOD_CAT3_CD:        item.FOOD_CAT3_CD || "",
        FOOD_CAT3_NM:        item.FOOD_CAT3_NM || "",
        FOOD_CAT4_CD:        item.FOOD_CAT4_CD || "",
        FOOD_CAT4_NM:        item.FOOD_CAT4_NM || "",
        SERVING_SIZE:        item.SERVING_SIZE || "",
        ENERGY_KCAL:         Number(item.AMT_NUM1) || 0,  // 에너지 (kcal)
        WATER_G:             Number(item.AMT_NUM2) || 0,  // 수분 (g)
        PROTEIN_G:           Number(item.AMT_NUM3) || 0,  // 단백질 (g)
        FAT_G:               Number(item.AMT_NUM4) || 0,  // 지방 (g)
        LIPID_EDIBLE_G:      Number(item.AMT_NUM5) || 0,  // 가식지방 (g)
        ASH_G:               Number(item.AMT_NUM6) || 0,  // 회분 (g)
        CARBOHYDRATE_G:      Number(item.AMT_NUM7) || 0,  // 탄수화물 (g)
        SUGARS_G:            Number(item.AMT_NUM8) || 0,  // 당류 (g)
        DIETARY_FIBER_G:     Number(item.AMT_NUM9) || 0,  // 식이섬유 (g)
        CALCIUM_MG:          Number(item.AMT_NUM10) || 0, // 칼슘 (mg)
        IRON_MG:             Number(item.AMT_NUM11) || 0, // 철 (mg)
        PHOSPHORUS_MG:       Number(item.AMT_NUM12) || 0, // 인 (mg)
        POTASSIUM_MG:        Number(item.AMT_NUM13) || 0, // 칼륨 (mg)
        SODIUM_MG:           Number(item.AMT_NUM14) || 0, // 나트륨 (mg)
        VITAMIN_A_UG_RAE:    Number(item.AMT_NUM15) || 0, // 비타민 A (µg RAE)
        VITAMIN_A_UG:        Number(item.AMT_NUM16) || 0, // 비타민 A (µg)
        RETINOL_UG:          Number(item.AMT_NUM17) || 0, // 레티놀 (µg)
        BETA_CAROTENE_UG:    Number(item.AMT_NUM18) || 0, // 베타카로틴 (µg)
        VITAMIN_B1_MG:       Number(item.AMT_NUM19) || 0, // 비타민 B1 (mg)
        VITAMIN_B2_MG:       Number(item.AMT_NUM20) || 0, // 비타민 B2 (mg)
        NIACIN_MG:           Number(item.AMT_NUM21) || 0, // 니아신 (mg)
        VITAMIN_C_MG:        Number(item.AMT_NUM22) || 0, // 비타민 C (mg)
        VITAMIN_D_UG:        Number(item.AMT_NUM23) || 0, // 비타민 D (µg)
        CHOLESTEROL_MG:      Number(item.AMT_NUM24) || 0, // 콜레스테롤 (mg)
        SATURATED_FAT_G:     Number(item.AMT_NUM25) || 0, // 포화지방산 (g)
        TRANS_FAT_G:         Number(item.AMT_NUM26) || 0, // 트랜스지방산 (g)
        NICOTINIC_ACID_MG:   Number(item.AMT_NUM27) || 0, // 니코틴산 (mg)
        NICOTINAMIDE_MG:     Number(item.AMT_NUM28) || 0, // 니코틴아미드 (mg)
        BIOTIN_UG:           Number(item.AMT_NUM29) || 0, // 비오틴 (µg)
        VITAMIN_B6_MG:       Number(item.AMT_NUM30) || 0, // 비타민 B6 (mg)
        VITAMIN_B12_UG:      Number(item.AMT_NUM31) || 0, // 비타민 B12 (µg)
        FOLATE_DFE_UG:       Number(item.AMT_NUM32) || 0, // 엽산 (µg DFE)
        CHOLINE_MG:          Number(item.AMT_NUM33) || 0, // 콜린 (mg)
        PANTOTHENIC_ACID_MG: Number(item.AMT_NUM34) || 0, // 판토텐산 (mg)
        VITAMIN_D2_UG:       Number(item.AMT_NUM35) || 0, // 비타민 D2 (µg)
        VITAMIN_D3_UG:       Number(item.AMT_NUM36) || 0, // 비타민 D3 (µg)
      };
    });
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error;
  }
};
