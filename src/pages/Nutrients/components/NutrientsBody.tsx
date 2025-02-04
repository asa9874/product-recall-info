import Body from "../../../layout/Body";
import { FoodNutrients } from "../types/FoodNutrients";
import FoodsContainer from "./FoodsContainer";
import NutrientsBarsContainer from "./NutrientsBarsContainer";
import SeletedFoodContainer from "./SeletedFoodContainer";
import { useReducer } from "react";

export interface Action {
  type: 'ADD' | 'DELETE';
  newFood?: FoodNutrients;
  id?: string; // id 추가
}

interface State {
  foods: FoodNutrients[];
}

// reducer 함수 
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      if (action.newFood) {
        return { ...state, foods: [...state.foods, action.newFood] };
      }
      return state;

    case 'DELETE':
      if (action.id) {
        return { ...state, foods: state.foods.filter(food => food.id !== action.id) };
      }
      return state;

    default:
      return state;
  }
}


const NutrientsBody = () => {
  const [state, dispatch] = useReducer(reducer, { foods: [] });
    
  const addFood = (newFood: FoodNutrients) => {
    dispatch({ type: 'ADD', newFood: { ...newFood, id: crypto.randomUUID() } }); 
  };
  
  const deleteFood = (food: FoodNutrients) => {
    dispatch({ type: 'DELETE', id: food.id });
  };

  return (
    <Body pt={20}>
      <div className="flex gap-8 p-10 h-full">
        <NutrientsBarsContainer/>
        <FoodsContainer addFood={addFood}/>
        <SeletedFoodContainer deleteFood={deleteFood} foods={state.foods} />
      </div>
    </Body>
  );
};

export default NutrientsBody;
