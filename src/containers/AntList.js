import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, ScrollView, Image, ActivityIndicator } from 'react-native'
import Ant from '../components/Ant'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

const AntList = React.memo(props => {

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }, [props.data])

  const { data, computations, computationStatus } = props 
  
  return (
    <ScrollView 
      style={styles.container}
    >
      {data.map(item => {
        const { name, color } = item 
        const antComputation = computations[name]

        const duration = antComputation ? (1.1 - antComputation) * 10000 : 0

        return (
          <View key={name} style={styles.row}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.statusText}>
              { computationStatus === 'not_yet_run' ? 'Not yet run' : (
                antComputation ? `Likelihood: ${antComputation}` : 'In Progress...'
              )}
            </Text>
            { antComputation && (
              <View style={styles.antView}>
                <Ant color={color.toLowerCase()} duration={duration} />
              </View>
            )}
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
      data: unsortedData, 
      computations,
      computationStatus,
    }, 
  } = state 

  let data = unsortedData.map(antData => {
    const { name } = antData
    const computation = computations[name] ? computations[name] : 0

    return { ...antData, computation }
  })

  data = _.orderBy(data, ['computation'], ['desc'])

  return { data, computations, computationStatus }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AntList)