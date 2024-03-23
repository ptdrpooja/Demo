import React from 'react'
import { StyleSheet,View,Text, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import { Colors } from '../../global/Style';

const SwiperScreen = () => {
  return (
    <View style={{    backgroundColor: '#97CAE5', flex:1  }}>
 <View style={styles.container}>
      <Image source={require("../../assets/Images/food.jpg")} style={styles.slide1} 
       />
   </View>
    </View>
  
    )
}

export default SwiperScreen;

const styles = StyleSheet.create({
  container: {
  flex:1,
justifyContent: 'center',
 alignItems: 'center',
//  height:"100%"

  },
  slide1: {
   flex:1,
    justifyContent: 'center',
    alignItems: 'center',
   
   
  },
  slide2: {
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    
    color: "#ff8c52",
    fontSize: 30,
    fontWeight: 'bold'
  }
})
