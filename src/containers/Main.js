import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Main = React.memo(props => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.antView}>
        <Image source={require('../assets/ant.png')} style={{tintColor: 'orange', width: 50, height: 30}} />
      </View>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)