import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../views/homeScreen';
import IngredientListScreen from '../views/IngredientListScreen';
import TortasScreen from '../views/TortasScreen';
import styles from '../styles/styles';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#86C997',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        style: {
          backgroundColor: '#86C997',
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        },
        showIcon: true,
        showLabel: true,
        tabStyle: {
          flexDirection: 'row',
        },
        indicatorStyle: {
          backgroundColor: '#86C997',
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="IngredientList"
        component={IngredientListScreen}
        options={{
          tabBarLabel: 'Ingredientes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tortas"
        component={TortasScreen}
        options={{
          tabBarLabel: 'Tortas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cake" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;











