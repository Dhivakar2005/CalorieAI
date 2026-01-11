import { motion } from "framer-motion";
import { Flame, Drumstick, Wheat, Droplets } from "lucide-react";

export interface NutritionData {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
}

interface NutritionResultsProps {
  data: NutritionData;
}

const NutritionResults = ({ data }: NutritionResultsProps) => {
  const nutrients = [
    {
      name: "Calories",
      value: data.calories,
      unit: "kcal",
      icon: Flame,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      name: "Protein",
      value: data.protein,
      unit: "g",
      icon: Drumstick,
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
    },
    {
      name: "Carbs",
      value: data.carbohydrates,
      unit: "g",
      icon: Wheat,
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      name: "Fat",
      value: data.fat,
      unit: "g",
      icon: Droplets,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
        Nutritional Breakdown
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {nutrients.map((nutrient, index) => (
          <motion.div
            key={nutrient.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-2xl ${nutrient.bgColor} p-5 shadow-soft`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className={`text-sm font-medium ${nutrient.textColor}`}>
                  {nutrient.name}
                </p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {nutrient.value}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {nutrient.unit}
                  </span>
                </p>
              </div>
              <div className={`p-2 rounded-xl bg-gradient-to-br ${nutrient.color}`}>
                <nutrient.icon className="w-5 h-5 text-white" />
              </div>
            </div>
            {/* Decorative background */}
            <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${nutrient.color} opacity-10 rounded-full`} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NutritionResults;
