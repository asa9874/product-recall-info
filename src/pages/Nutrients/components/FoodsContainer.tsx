import { useEffect } from "react";
import { getFoodNutrient } from "../apis/getFoodNutrientApi";

function FoodsContainer() {
  useEffect(() => {
    getFoodNutrient(0,"");
  }, []);
  return (
    <div className="flex flex-col w-1/3 bg-white h-full rounded-xl p-5 shadow-xl dark:bg-gray-800">
        <span className="text-xl font-bold ">음식</span>
    </div>
  );
}

export default FoodsContainer;