import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const AntList = React.memo(props => {
  return (
    <FlatList 
      style={styles.container}
      data={[]}
      renderItem={({item}) => <View></View>}
    />
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AntList)