import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { getFoodRecallInfo } from "../apis/getFoodRecallInfoApi";
import { useStore } from '../context';
import { FoodRecallInfo } from "../types/FoodRecallInfo";
import FoodCard from "./card/FoodCard";
import LoadingCard from "./card/LoadingCard";

function CardContainer() {
  const [productData, setProductData] = useState<FoodRecallInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { searchString,selectedItem } = useStore();

  //TODO: 페이지 초기화버그 수정
  useEffect(() => {
    setPage(0);  
    setProductData([]);  
    setError(null); 
    setLoading(true)
    setHasMore(true); 
    fetchData()
  }, [searchString,selectedItem]);   


  // API 데이터 가져오기
  const fetchData = async () => {
    try {
      //TODO: 여기에 데이터분기점 추가하기
      const data = await getFoodRecallInfo(page,searchString); // 페이지 번호를 API에 전달
      const filteredData = searchString
        ? data.filter((item) => item.PRDTNM.includes(searchString)) // PRDTNM에 searchString이 포함된 항목만
        : data;
      if (filteredData.length === 0) {
        setHasMore(false); // 더 이상 데이터가 없으면 종료
      } else {
        setProductData((prevData) => [...prevData, ...filteredData]); // 기존 데이터에 새로운 데이터를 추가
        setPage((prevPage) => prevPage + 1); // 페이지 번호 증가
      }
      setLoading(false);
    } catch (err) {
      setError("데이터를 불러오는 중 오류가 발생했습니다. "+err);
      setLoading(false);
    }
  };

  if (error) {
    return(
      <div className="h-screen flex flex-col items-center justify-center text-2xl text-red-500">
      <ExclamationTriangleIcon className="h-1/4 w-1/4 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32" />
      <a className="text-center px-4">{error}</a>
      <button className="mt-20 bg-emerald-50 text-black rounded-3xl w-4/5 h-12 sm:w-3/5 md:w-2/5 lg:w-1/4" onClick={() => window.location.reload()}>재접속</button>
    </div>
    );
  }

  if (loading) {
    return(
      <div className="bg-neutral-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10  place-items-center shadow-xl rounded-md p-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <LoadingCard key={`loading-card-${index}`} />
        ))}
      </div>
    ) 
  }

  return (
    <div className="flex w-full">
      <InfiniteScroll
          className="w-screen bg-neutral-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10  place-items-center shadow-xl rounded-md p-6"
          dataLength={productData.length}
          next={fetchData}
          hasMore={hasMore && !searchString}
          loader={ <LoadingCard key={`loading-card`} />}
          endMessage={<div>더 이상 데이터가 없습니다.</div>}
      >
        {productData.map((product) => (
          //TODO: 이부분 카드 종류별로 나누고 분기점 나누기
          <FoodCard key={product.PRDLST_REPORT_NO} product={product} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default CardContainer;