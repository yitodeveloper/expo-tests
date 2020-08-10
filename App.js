
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


// Screens
import HomeScreen from './src/screens/home'
import AccountScreen from './src/screens/account'
import MapScreen from './src/screens/maps'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;
            switch(route.name){
              case "Home": {
                iconName = focused? "home": "home-outline"
                break;
              }
              case "Account": {
                iconName = focused ? "account":"account-outline"
                break;
              }
              case "Maps": {
                iconName = focused ? "map":"map-outline"
                break;
              }
              default: {
                iconName = 'message'
              }
            }

            return <MaterialCommunityIcons name={iconName} color={color} size={size}/>
          }
        })}
      >
        <Tab.Screen 
          name="Home"
          component={HomeScreen}
          options={{title: "Inicio"}}
        />
        <Tab.Screen 
          name="Account"
          component={AccountScreen}
          options={{title: "Perfil"}}
        />
        <Tab.Screen 
          name="Maps"
          component={MapScreen}
          options={{title: "Mapa"}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

