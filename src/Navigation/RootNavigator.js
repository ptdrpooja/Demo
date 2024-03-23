import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { SignInContext } from '../context/AuthContext';
import AuthStack from './AuthStack';

const RootNavigator = () => {

  const {signedIn} = useContext(SignInContext)

  return (
   <NavigationContainer>
   {
    signedIn.userToken !== 'signed-in' ? (
      <AuthStack/>
    ):(
        <AppNavigator/>
    )
   }
   </NavigationContainer>
  )
}

export default RootNavigator
