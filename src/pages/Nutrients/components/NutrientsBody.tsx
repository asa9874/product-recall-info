import Body from "../../layout/Body";
import MeterBar from "./MeterBar";

const NutrientsBody = () => {

  return (
    <Body pt={20}>
      <div className="flex gap-8 p-10 h-full">
        <div className="flex flex-col gap-4 w-1/3 bg-black h-full rounded-xl p-5">
          <MeterBar now={80} max={100} />
          <MeterBar now={10} max={100} />
          <MeterBar now={20} max={100} />
        </div>
        <div className="flex flex-col gap-4 w-1/3 bg-black h-full rounded-xl p-5">
          <MeterBar now={80} max={100} />
          <MeterBar now={10} max={100} />
          <MeterBar now={20} max={100} />
        </div>
        <div className="flex flex-col gap-4 w-1/3 bg-black h-full rounded-xl p-5">
          <MeterBar now={80} max={100} />
          <MeterBar now={10} max={100} />
          <MeterBar now={20} max={100} />
        </div>
      </div>
    </Body>
  );
};

export default NutrientsBody;
