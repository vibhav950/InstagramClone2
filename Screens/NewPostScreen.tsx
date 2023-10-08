import { StyleSheet, View } from 'react-native'
import React from 'react'
import BottomTab, { bottomTabIcons } from '../components/home/BottomTab'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function NewPostScreen( {navigation}: HomeProps ) {
  return (
    <View style={[styles.container, styles.bottomTabContainer]}>
      <BottomTab icons={bottomTabIcons} nav={navigation} currentScreen='NewPost'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  },
  bottomTabContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
})