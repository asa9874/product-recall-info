import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getFoodRecallInfo } from '../apis/getFoodRecallInfoApi';
import { useStore } from '../context';
import { FoodRecallInfo } from '../types/FoodRecallInfo';
import FoodCard from './card/FoodCard';
import LoadingCard from './card/LoadingCard';
import { getForeignFoodNoticeInfo } from '../apis/getForeignFoodRecallInfoApi';
import { ForeignFoodRecallInfo } from '../types/ForeignFoodRecallInfo';
import ForeignFoodCard from './card/ForeignFoodCard';
import { getMedicineNoticeInfo } from '../apis/getMedicineRecallInfoApi';
import { MedicineRecallInfo } from '../types/MedicineRecallInfo';
import MedicineCard from './card/MedicineCard';
import Searchbar from './Searchbar';
import Body from '../../../layout/Body';

function RecallProductsBody() {
  const [productData, setProductData] = useState<
    (FoodRecallInfo | ForeignFoodRecallInfo | MedicineRecallInfo)[]
  >([]); // 제품 데이터 타입 명시
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { searchString, selectedItem, page, setPage } = useStore();

  //TODO: 페이지 초기화버그 수정
  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(0);
    setProductData([]);
    setError(null);
    setLoading(true);
    setHasMore(true);
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
      let filteredData: (
        | FoodRecallInfo
        | ForeignFoodRecallInfo
        | MedicineRecallInfo
      )[] = [];

      if (selectedItem === '해외식품') {
        data = await getForeignFoodNoticeInfo(currentPage, searchString);
        filteredData = searchString
          ? data.filter((item) => item.TITL.includes(searchString))
          : data;
      } else if (selectedItem === '음식') {
        data = await getFoodRecallInfo(currentPage, searchString);
        filteredData = searchString
          ? data.filter((item) => item.PRDTNM.includes(searchString))
          : data;
      } else if (selectedItem === '의약품') {
        data = await getMedicineNoticeInfo(currentPage, searchString);
        filteredData = data;
      }

      if (filteredData.length === 0) {
        setHasMore(false);
      } else {
        setProductData((prevData) => [...prevData, ...filteredData]);
      }
      setLoading(false);
    } catch {
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-2xl text-red-500 dark:text-red-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>

        <a className="text-center px-4">{error}</a>
        <button
          className="mt-20 bg-emerald-50 dark:bg-emerald-800 text-black dark:text-white rounded-3xl w-4/5 h-12 sm:w-3/5 md:w-2/5 lg:w-1/4"
          onClick={() => window.location.reload()}
        >
          재접속
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-screen overflow-hidden bg-neutral-200 dark:bg-neutral-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:pl-20 xl:pr-20 gap-5 place-items-center shadow-xl rounded-md p-6 pt-60">
        {Array.from({ length: 20 }).map((_, index) => (
          <LoadingCard key={`loading-card-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <Body pt={20}>
      <Searchbar />
      <InfiniteScroll
        className="min-w-screen overflow-hidden bg-neutral-200 dark:bg-neutral-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:pl-20 xl:pr-20 gap-5  rounded-md p-6"
        dataLength={productData.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore && !searchString}
        loader={<LoadingCard key={`loading-card`} />}
        endMessage={
          <div className="text-gray-700 dark:text-gray-300">
            더 이상 데이터가 없습니다.
          </div>
        }
      >
        {productData.map((product) => (
          <>
            {selectedItem === '해외식품' && 'NTCTXT_NO' in product && (
              <ForeignFoodCard key={product.NTCTXT_NO} product={product} />
            )}
            {selectedItem === '음식' && 'PRDLST_REPORT_NO' in product && (
              <FoodCard key={product.PRDLST_REPORT_NO} product={product} />
            )}
            {selectedItem === '의약품' && 'ITEM_SEQ' in product && (
              <MedicineCard key={product.ITEM_SEQ} product={product} />
            )}
          </>
        ))}
      </InfiniteScroll>
    </Body>
  );
}

export default RecallProductsBody;
