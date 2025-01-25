import { useEffect, useState } from "react";
import { getProductRecallInfo } from "../apis/getProductRecallInfoApi";
import Card from "./Card";
import { ProductRecallInfo } from "../types/ProductRecallInfo";
import InfiniteScroll from 'react-infinite-scroll-component';

function MainContainer() {
  const [productData, setProductData] = useState<ProductRecallInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const [page, setPage] = useState<number>(1);
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
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // 첫 로딩 시 데이터 가져오기
  }, []);


  useEffect(() => {
    fetchData(); // 첫 로딩 시 데이터 가져오기
  }, []);


  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>로딩 중입니다...</div>;
  }

  return (
    <div className="place-items-center">
      <InfiniteScroll
          className="bg-neutral-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  place-items-center shadow-xl rounded-md p-5 "
          dataLength={productData.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<div>로딩 중...</div>}
          endMessage={<div>더 이상 데이터가 없습니다.</div>}
      >
        {productData.map((product) => (
          <Card
            key={product.PRDLST_REPORT_NO}
            CRET_DTM={product.CRET_DTM}
            RTRVL_GRDCD_NM={product.RTRVL_GRDCD_NM}
            IMG_FILE_PATH={product.IMG_FILE_PATH}
            PRDTNM={product.PRDTNM}
            RTRVLPRVNS={product.RTRVLPRVNS}
          />
          ))}
      </InfiniteScroll>
    </div>
  );
}

export default MainContainer;