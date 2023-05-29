import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from './screens/homeScreen';
import IngredientListScreen from './screens/IngredientListScreen';
import TortasScreen from './screens/TortasScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ tintColor }) => <Entypo name="home" size={24} color={tintColor} />,
      },
    },
    IngredientList: {
      screen: IngredientListScreen,
      navigationOptions: {
        tabBarLabel: 'Ingredientes',
        tabBarIcon: ({ tintColor }) => <Entypo name="list" size={24} color={tintColor} />,
      },
    },
    TortasScreen: {
      screen: TortasScreen,
      navigationOptions: {
        tabBarLabel: 'Tortas',
        tabBarIcon: ({ tintColor }) => <Entypo name="cake" size={24} color={tintColor} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#86C997',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      style: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
    },
  }
);

export default createAppContainer(TabNavigator);






