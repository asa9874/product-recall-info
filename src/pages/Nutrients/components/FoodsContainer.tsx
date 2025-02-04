import { useEffect, useState } from "react";
import { getFoodNutrient } from "../apis/getFoodNutrientApi";
import Food from "./Food";
import { FoodNutrients } from "../types/FoodNutrients";

interface Props {
  addFood: (newFood: FoodNutrients) => void;
}


function FoodsContainer({ addFood }: Props) {
  const [FoodNutrients, setFoodNutrients] = useState<(FoodNutrients )[] >([]); // 제품 데이터 타입 명시
  const [ searchString, setSearchString ] = useState(""); // zustand store에서 값 가져오기
  const [inputValue, setInputValue] = useState(searchString); // 입력값 state 관리
  useEffect(() => {
    fetchFoodNutrient(0, searchString);
  }, [searchString]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchString(inputValue); 
  };

  const fetchFoodNutrient = async (currentPage: number, searchString: string) => {
    try {
      const data = await getFoodNutrient(currentPage, searchString);
      setFoodNutrients(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col xl:w-2/4 bg-white h-1/4 xl:h-full rounded-xl p-5 shadow-xl dark:bg-gray-800 overflow-y-auto dark:text-white">
        <span className="text-xl font-bold ">음식</span>
        <form onSubmit={handleSearch}>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full h-10 border-2 border-gray-200 rounded-lg p-2 mt-2 dark:bg-gray-900" 
              placeholder="음식,제품이름을 입력해주세요"
            />
        </form>
        <div className="grid xl:grid-cols-4 md:grid-cols-5 grid-cols-4 gap-4 mt-4">
          {FoodNutrients.map((food, index) => (
            <Food key={index} food={food} action={addFood} Type='ADD'/>
          ))}
        </div>
    </div>
  );
}

export default FoodsContainer;