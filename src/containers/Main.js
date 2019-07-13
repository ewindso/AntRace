import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Ant from '../components/Ant'

const Main = React.memo(props => {
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }, [])

  const { data, isLoading } = props 

  return (
    <SafeAreaView style={styles.container}>
      { isLoading ? (
        <View key={'container'} style={styles.loadingView}>
          <ActivityIndicator animating={true} size={'large'} />
        </View>
      ) : (
        <View key={'container'} style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listView}>
          </View>
          <View style={styles.infoView}>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Start Computation</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.animationView}>

          </View>
          {/* <View style={styles.antView}>
            <Image source={require('../assets/ant.png')} style={{tintColor: 'orange', width: 50, height: 30}} />
            <Ant />
          </View> */}
        </View>
      )}
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
  loadingView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  header: {
    width: '100%', 
    height: 50, 
    backgroundColor: '#ccc', 
    borderBottomColor: 'gray', 
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  }, 
  logoutButton: {
    width: 100, 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
  logoutButtonText: {
    fontSize: 18, 
    color: 'white'
  }, 
  listView: {
    flex: 0.5
  }, 
  infoView: {
    borderTopWidth: 1, 
    borderTopColor: '#ccc', 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc',
    height: 60,
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
  startButton: {
    height: 44, 
    width: 200, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 0.25, 
    borderColor: 'black', 
    borderRadius: 10
  }, 
  animationView: {
    flex: 1
  }
})

const mapStateToProps = state => {
  const {
    ant: {
      data,
      isLoading
    }
  } = state 

  return { data, isLoading }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)