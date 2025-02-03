import axios from 'axios';
import { NutrientsInfo } from '../types/NutrientsInfo';

export const getFoodNutrient = async (page: number, searchString: string): Promise<NutrientsInfo[]> => {
  console.log("의약품", page);

  const BASE_URL = "https://apis.data.go.kr/1471000/FoodNtrCpntDbInfo01/getFoodNtrCpntDbInq01";
  const API_KEY = import.meta.env.VITE_NUTRIENTS_API_KEY;

  const params = new URLSearchParams({
    serviceKey: API_KEY,
    type: "json",
    pageNo: String(page + 1),
    numOfRows: "1",
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
        ENERGY_KCAL:         item.AMT_NUM1 || "0",
        WATER_G:             item.AMT_NUM2 || "0",
        PROTEIN_G:           item.AMT_NUM3 || "0",
        FAT_G:               item.AMT_NUM4 || "0",
        LIPID_EDIBLE_G:      item.AMT_NUM5 || "0",
        ASH_G:               item.AMT_NUM6 || "0",
        CARBOHYDRATE_G:      item.AMT_NUM7 || "0",
        SUGARS_G:            item.AMT_NUM8 || "0",
        DIETARY_FIBER_G:     item.AMT_NUM9 || "0",
        CALCIUM_MG:          item.AMT_NUM10 || "0",
        IRON_MG:             item.AMT_NUM11 || "0",
        PHOSPHORUS_MG:       item.AMT_NUM12 || "0",
        POTASSIUM_MG:        item.AMT_NUM13 || "0",
        SODIUM_MG:           item.AMT_NUM14 || "0",
        VITAMIN_A_UG_RAE:    item.AMT_NUM15 || "0",
        VITAMIN_A_UG:        item.AMT_NUM16 || "0",
        RETINOL_UG:          item.AMT_NUM17 || "0",
        BETA_CAROTENE_UG:    item.AMT_NUM18 || "0",
        VITAMIN_B1_MG:       item.AMT_NUM19 || "0",
        VITAMIN_B2_MG:       item.AMT_NUM20 || "0",
        NIACIN_MG:           item.AMT_NUM21 || "0",
        VITAMIN_C_MG:        item.AMT_NUM22 || "0",
        VITAMIN_D_UG:        item.AMT_NUM23 || "0",
        CHOLESTEROL_MG:      item.AMT_NUM24 || "0",
        SATURATED_FAT_G:     item.AMT_NUM25 || "0",
        TRANS_FAT_G:         item.AMT_NUM26 || "0",
        NICOTINIC_ACID_MG:   item.AMT_NUM27 || "0",
        NICOTINAMIDE_MG:     item.AMT_NUM28 || "0",
        BIOTIN_UG:           item.AMT_NUM29 || "0",
        VITAMIN_B6_MG:       item.AMT_NUM30 || "0",
        VITAMIN_B12_UG:      item.AMT_NUM31 || "0",
        FOLATE_DFE_UG:       item.AMT_NUM32 || "0",
        CHOLINE_MG:          item.AMT_NUM33 || "0",
        PANTOTHENIC_ACID_MG: item.AMT_NUM34 || "0",
        VITAMIN_D2_UG:       item.AMT_NUM35 || "0",
        VITAMIN_D3_UG:       item.AMT_NUM36 || "0",
      };
    });
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error;
  }
};
