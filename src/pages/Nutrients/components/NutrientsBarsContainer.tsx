import { useEffect, useState } from 'react';
import MeterBar from './MeterBar';
import { useNutrientStore } from '../context';

interface Nutrient {
    name: string;
    value: number;  
    max: number;    
}

function NutrientsBarsContainer() {
    const nutrientStore = useNutrientStore();

    const [nutrients, setNutrients] = useState<Nutrient[]>([]);

    useEffect(() => {
        setNutrients([
            { name: "에너지 (kcal)", value: nutrientStore.ENERGY_KCAL, max: 2600 },
            { name: "단백질 (g)", value: nutrientStore.PROTEIN_G, max: 65 },
            { name: "지방 (g)", value: nutrientStore.FAT_G, max: 87 },
            { name: "탄수화물 (g)", value: nutrientStore.CARBOHYDRATE_G, max: 325 },
            { name: "칼슘 (mg)", value: nutrientStore.CALCIUM_MG, max: 700 },
            { name: "철 (mg)", value: nutrientStore.IRON_MG, max: 10 },
            { name: "칼륨 (mg)", value: nutrientStore.POTASSIUM_MG, max: 3500 },
            { name: "나트륨 (mg)", value: nutrientStore.SODIUM_MG, max: 2000 },
            { name: "비타민 A (μg RAE)", value: nutrientStore.VITAMIN_A_UG_RAE, max: 900 },
            { name: "비타민 C (mg)", value: nutrientStore.VITAMIN_C_MG, max: 100 },
            { name: "비타민 D (μg)", value: nutrientStore.VITAMIN_D_UG, max: 10 },
            { name: "비타민 B1 (mg)", value: nutrientStore.VITAMIN_B1_MG, max: 1.2 },
            { name: "비타민 B2 (mg)", value: nutrientStore.VITAMIN_B2_MG, max: 1.3 },
            { name: "비타민 B6 (mg)", value: nutrientStore.VITAMIN_B6_MG, max: 1.3 },
            { name: "비타민 B12 (μg)", value: nutrientStore.VITAMIN_B12_UG, max: 2.4 },
            { name: "엽산 (DFE) (μg)", value: nutrientStore.FOLATE_DFE_UG, max: 400 },
            { name: "콜린 (mg)", value: nutrientStore.CHOLINE_MG, max: 550 },
            { name: "판토텐산 (mg)", value: nutrientStore.PANTOTHENIC_ACID_MG, max: 5 },
            { name: "니아신 (mg)", value: nutrientStore.NIACIN_MG, max: 16 },
            { name: "포화지방산 (g)", value: nutrientStore.SATURATED_FAT_G, max: 20 },
            { name: "콜레스테롤 (mg)", value: nutrientStore.CHOLESTEROL_MG, max: 300 },
            { name: "당류 (g)", value: nutrientStore.SUGARS_G, max: 50 },
            { name: "식이섬유 (g)", value: nutrientStore.DIETARY_FIBER_G, max: 25 },
        ]);
    }, [nutrientStore]);

    return (
        <div className="flex flex-col xl:w-1/4 h-[300px] xl:h-full bg-white rounded-xl p-5 shadow-xl dark:bg-gray-800 dark:text-white overflow-y-auto">
            <span className="text-xl font-bold">영양소</span>
            <div className="grid xl:grid-cols-2 md:grid-cols-5 grid-cols-2 gap-4 mt-4">
                {nutrients.map((nutrient, index) => (
                    <MeterBar key={index} now={nutrient.value} max={nutrient.max} name={nutrient.name} />
                ))}
            </div>
        </div>
    );
}

export default NutrientsBarsContainer;
