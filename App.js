import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Colors } from './src/global/Style'

import RootNavigator from './src/Navigation/RootNavigator'
import { SignInContextProvider } from './src/context/AuthContext'

const App = () => {
  return (
    <SignInContextProvider>
  <View style={{flex:1}}>
      <StatusBar
      barStyle= "light-content"
      backgroundColor= {Colors.buttons}
      />
      <RootNavigator/>
    </View>
    </SignInContextProvider>
  
  )
}

export default App
