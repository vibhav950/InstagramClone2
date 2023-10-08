import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { users } from '../../data/users'
import { userData } from '../../data/userData'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function Stories({nav}: {nav: HomeProps['navigation']}) {
  return (
    <View style={{ marginBottom: 13, marginTop: 5, marginLeft: 8 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity activeOpacity={1} onPress={() => nav.navigate('PostStory')}>
            <Image source={userData.profilePic} style={styles.yourStory} />
            <Image source={require("../../assets/icons/post-story.png")} style={styles.postStory} />
          </TouchableOpacity>
          <Text style={{ color: 'black', fontWeight: '500', fontSize: 12, alignItems: 'center' }}>
            Your story
          </Text>
        </View>

        {users.map((story, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <View style={styles.outerBorder}>
              <Image source={{ uri: story.profile }} style={styles.story} />
            </View>
            <Text style={{ color: 'black', fontWeight: '500', fontSize: 12, alignItems: 'center' }}>
              {(story.name.length > 13) ? (story.name.slice(0, 13) + '...') : story.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  outerBorder: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginLeft: 7,
    marginRight: 7,
    borderWidth: 3,
    borderColor: '#ff8501',
    alignItems: 'center'
  },
  story: {
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: 5
  },
  yourStory: {
    width: 78,
    height: 78,
    borderRadius: 50,
    margin: 7
  },
  postStory: {
    width: 28,
    height: 28,
    resizeMode: 'cover',
    position: 'absolute', // Position the "post-story" icon absolutely
    top: '78%', // Center vertically
    left: '78%', // Center horizontally
    transform: [{ translateX: -14 }, { translateY: -14 }] // Center it properly
  }
})
