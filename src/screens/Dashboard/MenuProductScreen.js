import React, { useState } from 'react';
import Route1, { Route2, Route3, Route4, Route5, Route6, Route7, Route8 } from './MenuTabs';
import { menu} from '../../global/Data';
import { StyleSheet, View ,Dimensions,Text} from 'react-native';
import { Icon } from 'react-native-elements';
import { TabBar, TabView } from 'react-native-tab-view';
import { Colors } from '../../global/Style';

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;


const MenuProductScreen = ({navigation, route}) => {

    const[routes] = useState(menu)
    const [index, setIndex] = useState(0);


    const renderTabBar = props =>(
        <TabBar
        {...props}
        indicatorStyle={{backgroundColor: Colors.Cardbackground}}
        tabStyle={styles.tabStyle}
        scrollEnabled={true}
        style={styles.tab}
        labelStyle={styles.tabLabel}
        contentContainerStyle={styles.tebContainer}
        />
      )

      const renderScene = ({route})=>{
        switch(route.key){
          case 1:
            return <Route1 navigation={navigation}/>
      
            case 2:
            return <Route2 name={navigation}/>
            
            case 1:
            return <Route3 name={navigation}/>
      
            case 1:
              return <Route4 name={navigation}/>
      
              case 1:
                return <Route5 name={navigation}/>
      
                case 1:
                  return <Route6 name={navigation}/>
      
                  case 1:
                    return <Route7 name={navigation}/>
      
                    case 1:
                      return <Route8 name={navigation}/>
      
            default :
            return null
        }
      }
      


  return (
  <View style={{flex:1, top:0,left:0,right:0}}>
    
      <View style={styles.view14}>
      <Icon
           type="material-community"
           name="arrow-left"
           size={25}
           color={Colors.black}
           onPress={()=>{navigation.goBack()}}
          
          />
          <Text style={styles.text14}>Menu</Text>
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
         initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        tabBarPosition='top'
        navigation={navigation}
        route={route}
        />
   

  
  </View>
  )
}

export default MenuProductScreen;

const styles= StyleSheet.create({

    tab:{
        paddingTop:10,
        backgroundColor:Colors.buttons,
        justifyContent:"space-between",
        // alignItems:"center",
    },
    tebContainer:{
      alignItems:'center',
      alignContent:"center",
      justifyContent:"center"
    },
    
    tabLabel:{
      fontWeight:"bold",
      color:Colors.Cardbackground,
    
    },
    tabStyle:{
      width: SCREEN_WIDTH/4,
      maxHeight:45
    
    },
    view14:{
      top:0,
      left:0,
      right:0,
      alignItems:"center",
      flexDirection:"row",
      paddingTop:25,
      padding:10,
      backgroundColor: Colors.buttons
    },
    text14:{
      fontWeight:"bold",
      marginLeft:40,
      color:Colors.black,
      fontSize:18
    },
    view15:{
      marginTop:5,
      paddingBottom:20
    },
    scene:{
      backgroundColor:"#673ab7"
  }

})
