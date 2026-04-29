import { Meal } from '@/storage/meals';
import { globalStyles } from '@/styles/global';
import { Text, View } from 'react-native';
import MealItem from './MealItem';
type RecentMealProps =
    {
        meals: Meal[];
        onDelete: () => void;
    }
//here we create one RecentMealProps 
export default function RecentMeals({ meals, onDelete }: RecentMealProps) {
    return (
        <View style={{ marginTop: 30 }}>
            <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
            {meals.length === 0 ? (<Text style={globalStyles.empty}> No meals logged yet</Text>) :
                (meals.slice(0, 5).map((meal) => (
                    <MealItem
                        id={meal.id}
                        key={meal.id}
                        name={meal.name}
                        calories={meal.calories}
                        protein={meal.protein}
                        carbs={meal.carbs}
                        fat={meal.fat}
                        onDelete={onDelete}
                    />


                )))
            }
        </View>
    );
}