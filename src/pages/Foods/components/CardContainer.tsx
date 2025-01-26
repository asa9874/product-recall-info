import { useEffect, useState } from "react";
import { getProductRecallInfo } from "../apis/getProductRecallInfoApi";
import Card from "./Card";
import { ProductRecallInfo } from "../types/ProductRecallInfo";
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingCard from "./LoadingCard";

function CardContainer() {
  const [productData, setProductData] = useState<ProductRecallInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  // API 데이터 가져오기
  const fetchData = async () => {
    try {
      const data = await getProductRecallInfo(page); // 페이지 번호를 API에 전달
      if (data.length === 0) {
        setHasMore(false); // 더 이상 데이터가 없으면 종료
      } else {
        setProductData((prevData) => [...prevData, ...data]); // 기존 데이터에 새로운 데이터를 추가
        setPage((prevPage) => prevPage + 1); // 페이지 번호 증가
      }
      setLoading(false);
    } catch (err) {
      setError("데이터를 불러오는 중 오류가 발생했습니다."+err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // 첫 로딩 시 데이터 가져오기
  }, []);
 

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return(
      <div className="bg-neutral-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10  place-items-center shadow-xl rounded-md p-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <LoadingCard key={`loading-card-${index}`} />
        ))}
      </div>
    ) 
  }

  return (
    <div className="flex">
      <InfiniteScroll
          className=" bg-neutral-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10  place-items-center shadow-xl rounded-md p-4 pr-20 pl-20"
          dataLength={productData.length}
          next={fetchData}
          hasMore={hasMore}
          loader={ <LoadingCard key={`loading-card`} />}
          endMessage={<div>더 이상 데이터가 없습니다.</div>}
      >
        {productData.map((product) => (
          <Card key={product.PRDLST_REPORT_NO} product={product} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default CardContainer;