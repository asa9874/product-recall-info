import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getFoodNutrient } from "../apis/getFoodNutrientApi";
import Food from "./Food";
import { FoodNutrients } from "../types/FoodNutrients";

interface Props {
  addFood: (newFood: FoodNutrients) => void;
}

function FoodsContainer({ addFood }: Props) {
  const [foodNutrients, setFoodNutrients] = useState<FoodNutrients[]>([]);
  const [searchString, setSearchString] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setFoodNutrients([]);
    setPage(0);
    setHasMore(true);
  }, [searchString]);

  useEffect(() => {
    fetchFoodNutrient(page, searchString);
  }, [page]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchString(inputValue);
  };

  const fetchFoodNutrient = async (currentPage: number, searchString: string) => {
    if (!hasMore) return;
    setLoading(true);
    setError(null);
    try {
      const data = await getFoodNutrient(currentPage, searchString);
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setFoodNutrients((prevData) => [...prevData, ...data]);
      }
    } catch (error) {
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col xl:w-2/4 bg-white h-1/4 xl:h-full rounded-xl p-5 shadow-xl dark:bg-gray-800 dark:text-white">
      <span className="text-xl font-bold">음식</span>
      <form onSubmit={handleSearch} className="mt-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-10 border-2 border-gray-200 rounded-lg p-2 dark:bg-gray-900"
          placeholder="음식, 제품 이름을 입력해주세요"
        />
      </form>
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      <div id="scrollableDiv" className="h-full overflow-y-auto">
        <InfiniteScroll
          dataLength={foodNutrients.length}
          next={() => setPage((prev) => prev + 1)}
          hasMore={hasMore}
          loader={<p className="mt-4 text-center">로딩 중...</p>}
          endMessage={<p className="mt-4 text-center">더 이상 데이터가 없습니다.</p>}
          scrollableTarget="scrollableDiv"
        >
          <div className="grid xl:grid-cols-4 md:grid-cols-5 grid-cols-4 gap-4 mt-4">
            {foodNutrients.map((food) => (
              <Food key={food.id} food={food} action={addFood} Type="ADD" />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default FoodsContainer;
