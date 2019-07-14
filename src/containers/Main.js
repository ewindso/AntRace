import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AntList from './AntList'
import { logoutUser } from '../actions/auth'
import { startAntComputations } from '../actions/ants'

import Ant from '../components/Ant'

const Main = React.memo(props => {
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }, [])

  const { logoutUser, isLoading, computationStatus } = props 

  return (
    <SafeAreaView style={styles.container}>
      { isLoading ? (
        <View key={'container'} style={styles.loadingView}>
          <Text style={styles.loadingText}>Loading ant data...</Text>
          <ActivityIndicator animating={true} size={'large'} />
        </View>
      ) : (
        <View key={'container'} style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.logoutButton} onPress={() => logoutUser()}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listView}>
            <AntList />
          </View>
          <View style={styles.infoView}>
            {computationStatus === 'not_yet_run' || computationStatus === 'finished' ? (
              <TouchableOpacity style={styles.startButton} onPress={() => props.startAntComputations()}>
                <Text style={styles.startButtonText}>{ computationStatus === 'not_yet_run' ? 'Start Computation' : 'Run Computation Again' }</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.inProgressView}>
                <Text style={styles.computationStatusText}>In Progress...</Text>
                { computationStatus === 'in_progress' && (
                  <ActivityIndicator animating={true} size={'small'} />
                )}
              </View>
            )}
          </View>
          <View style={styles.animationView}>
            <Ant color={'#555'} duration={3500} />
            <Ant color={'#333'} duration={5500} />
            <Ant color={'#999'} duration={4000} />
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
  loadingText: {
    fontSize: 18, 
    marginBottom: 15, 
    color: '#333'
  }, 
  header: {
    width: '100%', 
    height: 50, 
    borderBottomColor: 'gray', 
    borderBottomWidth: 0.5,
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
    color: 'gray'
  }, 
  listView: {
    flex: 1, 
    marginTop: 10
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
  inProgressView: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 
  animationView: {
    paddingTop: 10,
    height: 110, 
  }, 
})

const mapStateToProps = state => {
  const {
    ant: {
      isLoading, 
      computationStatus,
    }
  } = state 

  return { isLoading, computationStatus }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    startAntComputations, 
    logoutUser,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)