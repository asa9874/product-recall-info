import { NutrientsInfo } from "../types/NutrientsInfo";

function Food({ food }: { food: NutrientsInfo }) {
  return (
    <div className="flex flex-col bg-gray-100 p-2 rounded-lg font-bold">
      <div className="text-xl">{food.FOOD_NM_KR}</div>
      <div className="text-xs text-gray-600">{food.SERVING_SIZE}당 {food.ENERGY_KCAL}칼로리</div>
    </div>
  );
}

export default Food;