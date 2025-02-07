import axios from 'axios';
import { FoodNutrients } from '../types/FoodNutrients';

export const getFoodNutrient = async (page: number, searchString: string): Promise<FoodNutrients[]> => {
  try {
  const response = await axios.post('/.netlify/functions/getFoodNutrientApi', {
    page,
    searchString,
  });

  const items = response.data;

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
        ENERGY_KCAL:         Number(item.ENERGY_KCAL) || 0,   
        WATER_G:             Number(item.WATER_G) || 0,  // 수분 (g)
        PROTEIN_G:           Number(item.PROTEIN_G) || 0,  // 단백질 (g)
        FAT_G:               Number(item.FAT_G) || 0,  // 지방 (g)
        LIPID_EDIBLE_G:      Number(item.LIPID_EDIBLE_G) || 0,  // 가식지방 (g)
        ASH_G:               Number(item.ASH_G) || 0,  // 회분 (g)
        CARBOHYDRATE_G:      Number(item.CARBOHYDRATE_G) || 0,  // 탄수화물 (g)
        SUGARS_G:            Number(item.SUGARS_G) || 0,  // 당류 (g)
        DIETARY_FIBER_G:     Number(item.DIETARY_FIBER_G) || 0,  // 식이섬유 (g)
        CALCIUM_MG:          Number(item.CALCIUM_MG) || 0, // 칼슘 (mg)
        IRON_MG:             Number(item.IRON_MG) || 0, // 철 (mg)
        PHOSPHORUS_MG:       Number(item.PHOSPHORUS_MG) || 0, // 인 (mg)
        POTASSIUM_MG:        Number(item.POTASSIUM_MG) || 0, // 칼륨 (mg)
        SODIUM_MG:           Number(item.SODIUM_MG) || 0, // 나트륨 (mg)
        VITAMIN_A_UG_RAE:    Number(item.VITAMIN_A_UG_RAE) || 0, // 비타민 A (µg RAE)
        VITAMIN_A_UG:        Number(item.VITAMIN_A_UG) || 0, // 비타민 A (µg)
        RETINOL_UG:          Number(item.RETINOL_UG) || 0, // 레티놀 (µg)
        BETA_CAROTENE_UG:    Number(item.BETA_CAROTENE_UG) || 0, // 베타카로틴 (µg)
        VITAMIN_B1_MG:       Number(item.VITAMIN_B1_MG) || 0, // 비타민 B1 (mg)
        VITAMIN_B2_MG:       Number(item.VITAMIN_B2_MG) || 0, // 비타민 B2 (mg)
        NIACIN_MG:           Number(item.NIACIN_MG) || 0, // 니아신 (mg)
        VITAMIN_C_MG:        Number(item.VITAMIN_C_MG) || 0, // 비타민 C (mg)
        VITAMIN_D_UG:        Number(item.VITAMIN_D_UG) || 0, // 비타민 D (µg)
        CHOLESTEROL_MG:      Number(item.CHOLESTEROL_MG) || 0, // 콜레스테롤 (mg)
        SATURATED_FAT_G:     Number(item.SATURATED_FAT_G) || 0, // 포화지방산 (g)
        TRANS_FAT_G:         Number(item.TRANS_FAT_G) || 0, // 트랜스지방산 (g)
        NICOTINIC_ACID_MG:   Number(item.NICOTINIC_ACID_MG) || 0, // 니코틴산 (mg)
        NICOTINAMIDE_MG:     Number(item.NICOTINAMIDE_MG) || 0, // 니코틴아미드 (mg)
        BIOTIN_UG:           Number(item.BIOTIN_UG) || 0, // 비오틴 (µg)
        VITAMIN_B6_MG:       Number(item.VITAMIN_B6_MG) || 0, // 비타민 B6 (mg)
        VITAMIN_B12_UG:      Number(item.VITAMIN_B12_UG) || 0, // 비타민 B12 (µg)
        FOLATE_DFE_UG:       Number(item.FOLATE_DFE_UG) || 0, // 엽산 (µg DFE)
        CHOLINE_MG:          Number(item.CHOLINE_MG) || 0, // 콜린 (mg)
        PANTOTHENIC_ACID_MG: Number(item.PANTOTHENIC_ACID_MG) || 0, // 판토텐산 (mg)
        VITAMIN_D2_UG:       Number(item.VITAMIN_D2_UG) || 0, // 비타민 D2 (µg)
        VITAMIN_D3_UG:       Number(item.VITAMIN_D3_UG) || 0, // 비타민 D3 (µg)
      };
    });
  } catch (error) {
    console.error('API 호출 에러:', error);
    throw error;
  }
};
