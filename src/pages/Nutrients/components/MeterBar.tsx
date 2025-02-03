import { motion } from "framer-motion";

function MeterBar({ now, max,name }: { now: number; max: number; name: string }) {
  const Percent = (now / max) * 100;

  const getHpColor = () => {
    if (Percent <= 30) return "bg-red-500";   // 0~30% 빨강
    if (Percent <= 70) return "bg-yellow-500"; // 31~70% 노랑
    return "bg-green-500"; // 71~100% 초록
  };

  return (
    <>
      <span className="text-sm font-bold mt-5">
        {`${name}: ${now} / ${max}`}
      </span>
      <div className="w-full h-6 bg-gray-600 rounded-lg overflow-hidden bg-opacity-50">
        <motion.div
          className={`h-full ${getHpColor()}`} 
          initial={{ width: "100%" }}
          animate={{ width: `${Percent}%` }} 
          transition={{ duration: 0.3, ease: "easeInOut" }} 
        />
      </div>
    </>
  );
}

export default MeterBar;
