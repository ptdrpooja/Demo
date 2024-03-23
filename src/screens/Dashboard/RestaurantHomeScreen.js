import React, { useState } from 'react'
import { View,Text, StyleSheet ,ScrollView,Dimensions,TouchableOpacity, Modal} from 'react-native'
import RestaurantHeader from '../../component/RestaurantHeader';
import { Colors } from '../../global/Style';
import { menu, restaurantData } from '../../global/Data';
import { Icon } from 'react-native-elements';
import { TabBar, TabView } from 'react-native-tab-view';
import MenuScree from './RestaurantTabs/MenuScree';

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

const RestaurantHomeScreen = ({navigation, route}) => {

const {id, restaurant} = route.params;

const[routes] = useState([
  {key : 'first',title :"MENU"},
  {key : "second",title :"INFO"},
  {key : "third",title :"REVIEWS"},
  {key : "fourth",title :"GALLERY"},


]);

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


const UpdateRoute1 =()=>{
  return(
    <View>
      
    </View>
  )
}

const menuPressed=()=>{
  navigation.navigate("MenuProductScreen")
}



  return (
   <View style={styles.container}>
    <ScrollView>
      <View>
      <RestaurantHeader id={id} navigation={navigation}/>

      {restaurantData[id].discount &&
        <View style={styles.view1}>
          <Text style={styles.text1}>GET {restaurantData[id].discount}% OFF ON FOOD TOTAL</Text>

        </View>

      }
      <View style={styles.view2}>
        <View style={styles.view3}>
        <Text style={styles.text2}>{restaurantData[id].restaurantname}</Text>
        <Text style={styles.text3}>{restaurantData[id].foodType}</Text>

        <View style={styles.view4}>
        <Icon
           type="material-community"
           name= "star"
           size={15}
           color={Colors.grey3}/>
                   <Text style={styles.text4}>{restaurantData[id].averageReview}</Text>
                   <Text style={styles.text5}>{restaurantData[id].numberofReview}</Text>
                   <Icon
           type="material-community"
           name= "map-marker"
           size={15}
           color={Colors.grey3}/>
                   <Text style={styles.text5}>{restaurantData[id].faraway} mi away</Text>

</View>
</View>

<View style={styles.view5}>  
<Text style={styles.text6}>Collect</Text>
<View style={styles.view7}>  
<Text style={styles.text7}>{restaurantData[id].coolectTime}</Text>
<Text style={styles.text8}>min</Text>

</View>
</View>


<View style={styles.view8}>  
<Text style={styles.text6}>Delivery</Text>
<View style={styles.view9}>  
<Text style={styles.text9}>{restaurantData[id].deliveryTime}</Text>
<Text style={styles.text11}>min</Text>

</View>


</View>

       
      </View>
        
      </View>

      <View style={styles.view11}>
        <TabView
        navigationState={{index, routes}}
        renderScene={UpdateRoute1}
        onIndexChange={setIndex}
         initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        tabBarPosition='top'
        />

      </View>
{
  index === 0 &&
  <MenuScree  onPress = {menuPressed}/>

}




    </ScrollView>
    <TouchableOpacity>
      <View style={styles.view11}>
      <View style={styles.view12}>
        <Text style={styles.text13}>View Cart</Text>
        <View style={styles.view13}>
        <Text style={styles.text13}>0</Text>

</View>
</View>
      </View>
    </TouchableOpacity>
   
   </View>
  )
}

export default RestaurantHomeScreen;

const styles = StyleSheet.create({
container:{
  flex:1,
  // marginTop:18
},
view1:{
  width:"100%",
  padding:3,
  alignItems:"center",
  justifyContent:"center",
},
text1:{
  color:"green",
  fontSize:14,
  fontWeight:"bold",
},
view2:{
  flex:1,
  flexDirection:"row",
  justifyContent:"space-between",
  marginBottom:5,
  marginHorizontal:10
},
view3:{
  flex:8
},
text2:{
  fontSize:20,
  fontWeight:"bold",
  color:Colors.grey1
},
text3:{
  fontSize:15,
  color:Colors.grey3
},
view4:{
  flexDirection:"row",
  alignItems:"center",
  marginTop:5
},
text4:{
 
    fontSize:13,
    fontWeight:"bold",
    color:Colors.grey3,
    marginLeft:2
  
  
},
text5:{
 
  fontSize:13,
  fontWeight:"bold",
  color:Colors.grey3,
  marginLeft:2,
  marginRight:5},
 
  text6:{
 
    fontSize:13,
    color:Colors.grey3,
    marginLeft:0,
  },
  view5:{
    flex:3,
    alignItems:"center"
  },
  view6:{
    fontSize:15,
    fontWeight:"bold",
    color:Colors.grey1
  },
  view7:{
    width:40,
    height:40,
    alignItems:"center",
    borderRadius:20,
    justifyContent:"space-between"
  },
  text7:{
    fontSize:16,
    fontWeight:"bold",
    color:Colors.black,
    marginTop:5
  },
  text8:{
    fontSize:13,
    color:Colors.black,
    marginBottom:5
  },
  view8:{
    flex:3,
    alignItems:"center",
  },
  text9:{
    fontSize:15,
    fontWeight:"bold",
    color:Colors.Cardbackground,
  },
  view9:{
    width:40,
    height:40,
    alignItems:"center",
    borderRadius:20,
    backgroundColor:Colors.buttons,
    justifyContent:"space-around",
  },
  text10:{
    fontSize:16,
    fontWeight:"bold",
    color:Colors.Cardbackground,
    marginTop:5
  },
  text11:{
    fontSize:13,
    color:Colors.Cardbackground,
    marginBottom:5
  },
  view11:{
    backgroundColor:Colors.buttons,
    height:50,
    alignItems:"center",
    marginBottom:0,
    justifyContent:"center"
  },
  view12:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  text12:{
    fontSize:18,
    fontWeight:"bold",
    color:Colors.Cardbackground,
padding:10
  },
  view13:{
    backgroundColor:Colors.buttons,
    borderWidth:1,
    marginRight:10,
    borderRadius:6,
    paddingBottom:2,
    borderColor:"white"
  },
  text13:{
    fontSize:18,
    fontWeight:"bold",
    color:Colors.Cardbackground,
    paddingHorizontal:3
  },
  tab:{
    paddingTop:10,
    backgroundColor:Colors.buttons,
    justifyContent:"space-between",
    alignItems:"center",
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
}


})
