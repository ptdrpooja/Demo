import React, { useState } from 'react'
import { View , Text,StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView, Image} from 'react-native'
import { Colors, Paramters ,title} from '../../global/Style';
import { Button, Icon, SocialIcon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';


const SignwelcomeScreen = () => {

    const Navigation = useNavigation();


  return (
    <ScrollView  style={{}}>
                <View style={{justifyContent:"flex-start",alignItems:"center", paddingTop:20}}>
            <Text style={{fontSize:26, fontWeight:"bold", color:Colors.buttons}}>DISCOVER RESTAURANTS</Text>
            <Text style={{fontSize:26, fontWeight:"bold", color:Colors.buttons}}>IN YOUR AREA</Text>

        </View>
        
        
                   
        <View style={{ justifyContent:"center",flex: 1,alignItems:"center", backgroundColor:"#FFFFF"}}>
           
           <Swiper
           loop
           >
        
                <Image
                    source={require("../../assets/Images/pizza.jpg")}
                    resizeMode="center"
                    style={styles.slide1} 
                    />

               
                
              
                <Image
                    source={require("../../assets/Images/foods.jpg")}
                    style={styles.slide1} 
                    />

               
                <Image
                    source={require("../../assets/Images/pizza.jpg")}
                    style={styles.slide1} 
                    />

              
                <View style={styles.slide1}>
                <Image
                    source={require("../../assets/Images/foods.jpg")}
                    style={styles.slide1} 
                    />

                </View>
           </Swiper>
           
  
        </View>
        <View style={{marginHorizontal:20, marginVertical:20}}>
        <Button
        title= "SIGN IN"
        buttonStyle={Paramters.styledButton}
        titleStyle ={Paramters.buttonTitle}
        onPress={()=>{
            Navigation.navigate("SigninScreen")
        }}
        />
      </View>
        <View style={{alignItems:"center", marginHorizontal:20, marginBottom:20}}>
        <Button
        title="Create an account"
        buttonStyle = {styles.createButton}
        titleStyle= {styles.createButtontitle}
        onPress={()=>{}}
        />
      </View>
    </ScrollView>
  )
}

export default SignwelcomeScreen;
const styles = StyleSheet.create({
slide1:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  
    
},

createButton:{
    alignContent:"center",
    justifyContent:"center",
    borderRadius:12,
    backgroundColor:"white",
    borderWidth:1,
    height:40,
   borderColor:"#ff8c52" ,
   paddingHorizontal:20

 },
 createButtontitle:{
    color: "#ff8c52",
    fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center"
 }

})

