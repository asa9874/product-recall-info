/// <reference types="node" />
import { Handler } from '@netlify/functions'; // Netlify 함수 핸들러 import
import axios from 'axios';

interface FoodNutrientsItem {
  id:                           string;  // 고유 ID
  NUM:                          number;  // 번호
  FOOD_CD:                      string;  // 식품코드
  FOOD_NM_KR:                   string;  // 식품명
  DB_GRP_CM:                    string;  // 데이터구분코드
  DB_GRP_NM:                    string;  // 데이터구분명
  FOOD_OR_CD:                   string;  // 식품기원코드
  FOOD_OR_NM:                   string;  // 식품기원명
  FOOD_CAT1_CD:                 string;  // 식품대분류코드
  FOOD_CAT1_NM:                 string;  // 식품대분류명
  FOOD_REF_CD:                  string;  // 대표식품코드
  FOOD_REF_NM:                  string;  // 대표식품명
  FOOD_CAT2_CD:                 string;  // 식품중분류코드
  FOOD_CAT2_NM:                 string;  // 식품중분류명
  FOOD_CAT3_CD:                 string;  // 식품소분류코드
  FOOD_CAT3_NM:                 string;  // 식품소분류명
  FOOD_CAT4_CD:                 string;  // 식품세분류코드
  FOOD_CAT4_NM:                 string;  // 식품세분류명
  SERVING_SIZE:                 string;  // 영양성분함량기준량
  ENERGY_KCAL:                  number;  // 에너지(kcal)
  WATER_G:                      number;  // 수분(g)
  PROTEIN_G:                    number;  // 단백질(g)
  FAT_G:                        number;  // 지방(g)
  LIPID_EDIBLE_G:               number;  // 지질-가식부100g당(g)
  ASH_G:                        number;  // 회분(g)
  CARBOHYDRATE_G:               number;  // 탄수화물(g)
  SUGARS_G:                     number;  // 당류(g)
  DIETARY_FIBER_G:              number;  // 식이섬유(g)
  CALCIUM_MG:                   number;  // 칼슘(mg)
  IRON_MG:                      number;  // 철(mg)
  PHOSPHORUS_MG:                number;  // 인(mg)
  POTASSIUM_MG:                 number;  // 칼륨(mg)
  SODIUM_MG:                    number;  // 나트륨(mg)
  VITAMIN_A_UG_RAE:             number;  // 비타민 A(μg RAE)
  VITAMIN_A_UG:                 number;  // 비타민 A(μg)
  RETINOL_UG:                   number;  // 레티놀(μg)
  BETA_CAROTENE_UG:             number;  // 베타카로틴(μg)
  VITAMIN_B1_MG:                number;  // 비타민 B1(mg)
  VITAMIN_B2_MG:                number;  // 비타민 B2(mg)
  NIACIN_MG:                    number;  // 니아신(mg)
  VITAMIN_C_MG:                 number;  // 비타민 C(mg)
  VITAMIN_D_UG:                 number;  // 비타민 D(μg)
  CHOLESTEROL_MG:               number;  // 콜레스테롤(mg)
  SATURATED_FAT_G:              number;  // 포화지방산(g)
  TRANS_FAT_G:                  number;  // 트랜스지방산(g)
  NICOTINIC_ACID_MG:            number;  // 니코틴산 (mg)
  NICOTINAMIDE_MG:              number;  // 니코틴아마이드(mg)
  BIOTIN_UG:                    number;  // 비오틴(μg)
  VITAMIN_B6_MG:                number;  // 비타민 B6 (mg)
  VITAMIN_B12_UG:               number;  // 비타민 B12(μg)
  FOLATE_DFE_UG:                number;  // 엽산(DFE)(㎍)
  CHOLINE_MG:                   number;  // 콜린(mg)
  PANTOTHENIC_ACID_MG:          number;  // 판토텐산(mg)
  VITAMIN_D2_UG:                number;  // 비타민 D2(μg)
  VITAMIN_D3_UG:                number;  // 비타민 D3(μg)
}

export const handler: Handler = async (event) => {
  const { page, searchString }: { page: number; searchString: string } = JSON.parse(event.body || '{}'); // event에서 파라미터 추출
  console.log("영양소", page, searchString);

  const BASE_URL = "https://apis.data.go.kr/1471000/FoodNtrCpntDbInfo01/getFoodNtrCpntDbInq01";
  const API_KEY = process.env.VITE_NUTRIENTS_API_KEY;
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'API_KEY is missing!' }),
    };
  }
  const params = new URLSearchParams({
    serviceKey: API_KEY,
    type: "json",
    pageNo: String(page + 1),
    numOfRows: "30",
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
      return {
        statusCode: 200,
        body: JSON.stringify([]), // 아이템이 없으면 빈 배열 반환
      };
    }

    const result: FoodNutrientsItem[] = items.map((item: any) => ({
      id: "",
      NUM: item.NUM || 0,
      FOOD_CD: item.FOOD_CD || "",
      FOOD_NM_KR: item.FOOD_NM_KR || "",
      DB_GRP_CM: item.DB_GRP_CM || "",
      DB_GRP_NM: item.DB_GRP_NM || "",
      FOOD_OR_CD: item.FOOD_OR_CD || "",
      FOOD_OR_NM: item.FOOD_OR_NM || "",
      FOOD_CAT1_CD: item.FOOD_CAT1_CD || "",
      FOOD_CAT1_NM: item.FOOD_CAT1_NM || "",
      FOOD_REF_CD: item.FOOD_REF_CD || "",
      FOOD_REF_NM: item.FOOD_REF_NM || "",
      FOOD_CAT2_CD: item.FOOD_CAT2_CD || "",
      FOOD_CAT2_NM: item.FOOD_CAT2_NM || "",
      FOOD_CAT3_CD: item.FOOD_CAT3_CD || "",
      FOOD_CAT3_NM: item.FOOD_CAT3_NM || "",
      FOOD_CAT4_CD: item.FOOD_CAT4_CD || "",
      FOOD_CAT4_NM: item.FOOD_CAT4_NM || "",
      SERVING_SIZE: item.SERVING_SIZE || "",
      ENERGY_KCAL: Number(item.AMT_NUM1) || 0,
      WATER_G: Number(item.AMT_NUM2) || 0,
      PROTEIN_G: Number(item.AMT_NUM3) || 0,
      FAT_G: Number(item.AMT_NUM4) || 0,
      LIPID_EDIBLE_G: Number(item.AMT_NUM5) || 0,
      ASH_G: Number(item.AMT_NUM6) || 0,
      CARBOHYDRATE_G: Number(item.AMT_NUM7) || 0,
      SUGARS_G: Number(item.AMT_NUM8) || 0,
      DIETARY_FIBER_G: Number(item.AMT_NUM9) || 0,
      CALCIUM_MG: Number(item.AMT_NUM10) || 0,
      IRON_MG: Number(item.AMT_NUM11) || 0,
      PHOSPHORUS_MG: Number(item.AMT_NUM12) || 0,
      POTASSIUM_MG: Number(item.AMT_NUM13) || 0,
      SODIUM_MG: Number(item.AMT_NUM14) || 0,
      VITAMIN_A_UG_RAE: Number(item.AMT_NUM15) || 0,
      VITAMIN_A_UG: Number(item.AMT_NUM16) || 0,
      RETINOL_UG: Number(item.AMT_NUM17) || 0,
      BETA_CAROTENE_UG: Number(item.AMT_NUM18) || 0,
      VITAMIN_B1_MG: Number(item.AMT_NUM19) || 0,
      VITAMIN_B2_MG: Number(item.AMT_NUM20) || 0,
      NIACIN_MG: Number(item.AMT_NUM21) || 0,
      VITAMIN_C_MG: Number(item.AMT_NUM22) || 0,
      VITAMIN_D_UG: Number(item.AMT_NUM23) || 0,
      CHOLESTEROL_MG: Number(item.AMT_NUM24) || 0,
      SATURATED_FAT_G: Number(item.AMT_NUM25) || 0,
      TRANS_FAT_G: Number(item.AMT_NUM26) || 0,
      NICOTINIC_ACID_MG: Number(item.AMT_NUM27) || 0,
      NICOTINAMIDE_MG: Number(item.AMT_NUM28) || 0,
      BIOTIN_UG: Number(item.AMT_NUM29) || 0,
      VITAMIN_B6_MG: Number(item.AMT_NUM30) || 0,
      VITAMIN_B12_UG: Number(item.AMT_NUM31) || 0,
      FOLATE_DFE_UG: Number(item.AMT_NUM32) || 0,
      CHOLINE_MG: Number(item.AMT_NUM33) || 0,
      PANTOTHENIC_ACID_MG: Number(item.AMT_NUM34) || 0,
      VITAMIN_D2_UG: Number(item.AMT_NUM35) || 0,
      VITAMIN_D3_UG: Number(item.AMT_NUM36) || 0,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("API 호출 에러:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "API 호출 에러" }),
    };
  }
};
