import { FoodNutrients } from "../types/FoodNutrients";
import Food from "./Food";

interface SeletedFoodContainerProps {
    deleteFood: (food: FoodNutrients) => void;
    foods: FoodNutrients[];
}

function SeletedFoodContainer({ deleteFood, foods }: SeletedFoodContainerProps) {
    return(
    <div className="flex flex-col xl:w-1/4 h-[400px] xl:h-full bg-white  rounded-xl p-5 shadow-xl dark:bg-gray-800  overflow-y-auto">
        <span className="text-xl font-bold dark:text-white">담은 음식</span>
        <div className="grid grid-cols-2 gap-2 mt-2 xl:grid-cols-2 md:grid-cols-4 sm:grid-cols-2">
            {foods.map((food) => (
                <Food key={food.NUM} food={food} action={deleteFood} Type="DELETE"/>
            ))}
        </div>
    </div>
    )
}

export default SeletedFoodContainer;