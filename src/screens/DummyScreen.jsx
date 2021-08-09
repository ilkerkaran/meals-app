import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const DummyScreen = ({ screenName }) => (
  <View style={styles.container}>
    <Text>{screenName}</Text>
  </View>
)

export default DummyScreen

DummyScreen.propTypes = {
  screenName: PropTypes.string.isRequired
}
