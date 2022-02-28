import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens Import
import HomeScreen from './src/screens/HomeScreen';
import Cart from './src/screens/Cart';
import Locations from './src/screens/Locations';
import Favourite from './src/screens/Favourite';
import ProfileScreen from './src/screens/ProfileScreen';

// Icons
import {Feather} from '@expo/vector-icons'



export default function App() {
  const Tab = createBottomTabNavigator()
  
  return (
    <NavigationContainer>
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
          component={HomeScreen}
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
