import { motion } from "framer-motion";
import { Flame, Drumstick, Wheat, Droplets, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export interface FoodItem {
  name: string;
  quantity: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface NutritionData {
  status: string;
  food: FoodItem[];
  total: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

interface NutritionResultsProps {
  data: NutritionData;
}

const NutritionResults = ({ data }: NutritionResultsProps) => {
  const [showDetails, setShowDetails] = useState(true);

  const totals = [
    {
      name: "Calories",
      value: data.total.calories,
      unit: "kcal",
      icon: Flame,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      name: "Protein",
      value: data.total.protein,
      unit: "g",
      icon: Drumstick,
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      textColor: "text-rose-600",
    },
    {
      name: "Carbs",
      value: data.total.carbs,
      unit: "g",
      icon: Wheat,
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      name: "Fat",
      value: data.total.fat,
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
      className="w-full space-y-6"
    >
      {/* Total Summary */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
          Total Nutritional Value
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {totals.map((nutrient, index) => (
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
              <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${nutrient.color} opacity-10 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Food Items Breakdown */}
      {data.food && data.food.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft"
        >
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
          >
            <span className="font-semibold text-foreground">
              Food Breakdown ({data.food.length} items)
            </span>
            {showDetails ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>

          {showDetails && (
            <div className="border-t border-border">
              <div className="divide-y divide-border">
                {data.food.map((item, index) => (
                  <motion.div
                    key={`${item.name}-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="p-4 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{item.calories} kcal</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs">
                      <span className="px-2 py-1 rounded-full bg-rose-100 text-rose-700">
                        P: {item.protein}g
                      </span>
                      <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                        C: {item.carbs}g
                      </span>
                      <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                        F: {item.fat}g
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default NutritionResults;
