import { useEffect, useState } from "react";
import { getFoodNutrient } from "../apis/getFoodNutrientApi";
import Food from "./Food";
import { NutrientsInfo } from "../types/NutrientsInfo";

function FoodsContainer() {
  const [FoodNutrients, setFoodNutrients] = useState<(NutrientsInfo )[] >([]); // 제품 데이터 타입 명시
  useEffect(() => {
    fetchFoodNutrient(0, "");
  }, []);

  const fetchFoodNutrient = async (currentPage: number, searchString: string) => {
    try {
      const data = await getFoodNutrient(currentPage, searchString);
      setFoodNutrients(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col w-2/4 bg-white h-full rounded-xl p-5 shadow-xl dark:bg-gray-800">
        <span className="text-xl font-bold ">음식</span>
        <form>
            <input type="text" className="w-full h-10 border-2 border-gray-200 rounded-lg p-2 mt-2" placeholder="음식,제품이름을 입력해주세요"/>
        </form>
        <div className="flex flex-col mt-2">
          {FoodNutrients.map((food, index) => (
            <Food key={index} food={food} />
          ))}
        </div>
    </div>
  );
}

export default FoodsContainer;