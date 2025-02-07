import Body from '../../../layout/Body';
import { NutrientState, useNutrientStore } from '../context';
import { FoodNutrients } from '../types/FoodNutrients';
import FoodsContainer from './FoodsContainer';
import NutrientsBarsContainer from './NutrientsBarsContainer';
import SeletedFoodContainer from './SeletedFoodContainer';
import { useEffect, useReducer } from 'react';

export interface Action {
  type: 'ADD' | 'DELETE';
  newFood?: FoodNutrients;
  id?: string; // id 추가
}

interface State {
  foods: FoodNutrients[];
}

export const updateNutrients = (
  food: FoodNutrients,
  operation: 'add' | 'delete'
) => {
  const validKeys: (keyof NutrientState)[] = [
    'ENERGY_KCAL',
    'PROTEIN_G',
    'FAT_G',
    'CARBOHYDRATE_G',
    'CALCIUM_MG',
    'IRON_MG',
    'POTASSIUM_MG',
    'SODIUM_MG',
    'VITAMIN_A_UG_RAE',
    'VITAMIN_C_MG',
    'VITAMIN_D_UG',
    'VITAMIN_B1_MG',
    'VITAMIN_B2_MG',
    'VITAMIN_B6_MG',
    'VITAMIN_B12_UG',
    'FOLATE_DFE_UG',
    'CHOLINE_MG',
    'PANTOTHENIC_ACID_MG',
    'NIACIN_MG',
    'SATURATED_FAT_G',
    'CHOLESTEROL_MG',
    'SUGARS_G',
    'DIETARY_FIBER_G',
  ];
  validKeys.forEach((key) => {
    const currentValue = useNutrientStore.getState()[key] as number;
    const value = food[key as keyof FoodNutrients];

    if (value !== undefined) {
      let updatedValue = typeof value === 'string' ? parseFloat(value) : value;

      if (operation === 'delete') {
        updatedValue = currentValue - updatedValue;
      } else if (operation === 'add') {
        updatedValue = currentValue + updatedValue;
      }

      useNutrientStore
        .getState()
        .setNutrient(key, parseFloat(updatedValue.toFixed(2))); // 상태 갱신
    }
  });
};

const NutrientsBody = () => {
  const resetNutrients = useNutrientStore((state) => state.resetNutrients);
  useEffect(() => {
    resetNutrients(); // 페이지 로드 시 영양소 데이터 초기화
  }, []);

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'ADD':
        if (
          action.newFood &&
          !state.foods.some((food) => food.NUM === action.newFood?.NUM)
        ) {
          updateNutrients(action.newFood, 'add');
          return { ...state, foods: [...state.foods, action.newFood] };
        }
        return state;

      case 'DELETE':
        if (action.id) {
          return {
            ...state,
            foods: state.foods.filter((food) => food.id !== action.id),
          };
        }
        return state;

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { foods: [] });

  const addFood = (newFood: FoodNutrients) => {
    dispatch({ type: 'ADD', newFood: { ...newFood, id: crypto.randomUUID() } });
  };

  const deleteFood = (food: FoodNutrients) => {
    dispatch({ type: 'DELETE', id: food.id });
    updateNutrients(food, 'delete');
  };

  return (
    <Body pt={20}>
      <div className="flex gap-4 xl:gap-8 flex-grow p-3 xl:p-10 h-full flex-col xl:flex-row">
        <NutrientsBarsContainer />
        <FoodsContainer addFood={addFood} />
        <SeletedFoodContainer deleteFood={deleteFood} foods={state.foods} />
      </div>
    </Body>
  );
};

export default NutrientsBody;
