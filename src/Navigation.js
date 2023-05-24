import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IngredientListScreen from './screens/IngredientListScreen';
import IngredientFormScreen from './screens/IngredientFormScreen';
import TortasScreen from './screens/TortasScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IngredientList"
          component={IngredientListScreen}
          options={{ title: 'Lista de Ingredientes' }}
        />
        <Stack.Screen
          name="IngredientForm"
          component={IngredientFormScreen}
          options={{ title: 'ABM de Ingredientes' }}
        />
      
      <Stack.Screen
          name="TortasScreen"
          component={TortasScreen}
          options={{ title: 'ABM de Tortas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;




