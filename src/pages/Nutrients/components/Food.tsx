import { NutrientsInfo } from "../types/NutrientsInfo";

function Food({ food }: { food: NutrientsInfo }) {
  return (
    <div>
      <h3>{food.FOOD_NM_KR}</h3>
      <p>{food.ENERGY_KCAL}칼로리</p>
    </div>
  );
}

export default Food;