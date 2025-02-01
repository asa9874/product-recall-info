import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { getFoodRecallInfo } from "../apis/getFoodRecallInfoApi";
import { useStore } from '../context';
import { FoodRecallInfo } from "../types/FoodRecallInfo";
import FoodCard from "./card/FoodCard";
import LoadingCard from "./card/LoadingCard";
import { getForeignFoodNoticeInfo } from '../apis/getForeignFoodRecallInfoApi';
import { ForeignFoodRecallInfo } from '../types/ForeignFoodRecallInfo';
import ForeignFoodCard from './card/ForeignFoodCard';
import { getMedicineNoticeInfo } from '../apis/getMedicineRecallInfoApi';
import { MedicineRecallInfo } from '../types/MedicineRecallInfo';
import MedicineCard from './card/MedicineCard';

function CardContainer() {
  const [productData, setProductData] = useState<(FoodRecallInfo | ForeignFoodRecallInfo | MedicineRecallInfo)[] >([]); // 제품 데이터 타입 명시
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { searchString, selectedItem, page, setPage} = useStore();
  const [retryCount, setRetryCount] = useState<number>(0); // 오류 재시도 횟수 관리

  //TODO: 페이지 초기화버그 수정
  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(0);  
    setProductData([]);  
    setError(null); 
    setLoading(true);
    setHasMore(true); 
    setRetryCount(0); 
    fetchData(0);
  }, [searchString, selectedItem]);

  useEffect(() => {
    if (page > 0) {
      fetchData(page);
    }
  }, [page]);

  // API 데이터 가져오기
  const fetchData = async (currentPage: number) => {
    try {
      let data;
      let filteredData: (FoodRecallInfo | ForeignFoodRecallInfo | MedicineRecallInfo)[] = [];
      // 데이터 분기점 추가
      if (selectedItem === "해외식품") {
        data = await getForeignFoodNoticeInfo(currentPage, searchString);
        filteredData = searchString
          ? data.filter((item) => item.TITL.includes(searchString)) // TITL에 searchString이 포함된 항목만
          : data;
      } else if (selectedItem === "음식") {
        data = await getFoodRecallInfo(currentPage, searchString);
        //console.log(data);
        filteredData = searchString
          ? data.filter((item) => item.PRDTNM.includes(searchString)) // PRDTNM에 searchString이 포함된 항목만
          : data;
      }else if (selectedItem === "의약품") {
        data = await getMedicineNoticeInfo(currentPage, searchString);
        filteredData= data;
        console.log(data);
      }else {
        data = await getFoodRecallInfo(currentPage, searchString);
        filteredData = data; // 기본값
      }

      if (filteredData.length === 0) {
        setHasMore(false); // 더 이상 데이터가 없으면 종료
      } else {
        setProductData((prevData) => [...prevData, ...filteredData]); // 기존 데이터에 새로운 데이터를 추가
      }
      setLoading(false);
      setRetryCount(0);
    } catch (err) {
      if (retryCount < 3) {
        console.log("retryCount: ", retryCount,err);
        setRetryCount(retryCount + 1); 
        fetchData(currentPage); 
      } else {
        setError("데이터를 불러오는 중 오류가 발생했습니다. " + err);
        setLoading(false);
      }
    }
  };

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-2xl text-red-500">
        <ExclamationTriangleIcon className="h-1/4 w-1/4 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32" />
        <a className="text-center px-4">{error}</a>
        <button className="mt-20 bg-emerald-50 text-black rounded-3xl w-4/5 h-12 sm:w-3/5 md:w-2/5 lg:w-1/4" onClick={() => window.location.reload()}>재접속</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-neutral-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 place-items-center shadow-xl rounded-md p-6 pt-20">
        {Array.from({ length: 20 }).map((_, index) => (
          <LoadingCard key={`loading-card-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex w-full">
      <InfiniteScroll
        className="max-w-screen overflow-hidden bg-neutral-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 place-items-center shadow-xl rounded-md p-6 pt-20"
        dataLength={productData.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore && !searchString}
        loader={<LoadingCard key={`loading-card`} />}
        endMessage={<div>더 이상 데이터가 없습니다.</div>}
      >
        {productData.map((product) => (
          <>
            {selectedItem === "해외식품" && (
              ('NTCTXT_NO' in product) && (
                <ForeignFoodCard key={product.NTCTXT_NO} product={product} />
              )
            )}
        
            {selectedItem === "음식" && (
               ('PRDLST_REPORT_NO' in product) && (
                <FoodCard key={product.PRDLST_REPORT_NO} product={product} />
              )
            )}

            {selectedItem === "의약품" && (
               ('ITEM_SEQ' in product) && (
                <MedicineCard key={product.ITEM_SEQ} product={product} />
              )
            )}
          </>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default CardContainer;
