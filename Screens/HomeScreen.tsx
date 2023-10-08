import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab'
import { posts } from '../data/posts'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen( {navigation}: HomeProps ) {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories nav={navigation}/>
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index}/>
        ))}
      </ScrollView>
      <BottomTab icons={bottomTabIcons} nav={navigation} currentScreen='Home'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  }
})