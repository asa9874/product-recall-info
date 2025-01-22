import { getProductRecallInfo } from "./apis/getProductRecallInfoApi"

function Foods() {
  console.log(getProductRecallInfo())
  return (
    <>
      <div className="p-4 bg-blue-500 text-white">Hello World</div>
    </>
  )
}

export default Foods
