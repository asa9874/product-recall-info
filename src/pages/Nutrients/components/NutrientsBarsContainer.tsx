import React, { useState } from 'react';
import MeterBar from './MeterBar';

interface Nutrient {
    name: string;
    value: number; // 영양소 값 (예: 80, 10, 20 등)
    max: number;   // 최대값 (예: 100)
}

function NutrientsBarsContainer() {
    // NutrientsInfo 인터페이스를 기반으로 영양소 데이터 설정
    const [nutrients, setNutrients] = useState<Nutrient[]>([
        { name: '에너지 (kcal)', value: 0, max: 100 },
        { name: '수분 (g)', value: 0, max: 100 },
        { name: '단백질 (g)', value: 0, max: 100 },
        { name: '지방 (g)', value: 0, max: 100 },
        { name: '지질-가식부 (g)', value: 0, max: 100 },
        { name: '회분 (g)', value: 0, max: 100 },
        { name: '탄수화물 (g)', value: 0, max: 100 },
        { name: '당류 (g)', value: 0, max: 100 },
        { name: '식이섬유 (g)', value: 0, max: 100 },
        { name: '칼슘 (mg)', value: 0, max: 100 },
        { name: '철 (mg)', value: 0, max: 100 },
        { name: '인 (mg)', value: 0, max: 100 },
        { name: '칼륨 (mg)', value: 0, max: 100 },
        { name: '나트륨 (mg)', value: 0, max: 100 },
        { name: '비타민 A (μg RAE)', value: 0, max: 100 },
        { name: '비타민 C (mg)', value: 0, max: 100 },
        { name: '비타민 D (μg)', value: 0, max: 100 },
        { name: '콜레스테롤 (mg)', value: 0, max: 100 },
        { name: '포화지방산 (g)', value: 0, max: 100 },
        { name: '트랜스지방산 (g)', value: 0, max: 100 },
        { name: '니코틴산 (mg)', value: 0, max: 100 },
        { name: '비타민 B1 (mg)', value: 0, max: 100 },
        { name: '비타민 B2 (mg)', value: 0, max: 100 },
        { name: '니아신 (mg)', value: 0, max: 100 },
        { name: '비타민 B6 (mg)', value: 0, max: 100 },
        { name: '비타민 B12 (μg)', value: 0, max: 100 },
        { name: '엽산 (DFE) (μg)', value: 0, max: 100 },
        { name: '콜린 (mg)', value: 0, max: 100 },
        { name: '판토텐산 (mg)', value: 0, max: 100 },
        { name: '비타민 D2 (μg)', value: 0, max: 100 },
        { name: '비타민 D3 (μg)', value: 0, max: 100 },
    ]);

    return (
        <div className="flex flex-col w-1/4 bg-white h-full rounded-xl p-5 shadow-xl dark:bg-gray-800 dark:text-white overflow-y-auto">
            <span className="text-xl font-bold">영양소</span>
            {/* nutrients 배열을 순회하며 MeterBar 컴포넌트 생성 */}
            {nutrients.map((nutrient, index) => (
                <MeterBar key={index} now={nutrient.value} max={nutrient.max} name={nutrient.name} />
            ))}
        </div>
    );
}

export default NutrientsBarsContainer;
