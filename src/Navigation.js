import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import IngredientListScreen from './screens/IngredientListScreen';
import TortasScreen from './screens/TortasScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="IngredientList"
          component={IngredientListScreen}
          options={{ title: 'Lista de Ingredientes' }}
        />
        <Stack.Screen
          name="TortasScreen"
          component={TortasScreen}
          options={{ title: 'Tortas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





