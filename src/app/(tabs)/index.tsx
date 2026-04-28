import MacroGrid from '@/components/Macrogrid';
import RecentMeals from '@/components/RecentMeal';
import { globalStyles } from '@/styles/global';
import { ScrollView, Text } from 'react-native';
import Homeheader from '../../components/Homeheader';
export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <Homeheader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView >
  );
}

