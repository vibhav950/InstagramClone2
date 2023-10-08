import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../assets/images/logo.png")}/>
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image style={{width: 30, height: 30, resizeMode: 'contain', marginLeft: 15}} source={require("../../assets/icons/like.png")}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>22</Text>
          </View>
          <Image style={{width: 25, height: 28, resizeMode: 'contain', marginLeft: 15}} source={require("../../assets/icons/direct-message.png")}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 20,
      marginTop: 8
    },
    iconsContainer: {
      flexDirection: "row"
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    unreadBadge: {
      backgroundColor: "#FF3040",
      position: 'absolute',
      left: 27,
      bottom: 18,
      width: 25,
      height: 18,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    unreadBadgeText: {
      color: '#ffffff',
      fontWeight: '600',
      top: -1
    }
})