import Headers from "./components/Headers"
import CardContainer from "./components/CardContainer"
import Footer from "./components/Footer"
import CollapseMenu from "./components/CollapseMenu"

function Foods() {
  return (
    <div className="bg-neutral-300">
      <Headers />
      <CollapseMenu/>
      <CardContainer />
      <Footer/>
    </div>
  )
}

export default Foods
