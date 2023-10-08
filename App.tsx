import React from 'react'
import HomeScreen from './Screens/HomeScreen'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import CreateScreen from './Screens/CreateScreen'
import MyProfileScreen from './Screens/MyProfileScreen'
import NewPostScreen from './Screens/NewPostScreen'
import ReelsScreen from './Screens/ReelsScreen'
import SearchScreen from './Screens/SearchScreen'
import PostStory from './Screens/PostStory'

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Create: undefined;
  MyProfile: undefined;
  Reels: undefined;
  NewPost: undefined;
  PostStory: undefined;
  // Profile: { userId: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen name='Create' component={CreateScreen}/>
        <Stack.Screen name='MyProfile' component={MyProfileScreen}/>
        <Stack.Screen name='Reels' component={ReelsScreen}/>
        <Stack.Screen name='NewPost' component={NewPostScreen}/>
        <Stack.Screen name='PostStory' component={PostStory}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}