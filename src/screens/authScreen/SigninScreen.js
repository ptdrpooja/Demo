import React, { useContext, useEffect, useRef, useState } from 'react'
import { View , Text,StyleSheet, Dimensions, TouchableOpacity, TextInput, ScrollView, Alert} from 'react-native'
import { Colors, Paramters ,title} from '../../global/Style';
import { Button, Icon, SocialIcon } from 'react-native-elements';
import { Formik } from 'formik'; 
import Header from '../../component/Header';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../../context/AuthContext';

const SigninScreen = ({navigation}) => {

  const {dispathSignedIn} = useContext(SignInContext)


  useEffect(()=>{

    auth().onAuthStateChanged((user)=>{
      if(user){
        dispathSignedIn({type:"UPADATE_SIGN_IN",payload:{userToken:"signed-in"}})

      }else
      {
        dispathSignedIn({type:"UPADATE_SIGN_IN",payload:{userToken:null}})

      }
    })


  },[])


    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    const textInput1 = useRef(1);
    const textInput2 = useRef(2);

    async function signIn(data){
      try{
      const {password, email} = data
      const user = await auth().signInWithEmailAndPassword(email, password)
      if(user){
        dispathSignedIn({type:"UPADATE_SIGN_IN",payload:{userToken:"signed-in"}})
    console.log(user)
      }
    }
      catch(error){
       Alert.alert(
        error.name,
        error.massage
       )
      }
    }


  
  return (
   <View style={styles.container}>
  
   
   

    <ScrollView>
      <Header title={"My Account"} type="arrow-left"  navigation={navigation}/>
      <View style={{marginLeft:20, marginTop:10}}>
      <Text style={title}>Sign-In</Text>

      </View>
      <View style={{alignItems:"center", marginTop:10}}>
      <Text style={styles.text1}>please enter the Email and password</Text>
      <Text style={styles.text1}>registered with your account</Text>

      </View>


      <Formik
      initialValues={{email:'', password:''}}
      onSubmit={(values)=>{
        signIn(values)
      }}

   >
    { (props)=>
<View>
<View style={{marginTop:20}}>
      <View style={styles.TextInput1}>

<TextInput
     
     placeholder='Email'
     style={{ flex:1 }}
     ref={textInput1}
     onChangeText={props.handleChange('email')}
     value={props.values.email}
     
     />

</View>
<View style={styles.TextInput1}>

<Icon
name='lock'
iconStyle={{color:Colors.grey3}}
type='material'

/>
<TextInput
     
     placeholder='Password'
     secureTextEntry={visible}
     ref={textInput2}
     onChangeText={props.handleChange('password')}
     value={props.values.password}
     style={{
      flex:1
     
      
  
  }}/>
  <TouchableOpacity onPress={()=>{
    setShow(!show)
    setVisible(!visible)
    }}>

    {
    show === false ? <Icon
    name='visibility-off'
    iconStyle={{color:Colors.grey3,marginRight:10}}
    type='material'
    
    />: <Icon
    name='visibility'
    iconStyle={{color:Colors.grey3, marginRight:10}}
    type='material'
    
    />

    }
  </TouchableOpacity>

</View>

      </View>

      <View style={{marginHorizontal:20, marginVertical:20}}>
        <Button
        title= "SIGN IN"
        buttonStyle={Paramters.styledButton}
        titleStyle ={Paramters.buttonTitle}
        onPress={props.handleSubmit}
        />
      </View>
      </View>
      }
   </Formik>

    

      <View style={{marginTop:15, alignItems:"center"}}>
        <Text style={{...styles.text1, textDecorationLine:"underline"}}>Forgot Password ?</Text>
      </View>
      <View style={{marginTop:30,marginBottom:30, alignItems:"center"}}>
        <Text style={{fontWeight:"bold", fontSize:20, color:"black"}}>OR</Text>
      </View>

      <View style={{marginHorizontal:10, marginTop:10}}>
        <SocialIcon
        title='sign in with Facebook'
        button
        type='facebook'
        style={styles.socialIcon}
        onPress={()=>{}}
        />
      </View>

      <View style={{marginHorizontal:10, marginTop:10}}>
        <SocialIcon
        title='sign in with Google'
        button
        type='google'
        style={styles.socialIcon}
        onPress={()=>{}}
        />
      </View>

      <View style={{marginTop:15,marginLeft:20}}>
        <Text style={{...styles.text1,}}>New on xpressFood ?</Text>
      </View>

      <View style={{alignItems:"flex-end", marginHorizontal:20, marginBottom:20}}>
        <Button
        title="Create an account"
        buttonStyle = {styles.createButton}
        titleStyle= {styles.createButtontitle}
        onPress={()=>{navigation.navigate("SignUpScreen")}}
        />
      </View>
      </ScrollView>
   </View>
  )
}

export default SigninScreen;
const styles = StyleSheet.create({
container :{
    // flex:1
},
text1:{
    color: Colors.grey3,
    fontSize:16
},
TextInput1: {
    flexDirection:"row",
   
     borderWidth: 1,
     
      alignSelf:"center",
      justifyContent:"center",
      alignItems:"center",
      borderColor:"#86939e",
      borderRadius:12,
      marginHorizontal:10,
      marginBottom:20,
      paddingLeft:15
     
     },
     socialIcon:{
        borderRadius:12,
        height:50
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
