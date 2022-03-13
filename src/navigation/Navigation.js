import 'react-native-gesture-handler'
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen";
import Cart from "../screens/Cart";
import Locations from "../screens/Locations";
import Favourite from '../screens/Favourite'
import ProfileScreen from '../screens/ProfileScreen'
import {Feather} from '@expo/vector-icons'
import ProductScreen from "../screens/ProductScreen";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="Feed" component={HomeScreen}/>
        <Stack.Screen name="Product Screen" component={ProductScreen} />
    </Stack.Navigator>
  )
}

const TabNav = ()=> {
    return(
        <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        tabBarIconStyle:{
          marginBottom:-20,
        },
       
        tabBarStyle : {
          position: 'absolute', 
          backgroundColor: '#000000',
          height: 80,
          margin: 25,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.5,
          shadowRadius: 8.30,

          elevation: 13,
          },
        tabBarActiveTintColor: '#F9C123',
        tabBarInactiveTintColor: '#FFFFFF',
        headerShown:false,
        
      }}
      initialRouteName="Home"
      >
          
        <Tab.Screen 
          name='Home' 
          component={StackNavigation}
          options={{
            
            tabBarIcon: ({color}) => (
              <Feather name="home" color={color} size={24}/>
            ),
          }} 
        /> 
        <Tab.Screen 
         options={{
         
          tabBarIcon: ({color}) => (
            <Feather name="shopping-bag" color={color} size={24}/>
          ),
        }} 
        name='Cart' component={Cart}/> 
        <Tab.Screen
         options={{
          
          tabBarIcon: ({color}) => (
            <Feather name="map-pin" color={color} size={24}/>
          ),
        }} 
        name='Locations' component={Locations}/> 
        <Tab.Screen
         options={{
          tabBarIcon: ({color}) => (
            <Feather name="heart" color={color} size={24}/>
          ),
        }} 
        name='Favourite' component={Favourite}/> 
        <Tab.Screen
         options={{
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={24}/>
          ),
        }} 
        name='Profile Screen' component={ProfileScreen}/> 
      </Tab.Navigator>
    )
}

export default TabNav