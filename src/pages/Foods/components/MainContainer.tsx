import { useEffect, useState } from "react";
import { getProductRecallInfo } from "../apis/getProductRecallInfoApi";
import Card from "./Card";
import { ProductRecallInfo } from "../types/ProductRecallInfo";

function MainContainer() {
  const [productData, setProductData] = useState<ProductRecallInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  // API 데이터 가져오기
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductRecallInfo();
        setProductData(data); // 데이터 상태 업데이트
        setLoading(false); // 로딩 완료
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다."); // 에러 상태 업데이트
        setLoading(false); // 로딩 완료
      }
    }
    fetchData();
  }, []);


  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>로딩 중입니다...</div>;
  }

  return (
    <div className="place-items-center">
      <div className="bg-neutral-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-3/4 place-items-center shadow-xl rounded-md mt-10 p-3 ">
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
      </div>
    </div>
  );
}

export default MainContainer;