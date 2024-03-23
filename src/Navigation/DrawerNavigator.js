import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import CleintTab from './CleintTab';
import { Icon } from 'react-native-elements';
import { Colors } from '../global/Style';
import BusinessConsole from '../screens/Dashboard/BusinessConsole';
import DrawerContent from '../component/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
        <Drawer.Navigator
        drawerContent={props =><DrawerContent{...props}/>}
        >
          <Drawer.Screen 
          name="CleintTab" 
          component={CleintTab} 
          options={{
            headerShown : false,
           title:"Cleint",
           drawerIcon :({focussed, size})=>(
            <Icon
            name='home'
            type='material-community'
            color={focussed ? "#7cc" : Colors.grey2}
            size={size}
            />

            

           )
        }}
          />
             <Drawer.Screen 
          name="BusinessConsole" 
          component={BusinessConsole} 
          options={{
            headerShown : false,
           title:"business console",
           drawerIcon :({focussed, size})=>(
            <Icon
            name='business'
            type='material'
            color={focussed ? "#7cc" : Colors.grey2}
            size={size}
            />

            

           )
        }}
          />
          
        </Drawer.Navigator>
  )
}

export default DrawerNavigator;
