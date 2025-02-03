import { motion } from "framer-motion";

function MeterBar({ now, max }: { now: number; max: number }) {
  const Percent = (now / max) * 100;

  const getHpColor = () => {
    if (Percent <= 30) return "bg-red-500";   // 0~30% 빨강
    if (Percent <= 70) return "bg-yellow-500"; // 31~70% 노랑
    return "bg-green-500"; // 71~100% 초록
  };

  return (
    <div className="w-full h-6 bg-gray-600 rounded-lg overflow-hidden">
      <motion.div
        className={`h-full ${getHpColor()}`} // 색상 동적 적용
        initial={{ width: "100%" }}
        animate={{ width: `${Percent}%` }} // 체력 값에 따라 길이 변경
        transition={{ duration: 0.3, ease: "easeInOut" }} // 부드러운 애니메이션
      />
    </div>
  );
}

export default MeterBar;
