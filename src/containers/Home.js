import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/auth'

const Home = React.memo(props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>There's really only one thing to do...</Text>
        <TouchableOpacity style={styles.loginButton} onPress={() => props.loginUser()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  welcomeView: {
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  welcomeText: {
    fontSize: 18, 
  }, 
  loginButton: {
    marginTop: 50, 
    width: 200, 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: 'gray', 
    borderRadius: 20
  }, 
  loginText: {
    fontSize: 18, 
    fontWeight: 'bold'
  }
})

const mapStateToProps = state => {
  const {
    auth: {
      loggedIn
    }
  } = state 

  return { loggedIn }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)