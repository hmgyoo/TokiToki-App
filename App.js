import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import DiscoverScreen from './src/screens/DiscoverScreen';
import AddContent from './src/screens/AddContent';
import MessagesScreen from './src/screens/MessagesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import ShopScreen from './src/screens/ShopScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#fff',
        }
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
          ),
          tabBarStyle: {
            backgroundColor: 'black', // Change background color to black for 'Home' tab
          },
          tabBarActiveTintColor: '#fff'
        }}
      />
      <Tab.Screen name='Shop' component={ShopScreen} options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='bag-handle' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='Upload' component={AddContent} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='add' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='Inbox' component={MessagesScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbox-ellipses' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen name='Me' component={ProfileScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Tabs} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App