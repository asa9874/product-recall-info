import { create } from 'zustand';

interface NutrientState {
  ENERGY_KCAL: number;             // 에너지 (kcal)
  PROTEIN_G: number;               // 단백질 (g)
  FAT_G: number;                   // 지방 (g)
  CARBOHYDRATE_G: number;          // 탄수화물 (g)
  CALCIUM_MG: number;              // 칼슘 (mg)
  IRON_MG: number;                 // 철 (mg)
  POTASSIUM_MG: number;            // 칼륨 (mg)
  SODIUM_MG: number;               // 나트륨 (mg)
  VITAMIN_A_UG_RAE: number;        // 비타민 A (μg RAE)
  VITAMIN_C_MG: number;            // 비타민 C (mg)
  VITAMIN_D_UG: number;            // 비타민 D (μg)
  VITAMIN_B1_MG: number;           // 비타민 B1 (mg)
  VITAMIN_B2_MG: number;           // 비타민 B2 (mg)
  VITAMIN_B6_MG: number;           // 비타민 B6 (mg)
  VITAMIN_B12_UG: number;          // 비타민 B12 (μg)
  FOLATE_DFE_UG: number;           // 엽산 (DFE) (μg)
  CHOLINE_MG: number;              // 콜린 (mg)
  PANTOTHENIC_ACID_MG: number;     // 판토텐산 (mg)
  NIACIN_MG: number;               // 니아신 (mg)
  SATURATED_FAT_G: number;         // 포화지방산 (g)
  CHOLESTEROL_MG: number;          // 콜레스테롤 (mg)
  SUGARS_G: number;                // 당류 (g)
  DIETARY_FIBER_G: number;         // 식이섬유 (g)
  setNutrient: (key: keyof NutrientState, value: number) => void;
}

// zustand store
const useNutrientStore = create<NutrientState>((set) => ({
  ENERGY_KCAL: 0,
  PROTEIN_G: 0,
  FAT_G: 0,
  CARBOHYDRATE_G: 0,
  CALCIUM_MG: 0,
  IRON_MG: 0,
  POTASSIUM_MG: 0,
  SODIUM_MG: 0,
  VITAMIN_A_UG_RAE: 0,
  VITAMIN_C_MG: 0,
  VITAMIN_D_UG: 0,
  VITAMIN_B1_MG: 0,
  VITAMIN_B2_MG: 0,
  VITAMIN_B6_MG: 0,
  VITAMIN_B12_UG: 0,
  FOLATE_DFE_UG: 0,
  CHOLINE_MG: 0,
  PANTOTHENIC_ACID_MG: 0,
  NIACIN_MG: 0,
  SATURATED_FAT_G: 0,
  CHOLESTEROL_MG: 0,
  SUGARS_G: 0,
  DIETARY_FIBER_G: 0,
  setNutrient: (key, value) => set((state) => ({ ...state, [key]: value })),
}));

export { useNutrientStore };
