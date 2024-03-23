import React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import SigninScreen from '../screens/authScreen/SigninScreen';
import SignUpScreen from '../screens/authScreen/SignUpScreen';

const Auth = createNativeStackNavigator();



const AuthStack = () => {
  return (
    <Auth.Navigator>

   {/* <Auth.Screen name ={"SignwelcomeScreen"} component={SignwelcomeScreen} options={{ headerShown: false}}/>  */}

   <Auth.Screen name ={"SigninScreen"} component={SigninScreen} options={{ headerShown: false}}/>
   <Auth.Screen name ={"SignUpScreen"} component={SignUpScreen} options={{ headerShown: false}}/>
   </Auth.Navigator>
  )
}

export default AuthStack
