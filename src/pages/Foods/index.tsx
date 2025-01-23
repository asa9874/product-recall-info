import { getProductRecallInfo } from "./apis/getProductRecallInfoApi"
import Headers from "./components/Headers"
import MainContainer from "./components/MainContainer"

function Foods() {
  //console.log(getProductRecallInfo())
  return (
    <div className="bg-neutral-300">
      <Headers />
      <MainContainer />
    </div>
  )
}

export default Foods
