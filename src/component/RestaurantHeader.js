import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet, ImageBackground, Animated } from 'react-native'
import { Colors } from '../global/Style';
import { restaurantData } from '../global/Data';
import { Icon } from 'react-native-elements';

const RestaurantHeader = ({navigation, id}) => {

  const index2 = 10;
const currentvalue = new Animated.Value(1)

const [like, setLiked] = useState(false);
const [count, setCount] = useState(-2);
const [visible, setVisible] = useState(false);

const likedHander = ()=>{
  if(like == false)
  setVisible(true)

  setLiked(!like)
  setCount(index2)
}

useEffect(()=>{
  if(like == true){
    Animated.spring(currentvalue,{
      toValue:3,
      friction:2,
      useNativeDriver: true
    }).start(()=>{
      Animated.spring(currentvalue,{

        toValue:1,
        friction:2,
        useNativeDriver: true

      }).start(()=>{
              setVisible(false)
      })
      
    })
  }
},[like])


  return (
   <View style={styles.container}>
    <ImageBackground
    style={styles.container}
    source={{uri : restaurantData[id].images}}
  
    >
      <View style={styles.view1}>
        <View style={styles.view2}>
           <Icon
           type="material-community"
           name="arrow-left"
           size={25}
           color={Colors.black}
           onPress={()=>{navigation.goBack()}}
          
          />
          </View> 
          <View style={styles.view3}>
           <Icon
           type="material"
           name= {like && (index2 == count) ? "favorite" : "favorite-border"}
           size={25}
           color= 'red'
           onPress={likedHander}
          
          />
          </View> 

      </View>

      <View style={styles.view4}>
        { visible && (index2 == count) &&
        <Animated.View style={{transform:[{scale:currentvalue}]}}>
            <Icon
           type="material"
           name= "favorite" 
           size={40}
           color= 'red'/>
        </Animated.View>


        }

      </View>

    </ImageBackground>
   </View>
  )
}

export default RestaurantHeader;

const styles = StyleSheet.create({
  container:{
    height:150
  },
 
  view1:{
    flexDirection:"row",
    alignItems:"baseline",
    justifyContent:"space-between"
  },
  view2:{
    margin:10,
    height:40,
    width:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    backgroundColor: Colors.Cardbackground
  },
  view3:{
    margin:10,
    height:40,
    width:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20,
    backgroundColor: Colors.Cardbackground,
marginTop:0
  },
  view4:{
    marginTop:0,
    alignItems:"center",
    justifyContent:"center",
  }
    
})
