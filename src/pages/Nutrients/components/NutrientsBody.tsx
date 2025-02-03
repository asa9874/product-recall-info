import Body from "../../../layout/Body";
import MeterBar from "./MeterBar";

const NutrientsBody = () => {

  return (
    <Body pt={20}>
      <div className="flex gap-8 p-10 h-full">
        <div className="flex flex-col w-1/3 bg-white h-full rounded-xl p-5 shadow-xl dark:bg-gray-800 dark:text-white ">
          <span className="text-xl font-bold ">영양소</span>
          <MeterBar now={80} max={100} name="비타민"/>
          <MeterBar now={10} max={100} name="다이아"/>
          <MeterBar now={20} max={100} name="골드"/>
        </div>
        <div className="flex flex-col w-1/3 bg-white h-full rounded-xl p-5 shadow-xl dark:bg-gray-800">
          <span className="text-xl font-bold ">음식</span>
        </div>
        <div className="flex flex-col w-1/3 bg-white h-full rounded-xl p-5 shadow-xl dark:bg-gray-800">
          <span className="text-xl font-bold ">담은 음식</span>
        </div>
      </div>
    </Body>
  );
};

export default NutrientsBody;
