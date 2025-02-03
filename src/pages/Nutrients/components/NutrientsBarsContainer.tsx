import React, { useState } from 'react';
import MeterBar from './MeterBar';

interface Nutrient {
    name: string;
    value: number;  
    max: number;    
}

function NutrientsBarsContainer() {
    
    const [nutrients, setNutrients] = useState<Nutrient[]>([
        { name: '에너지 (kcal)', value: 0, max: 2600 },
        { name: '단백질 (g)', value: 0, max: 65 },
        { name: '지방 (g)', value: 0, max: 87 },
        { name: '탄수화물 (g)', value: 0, max: 325 },
        { name: '칼슘 (mg)', value: 0, max: 700 },
        { name: '철 (mg)', value: 0, max: 10 },
        { name: '칼륨 (mg)', value: 0, max: 3500 },
        { name: '나트륨 (mg)', value: 0, max: 2000 },
        { name: '비타민 A (μg RAE)', value: 0, max: 900 },
        { name: '비타민 C (mg)', value: 0, max: 100 },
        { name: '비타민 D (μg)', value: 0, max: 10 },
        { name: '비타민 B1 (mg)', value: 0, max: 1.2 },
        { name: '비타민 B2 (mg)', value: 0, max: 1.3 },
        { name: '비타민 B6 (mg)', value: 0, max: 1.3 },
        { name: '비타민 B12 (μg)', value: 0, max: 2.4 },
        { name: '엽산 (DFE) (μg)', value: 0, max: 400 },
        { name: '콜린 (mg)', value: 0, max: 550 },
        { name: '판토텐산 (mg)', value: 0, max: 5 },
        { name: '니아신 (mg)', value: 0, max: 16 },
        { name: '포화지방산 (g)', value: 0, max: 20 },
        { name: '콜레스테롤 (mg)', value: 0, max: 300 },
        { name: '당류 (g)', value: 0, max: 50 },
        { name: '식이섬유 (g)', value: 0, max: 25 },
    ]);

    return (
        <div className="flex flex-col w-1/4 bg-white h-full rounded-xl p-5 shadow-xl dark:bg-gray-800 dark:text-white overflow-y-auto">
            <span className="text-xl font-bold">영양소</span>
            {nutrients.map((nutrient, index) => (
                <MeterBar key={index} now={nutrient.value} max={nutrient.max} name={nutrient.name} />
            ))}
        </div>
    );
}

export default NutrientsBarsContainer;
