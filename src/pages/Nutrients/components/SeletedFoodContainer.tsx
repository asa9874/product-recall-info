import { FoodNutrients } from "../types/FoodNutrients";
import Food from "./Food";

interface SeletedFoodContainerProps {
    deleteFood: (food: FoodNutrients) => void;
    foods: FoodNutrients[];
}

function SeletedFoodContainer({ deleteFood, foods }: SeletedFoodContainerProps) {
    return(
    <div className="flex flex-col w-1/4 bg-white h-full rounded-xl p-5 shadow-xl dark:bg-gray-800">
        <span className="text-xl font-bold ">담은 음식</span>
        {foods.map((food, index) => (
            <Food key={index} food={food} action={deleteFood} Type="DELETE"/>
        ))}
    </div>
    )
}

export default SeletedFoodContainer;