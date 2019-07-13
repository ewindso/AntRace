import React, { useEffect } from 'react'
import { Animated, Easing, View, Image, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

const antImage = require('../assets/ant.png')

const Ant = React.memo(props => {
  let translateX = new Animated.Value(0)

  useEffect(() => {
    Animated.loop(
      Animated.timing(
        translateX, 
        {
          toValue: 1, 
          duration: props.duration, 
          easing: Easing.linear
        }
      )
    ).start()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Image
        source={antImage} 
        resizeMode={'center'}
        style={
          [
            styles.image, 
            {
              tintColor: props.color,
              transform: [
                {translateX: translateX.interpolate({
                  inputRange: [0, 1], 
                  outputRange: [-50, screenWidth]
                })}, 
                {scaleX: translateX.interpolate({
                  inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], 
                  outputRange: [1, 1.35, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1]
                })}
              ]
            }
          ]
        }
        />
    </View>
  )
})

const styles = StyleSheet.create({
  container: {

  }, 
  image: {
    width: 50, 
    height: 30, 
  }
})

export default Ant