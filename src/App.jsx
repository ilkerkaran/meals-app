import React from 'react'
import AppLoading from 'expo-app-loading'
import CategoriesScreen from './screens/CategoriesScreen'
import fetchFonts from './services/fetchFonts'

const App = () => (
  <>
    <AppLoading
      onError={(err) => console.log('AppLoading Err:', err)}
      startAsync={fetchFonts}
    />
    <CategoriesScreen />
  </>
)

export default App
