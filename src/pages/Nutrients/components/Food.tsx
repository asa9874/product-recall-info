import { FoodNutrients } from "../types/FoodNutrients";

interface FoodProps {
  food: FoodNutrients;
  action: (food: FoodNutrients) => void;
  Type: 'ADD' | 'DELETE';
}

function Food({ food,action,Type }: FoodProps ) {
  return (
    <div className="flex flex-col bg-gray-100 p-2 rounded-lg font-bold">
      <div className="text-xl">{food.FOOD_NM_KR}</div>
      <div className="text-xs text-gray-600">{food.SERVING_SIZE}당 {food.ENERGY_KCAL}칼로리</div>
      {Type === 'DELETE' && (
        <button onClick={() => action(food)} className="bg-red-500 text-white rounded-lg mt-2">삭제</button>
      )}
      {Type === 'ADD' && (
        <button onClick={() => action(food)} className="bg-green-500 text-white rounded-lg mt-2">추가</button>
      )}
    </div>
  );
}

export default Food;