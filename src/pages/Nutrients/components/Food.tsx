import { FoodNutrients } from "../types/FoodNutrients";

interface FoodProps {
  food: FoodNutrients;
  action: (food: FoodNutrients) => void;
  Type: 'ADD' | 'DELETE';
}

function Food({ food,action,Type }: FoodProps ) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-2xl p-4 border dark:bg-gray-700">
    <div className="text-m
     font-semibold text-gray-900 d dark:text-gray-100 min-h-14">{food.FOOD_NM_KR}</div>
    
    <div className="text-xs text-gray-500 tracking-wide mt-1 dark:text-gray-300 min-h-4">
      {food.SERVING_SIZE && <>{food.SERVING_SIZE}당 {food.ENERGY_KCAL} 칼로리</>}
    </div>
    {Type === 'DELETE' && (
      <button 
        onClick={() => action(food)} 
        className="bg-red-500 text-white rounded-xl mt-4 w-full py-2 font-medium transition duration-300 hover:bg-red-600">
        삭제
      </button>
    )}
    {Type === 'ADD' && (
      <button 
        onClick={() => action(food)} 
        className="bg-green-500 text-white rounded-xl mt-4 w-full py-2 font-medium transition duration-300 hover:bg-green-600">
        추가
      </button>
    )}
  </div>

  );
}

export default Food;