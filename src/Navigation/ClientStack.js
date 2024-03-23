import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useLayoutEffect } from 'react'
import SearchScreen from '../screens/Dashboard/SearchScreen'
import SearchResultScreen from '../screens/Dashboard/SearchResultScreen'
import RestaurantHomeScreen from '../screens/Dashboard/RestaurantHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductScreen from '../screens/Dashboard/MenuProductScreen';
import PrefrenceScreen from '../screens/Dashboard/PrefrenceScreen';


const ClientSearch = createNativeStackNavigator()

const ClientStack = ({navigation,route}) => {

useLayoutEffect(()=>{

  const routeName = getFocusedRouteNameFromRoute(route);
  if(routeName === "RestaurantHomeScreen" || "MenuProductScreen"){
    navigation.setOptions({tabBarVisible : false})
  }else{
    navigation.setOptions({tabBarVisible : true})

  }

},[navigation,route])

  return (
  <ClientSearch.Navigator>
    <ClientSearch.Screen name ={"SearchScreen"} component={SearchScreen} options={{ headerShown: false}} />
    <ClientSearch.Screen name ={"SearchResultScreen"} component={SearchResultScreen} options={{ headerShown: false}} />
    <ClientSearch.Screen name ={"RestaurantHomeScreen"} component={RestaurantHomeScreen} options={{ headerShown: false}} />
    <ClientSearch.Screen name ={"MenuProductScreen"} component={MenuProductScreen} options={{ headerShown: false}} />
    <ClientSearch.Screen name ={"PrefrenceScreen"} component={PrefrenceScreen} options={{ headerShown: false}} />





  </ClientSearch.Navigator>
  )
}

export default ClientStack
