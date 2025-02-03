import Body from "../../../layout/Body";
import FoodsContainer from "./FoodsContainer";
import NutrientsBarsContainer from "./NutrientsBarsContainer";
import SeletedFoodContainer from "./SeletedFoodContainer";

const NutrientsBody = () => {
  return (
    <Body pt={20}>
      <div className="flex gap-8 p-10 h-full">
        <NutrientsBarsContainer/>
        <FoodsContainer/>
        <SeletedFoodContainer/>
      </div>
    </Body>
  );
};

export default NutrientsBody;
