/* eslint-disable global-require */
import * as Fonts from 'expo-font'

const fetchFonts = () => Fonts.loadAsync({
  'open-sans': require('../../assets/open-sans/OpenSans-Regular.ttf'),
  'open-sans-bold': require('../../assets/open-sans/OpenSans-Bold.ttf')
})

export default fetchFonts
