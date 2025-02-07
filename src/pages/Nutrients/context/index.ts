import { create } from 'zustand';

export interface NutrientState {
  ENERGY_KCAL: number;
  PROTEIN_G: number;
  FAT_G: number;
  CARBOHYDRATE_G: number;
  CALCIUM_MG: number;
  IRON_MG: number;
  POTASSIUM_MG: number;
  SODIUM_MG: number;
  VITAMIN_A_UG_RAE: number;
  VITAMIN_C_MG: number;
  VITAMIN_D_UG: number;
  VITAMIN_B1_MG: number;
  VITAMIN_B2_MG: number;
  VITAMIN_B6_MG: number;
  VITAMIN_B12_UG: number;
  FOLATE_DFE_UG: number;
  CHOLINE_MG: number;
  PANTOTHENIC_ACID_MG: number;
  NIACIN_MG: number;
  SATURATED_FAT_G: number;
  CHOLESTEROL_MG: number;
  SUGARS_G: number;
  DIETARY_FIBER_G: number;
  setNutrient: (key: keyof NutrientState, value: number) => void;
  resetNutrients: () => void; 
}

const initialState: Omit<NutrientState, 'setNutrient' | 'resetNutrients'> = {
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
};

const useNutrientStore = create<NutrientState>((set) => ({
  ...initialState,
  setNutrient: (key, value) => set((state) => ({ ...state, [key]: value })),
  resetNutrients: () => set(initialState), // 초기화 함수
}));

export { useNutrientStore };
