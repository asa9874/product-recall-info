import CardContainer from "./components/CardContainer"
import Footer from "../Base/Footer"
import Headers from "../Base/Headers"
import ScrollToTopButton from "./components/ScrollToTopButton"
import CollapseMenu from "./components/CollapseMenu"


function RecallProducts() {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800">
      <Headers />
      <CollapseMenu />
      <CardContainer />
      <ScrollToTopButton/>
      <Footer/>
    </div>
  )
}

export default RecallProducts
