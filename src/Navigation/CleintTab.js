import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from '../screens/Dashboard/HomeScreen';
import { Colors } from '../global/Style';
import SearchScreen from '../screens/Dashboard/SearchScreen';
import MyOrderScreen from '../screens/Dashboard/MyOrderScreen';
import myAccountScreen from '../screens/Dashboard/MyAccountScreen';
import MyAccountScreen from '../screens/Dashboard/MyAccountScreen';
import ClientStack from './ClientStack';


const clientTabs = createBottomTabNavigator();


const CleintTab = () => {
  return (

    <clientTabs.Navigator
    screenOptions = {({ route }) =>({

    
      tabBarActiveTintColor : Colors.buttons,
       
      tabBarStyle: [
        {
          display: "flex"
        },
        null
      ],
  tabBarIcon: ({ color }) => 
  screenOptions(route, color),
    
})}
      
    
    >
        <clientTabs.Screen
        name = "HomeScreen"
        component={HomeScreen}
        options={{
          headerShown : false,
            tabBarLabel :"Home",
            tabBarIcon :({color,size}) =>(
                <Icon
                name='home'
                type='material'
                color={color}
                size={size}
                />
            )
        }}
        />
          <clientTabs.Screen
        name = "ClientStack"
        component={ClientStack}
        options={{
          headerShown : false,
            tabBarLabel :"search",
            tabBarIcon :({color,size}) =>(
                <Icon
                name='search'
                type='material'
                color={color}
                size={size}
                />
            )
        }}
        />

<clientTabs.Screen
        name = "MyOrderScreen"
        component={MyOrderScreen}
        options={{
          headerShown : false,
            tabBarLabel :"My Orders",
            tabBarIcon :({color,size}) =>(
                <Icon
                name='view-list'
                type='material'
                color={color}
                size={size}
                />
            )
        }}
        />

<clientTabs.Screen
        name = "MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown : false,
            tabBarLabel :"My Account",
            tabBarIcon :({color,size}) =>(
                <Icon
                name='person'
                type='material'
                color={color}
                size={size}
                />
            )
        }}
        />

    </clientTabs.Navigator>
  
  )
}

export default CleintTab;
