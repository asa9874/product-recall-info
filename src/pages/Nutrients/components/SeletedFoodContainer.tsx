import { FoodNutrients } from "../types/FoodNutrients";
import Food from "./Food";

interface SeletedFoodContainerProps {
    deleteFood: (food: FoodNutrients) => void;
    foods: FoodNutrients[];
}

function SeletedFoodContainer({ deleteFood, foods }: SeletedFoodContainerProps) {
    return(
    <div className="flex flex-col xl:w-1/4 h-1/4 xl:h-full bg-white  rounded-xl p-5 shadow-xl dark:bg-gray-800  overflow-y-auto">
        <span className="text-xl font-bold ">담은 음식</span>
        {foods.map((food, index) => (
            <Food key={index} food={food} action={deleteFood} Type="DELETE"/>
        ))}
    </div>
    )
}

export default SeletedFoodContainer;