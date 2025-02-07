import { useState } from 'react';
import { FoodNutrients } from '../types/FoodNutrients';
import { motion } from 'framer-motion';
import { updateNutrients } from './NutrientsBody';

interface FoodProps {
  food: FoodNutrients;
  action: (food: FoodNutrients) => void;
  Type: 'ADD' | 'DELETE';
}

function Food({ food, action, Type }: FoodProps) {
  const [count, setCount] = useState(1);

  const handlecount = (actionName: string) => {
    if (actionName === 'plus') {
      setCount(count + 1);
      updateNutrients(food, 'add');
    } else {
      if (count === 1) {
        action(food);
      } else updateNutrients(food, 'delete');
      setCount(count - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative flex flex-col bg-white shadow-lg rounded-2xl p-4 border dark:bg-gray-700"
    >
      <div className="text- xl:text-m font-semibold text-gray-900 d dark:text-gray-100 xl:min-h-14">
        {food.FOOD_NM_KR}
      </div>
      <div className="text-xs text-gray-500 tracking-wide mt-1 dark:text-gray-300 min-h-4">
        {food.SERVING_SIZE && (
          <>
            {food.SERVING_SIZE}당 {food.ENERGY_KCAL} 칼로리
          </>
        )}
      </div>
      {Type === 'DELETE' && (
        <>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1.5 shadow-md justify-evenly">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handlecount('minus')}
              className="w-7 h-7 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-500 bg-white dark:bg-gray-700 rounded-full shadow-sm transition"
            >
              -
            </motion.button>

            <motion.span
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 text-center text-base text-gray-900 dark:text-gray-100 font-semibold"
            >
              {count}
            </motion.span>

            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => handlecount('plus')}
              className="w-7 h-7 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-green-500 bg-white dark:bg-gray-700 rounded-full shadow-sm transition"
            >
              +
            </motion.button>
          </div>
        </>
      )}
      {Type === 'ADD' && (
        <button
          onClick={() => action(food)}
          className="bg-green-500 text-white rounded-xl mt-4 w-full py-2 font-medium transition duration-300 hover:bg-green-600"
        >
          추가
        </button>
      )}
    </motion.div>
  );
}

export default Food;
