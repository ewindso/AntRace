import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/auth'
import Login from '../components/Home/Login'

const Home = React.memo(props => {
  const { loggedIn, loginUser } = props 

  if(loggedIn === false) {
    return <Login loginUser={loginUser} />
  }

  return null
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