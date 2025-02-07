export interface FoodNutrients {
  id: string; // 고유 ID
  NUM: number; // 번호
  FOOD_CD: string; // 식품코드
  FOOD_NM_KR: string; // 식품명
  DB_GRP_CM: string; // 데이터구분코드
  DB_GRP_NM: string; // 데이터구분명
  FOOD_OR_CD: string; // 식품기원코드
  FOOD_OR_NM: string; // 식품기원명
  FOOD_CAT1_CD: string; // 식품대분류코드
  FOOD_CAT1_NM: string; // 식품대분류명
  FOOD_REF_CD: string; // 대표식품코드
  FOOD_REF_NM: string; // 대표식품명
  FOOD_CAT2_CD: string; // 식품중분류코드
  FOOD_CAT2_NM: string; // 식품중분류명
  FOOD_CAT3_CD: string; // 식품소분류코드
  FOOD_CAT3_NM: string; // 식품소분류명
  FOOD_CAT4_CD: string; // 식품세분류코드
  FOOD_CAT4_NM: string; // 식품세분류명
  SERVING_SIZE: string; // 영양성분함량기준량
  ENERGY_KCAL: number; // 에너지(kcal)
  WATER_G: number; // 수분(g)
  PROTEIN_G: number; // 단백질(g)
  FAT_G: number; // 지방(g)
  LIPID_EDIBLE_G: number; // 지질-가식부100g당(g)
  ASH_G: number; // 회분(g)
  CARBOHYDRATE_G: number; // 탄수화물(g)
  SUGARS_G: number; // 당류(g)
  DIETARY_FIBER_G: number; // 식이섬유(g)
  CALCIUM_MG: number; // 칼슘(mg)
  IRON_MG: number; // 철(mg)
  PHOSPHORUS_MG: number; // 인(mg)
  POTASSIUM_MG: number; // 칼륨(mg)
  SODIUM_MG: number; // 나트륨(mg)
  VITAMIN_A_UG_RAE: number; // 비타민 A(μg RAE)
  VITAMIN_A_UG: number; // 비타민 A(μg)
  RETINOL_UG: number; // 레티놀(μg)
  BETA_CAROTENE_UG: number; // 베타카로틴(μg)
  VITAMIN_B1_MG: number; // 비타민 B1(mg)
  VITAMIN_B2_MG: number; // 비타민 B2(mg)
  NIACIN_MG: number; // 니아신(mg)
  VITAMIN_C_MG: number; // 비타민 C(mg)
  VITAMIN_D_UG: number; // 비타민 D(μg)
  CHOLESTEROL_MG: number; // 콜레스테롤(mg)
  SATURATED_FAT_G: number; // 포화지방산(g)
  TRANS_FAT_G: number; // 트랜스지방산(g)
  NICOTINIC_ACID_MG: number; // 니코틴산 (mg)
  NICOTINAMIDE_MG: number; // 니코틴아마이드(mg)
  BIOTIN_UG: number; // 비오틴(μg)
  VITAMIN_B6_MG: number; // 비타민 B6 (mg)
  VITAMIN_B12_UG: number; // 비타민 B12(μg)
  FOLATE_DFE_UG: number; // 엽산(DFE)(㎍)
  CHOLINE_MG: number; // 콜린(mg)
  PANTOTHENIC_ACID_MG: number; // 판토텐산(mg)
  VITAMIN_D2_UG: number; // 비타민 D2(μg)
  VITAMIN_D3_UG: number; // 비타민 D3(μg)
}
