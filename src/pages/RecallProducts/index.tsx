import CardContainer from "./components/CardContainer"
import Footer from "./components/Footer"
import Headers from "./components/Headers"
import ScrollToTopButton from "./components/ScrollToTopButton"


function RecallProducts() {
  return (
    <div className="bg-neutral-300">
      <Headers />
      <CardContainer />
      <ScrollToTopButton/>
      <Footer/>
    </div>
  )
}

export default RecallProducts
