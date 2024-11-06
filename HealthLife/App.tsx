import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/HomeScreens';
import SummaryScreen from './app/SumaryScreen';
import CategoriesScreen from './app/CategoriesScreen';
import MenstrualCycleScreen from './app/MenstrualCycleScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="MenstrualCycle" component={MenstrualCycleScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
