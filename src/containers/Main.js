import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
        <View key={'container'}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.antView}>
            <Image source={require('../assets/ant.png')} style={{tintColor: 'orange', width: 50, height: 30}} />
          </View>
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
    color: 'blue'
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