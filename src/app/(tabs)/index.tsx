import MacroGrid from '@/components/Macrogrid';
import RecentMeals from '@/components/RecentMeal';
import ShareButton from '@/components/ShareButton';
import { getMeals, Meal } from '@/storage/meals';
import { globalStyles } from '@/styles/global';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import Homeheader from '../../components/Homeheader';
export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log("Meal set successfully");
  }
  useFocusEffect(useCallback(() => {
    loadMeals();
  }, []));
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <ShareButton meals={meals} />
      <Homeheader />
      <MacroGrid meals={meals} />
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView >
  );
}

