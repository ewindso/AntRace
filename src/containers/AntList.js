import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, ScrollView, Image, ActivityIndicator } from 'react-native'
import Ant from '../components/Ant'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const AntList = React.memo(props => {
  const { data, computations } = props 
  
  return (
    <ScrollView 
      style={styles.container}
    >
      {data.map(item => {
        const { name, color } = item 
        const antComputation = computations[name]
        console.log(antComputation)
        return (
          <View key={name} style={styles.row}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.statusText}>In Progress</Text>
            <View style={styles.antView}>
              <Ant color={color.toLowerCase()} duration={5000} />
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }, 
  row: {
    height: 90,  
    justifyContent: 'center', 
    paddingLeft: 20, 
    borderBottomWidth: 0.5, 
    borderBottomColor: '#ccc'
  }, 
  nameText: {
    fontSize: 18, 
  }, 
  statusText: {
    fontSize: 15, 
    paddingTop: 20
  }, 
  antView: {
    position: 'absolute'
  }
})

const mapStateToProps = state => {
  const {
    ant: {
      data, 
      computations,
    }, 
  } = state 

  return { data, computations }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AntList)