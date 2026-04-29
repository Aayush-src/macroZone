import MealItem from "@/components/MealItem";
import { clearAllMeals, getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
export default function MealsScreen() {
    const [meals, setMeals] = useState<Meal[]>([]);
    const loadMeal = async () => {
        const data = await getMeals();
        setMeals(data);
    }
    const handleClearAll = async () => {
        await clearAllMeals();
        loadMeal();
    }
    useFocusEffect(useCallback((() => { loadMeal(); }), []));
    return (<ScrollView style={globalStyles.container}>
        <Text style={globalStyles.title} > All meals</Text>
        <TouchableOpacity onPress={handleClearAll}>
            <Text style={styles.clearButton}>Clear All</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 30 }}>
            {meals.length === 0 ? (
                <Text style={globalStyles.empty}>No meals logged yet.</Text>
            ) : (
                meals.map((meal) => (
                    <MealItem
                        key={meal.id}
                        id={meal.id}
                        name={meal.name}
                        calories={meal.calories}
                        protein={meal.protein}
                        carbs={meal.carbs}
                        fat={meal.fat}
                        onDelete={loadMeal}
                    />
                ))
            )}
        </View>
    </ScrollView>)
}
const styles = {
    clearButton: {
        color: 'red',
        fontSize: 16,
    },
};