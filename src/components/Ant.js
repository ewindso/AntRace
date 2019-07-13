import React from 'react'
import { Animated, View, Image, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList } from 'react-native'

const antImage = require('../assets/ant.png')

const Ant = React.memo(props => {

  return (
    <View style={styles.container}>
      <Image source={antImage} style={styles.image} resizeMode={'center'} />
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