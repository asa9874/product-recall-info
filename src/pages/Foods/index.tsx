import CardContainer from "./components/CardContainer"
import CollapseMenu from "./components/CollapseMenu"
import Footer from "./components/Footer"
import Headers from "./components/Headers"


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
