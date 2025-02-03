import CardContainer from "./components/CardContainer"
import ScrollToTopButton from "./components/ScrollToTopButton"
import CollapseMenu from "./components/CollapseMenu"


function RecallProducts() {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800">
      <CollapseMenu />
      <CardContainer />
      <ScrollToTopButton/>
    </div>
  )
}

export default RecallProducts
