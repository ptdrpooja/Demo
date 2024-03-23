import React, { useState } from 'react'
import { StyleSheet,View, Text, ScrollView, TextInput,TouchableOpacity, Alert} from 'react-native';
import { Colors } from '../../global/Style';
import Header from '../../component/Header';
import { Formik } from 'formik';
import { Button, Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';


const initialValues ={phone_number:'', name:'',family_name:'',password:'',email:'',userName:''}


const SignUpScreen = ({navigation}) => {

    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(true);

    async function SignUpScreen(values){
        try{
        const {password, email} = values
        const user = await auth().createUserWithEmailAndPassword(email, password)
        if(user){
          console.log("User account created")
        }
      }
        catch(error){
         if(error.code === "auth/email-already-in-use"){
            Alert.alert(
                'The Email address is already in use'
            )
         }
         if(error.code === "auth/invalid-email"){
            Alert.alert(
                'The Email address is invalid'
            )
         }else{
            Alert.alert(error.code)
         }
        }
      }


  return (
    <View style={styles.container}>
              <Header title={"My Account"} type="arrow-left"  navigation={navigation}/>

       <ScrollView keyboardShouldPersistTaps = "always">
       <View style={styles.view1}>
        <Text style={styles.text1}>Sign-Up</Text>
       </View>
       <Formik initialValues={initialValues} onSubmit={(values)=>{SignUpScreen(values)}} >
        {
            (props)=>(
                <View style={styles.view2}>
                    <View>
                    <Text style={styles.text2}>New on xpressFood ?</Text>
   
                    </View >
                    
                        <View style={styles.view6}>
                            <TextInput
                            placeholder='Mobile Number'
                            style={styles.input1}
                            keyboardType= "number-pad"
                            autoFocus = {true}
                            onChangeText={props.handleChange('phone_number')}
                            value= {props.values.phone_number}

                            />
                        </View>
                        <View style={styles.view6}>
                            <TextInput
                            placeholder='Name'
                            style={styles.input1}
                          autoFocus = {false}
                               onChangeText={props.handleChange('name')}
                            value= {props.values.name}

                            />
                        </View> 
                           <View style={styles.view6}>
                            <TextInput
                            placeholder='Family name'
                            style={styles.input1}
                            autoFocus = {true}
                            onChangeText={props.handleChange('family_name')}
                            value= {props.values.family_name}

                            />
                        </View>
                        <View style={styles.view6}>
                            <View>
                                <Icon
                                name='email'
                                iconStyle={{color:Colors.grey3}}
                                type='material'
                                style={styles.email}
                                />
                            </View>
                            <View style={styles.view5}>
                            <TextInput
                            placeholder='Email'
                            style={styles.input2}
                            autoFocus = {true}
                            onChangeText={props.handleChange('email')}
                            value= {props.values.email}

                            />
                        </View>

                        </View>

                        <View style={styles.view6}>

<Icon
name='lock'
iconStyle={{color:Colors.grey3}}
type='material'
style={styles.email}
/>
<TextInput
     
     placeholder='Password'
     secureTextEntry={visible}
     
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
    iconStyle={{color:Colors.grey3,marginRight:10,marginTop:10}}
    type='material'
    
    />: <Icon
    name='visibility'
    iconStyle={{color:Colors.grey3, marginRight:10, marginTop:10}}
    type='material'
    
    />

    }
  </TouchableOpacity>

</View>


         <View style = {styles.view11}>
            <Text style={styles.text3}>By creating or logging into an account you are</Text>
            <View style={styles.view12}>
                <Text style={styles.text3}>agreeing wiyh our</Text>
                <Text style={styles.text4}>Terms & Conditions</Text>
                <Text style={styles.text3}>and</Text>

            </View>
            <Text style={styles.text4}>Privacy Statment</Text>

         </View>

         <View style={styles.view16}>
            <Button
             title= "Create my account"
             buttonStyle={styles.button1}
             titleStyle ={styles.title}
             onPress={props.handleSubmit}
            
            />
         </View>
                    

                </View>
            )
        }

       </Formik>
       <View style={styles.view11}>
        <Text style={styles.text5}>OR</Text>
       </View>
       <View style={styles.view15}>
        <View style={styles.view16}>
        <Text style={styles.text6}>Already have an account with xpressFood ?</Text>

        </View>
        <View style={styles.view17}>
        <Button
             title= "Sign-In"
             buttonStyle={styles.button2}
             titleStyle ={styles.title2}
             onPress={()=>{navigation.navigate("SigninScreen")}}
            
            />
        </View>
       </View>
       </ScrollView>
    </View>
  )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
      },
      view1:{
       marginBottom:10,
       marginTop:10,
        paddingHorizontal:15,
        alignItems:"flex-start",
        justifyContent:"center",
      },
      text1:{
        color: Colors.buttons,
        fontSize:22,
        fontWeight:"bold",
      },
      view2:{
        justifyContent:"flex-start",
        backgroundColor:"white",
        paddingHorizontal:15
      },
      view3:{
        marginBottom:10,
        marginTop:5,
      },
      text2:{
        fontSize:15,
        color: Colors.grey2
      },
      view4:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:Colors.grey4,
        borderRadius:12,
        paddingLeft:5
      },
      view5:{
        marginLeft:30,
        maxWidth:"65%"
      },
      input1:{
        fontSize:16,
       
      },
      view6:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:Colors.grey4,
        borderRadius:12,
        marginLeft:6,
        marginTop:20,
        height:50
      },
      view7:{
        marginLeft:0,
        maxWidth:"65%"
      },
      input1:{
        fontSize:16,
        marginLeft:0,
        marginBottom:0
      },
     email:{
        fontSize:24,
        padding:0,
        marginBottom:0,
        marginTop:11,
        marginLeft:2
     },
     view8:{
        marginLeft:30,
        maxWidth:"65%"
     },
     input2:{
        fontSize:16,
        marginLeft:-20,
        marginBottom:-10
      },
      view9:{
        flexDirection:"row",
        height:40
      },
      view10:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:Colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
      },
      view11:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:10
      },
      text3:{
        fontSize:13

      },
      view12:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
      },
      text4:{
        textDecorationLine:'underline',
        fontSize:13,
        color:"green"
      },
      button1:{
        backgroundColor:Colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:Colors.buttons,
        height:50,
        paddingHorizontal:20,
        width:"100%"

      },
      title:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
      },
      view13:{
        marginVertical:10,
        marginTop:30
      },
      view14:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop:15
      },
      text5:{
        fontSize:15,
        color:"green"
      },
view15:{
    backgroundColor:"white",
    paddingHorizontal:15
},
view16:{
   marginTop:5
},
view17:{
    marginTop:5,
    alignItems:"flex-end"
},
button2:{
    backgroundColor:"white",
    alignContent:"center",
    justifyContent:"center",
    borderRadius:12,
    borderWidth:1,
    borderColor:Colors.buttons,
    height:40,
    paddingHorizontal:20,
    // width:"100%"
},
title2:{
    color: Colors.buttons,
    fontSize:16,
    fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
    marginTop:-3
  },






})
