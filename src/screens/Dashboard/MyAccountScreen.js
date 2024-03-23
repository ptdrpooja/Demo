import React from 'react'
import { Image, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

const MyAccountScreen = () => {
  return (
   <View style={{flex:1, backgroundColor:"white",alignItems:"center", justifyContent:"center"}}>
<Swiper
loop
// autoplay
>

  <Image source={require("../../assets/Images/burger.jpg")}
    // resizeMode="cover"
    style={{flex:1, justifyContent:"center",alignItems:"center", width:500, height:500}}
  
  />
   <Image source={require("../../assets/Images/chienes.jpg")}
    //  resizeMode="center"
    style={{flex:1, justifyContent:"center",alignItems:"center", width:500, height:500}}
  
  />
   <Image source={require("../../assets/Images/food.jpg")}
  // resizeMode="center"
  style={{flex:1, justifyContent:"center",alignItems:"center", width:500, height:500}}

/>
</Swiper>
   </View>
  )
}

export default MyAccountScreen;
