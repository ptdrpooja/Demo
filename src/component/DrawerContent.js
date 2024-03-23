import React, { useContext } from 'react'
import { Text, View, Linking, Pressable, Alert,Switch , StyleSheet} from 'react-native';
import { DrawerContentScrollView , DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import { Icon, Avatar, Button} from 'react-native-elements';
import { Colors } from '../global/Style';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../context/AuthContext';


const DrawerContent = (Props) => {

  const {dispathSignedIn} = useContext(SignInContext)


async function signOut(){
 
  try{
    auth()
    .signOut()
    .then(
      ()=>{console.log("user succesfully sign out")
        dispathSignedIn({type:"UPADATE_SIGN_IN",payload:{userToken:null}})

      }
    )
  }catch(error){
    Alert.alert(error.code)
  }
}

  return (
  <View style={styles.container}>
    <DrawerContentScrollView {...Props}>
        <View style={{backgroundColor:Colors.buttons, paddingLeft:10, paddingVertical:10}}>
        <View style={{flexDirection:"row",alignItems:"center", }}>
    <Avatar
    rounded
    size={75}
    avatarStyle={styles.avtar}
    source={{uri:"https://e7.pngegg.com/pngimages/630/885/png-clipart-shawarma-french-fries-fast-food-street-food-junk-food-kebab-food-recipe-thumbnail.png"}}
    />
    <View style={{marginLeft:10}}>
        <Text style={{fontWeight:"bold", color:Colors.Cardbackground, fontSize:16}}>johan king</Text>
        <Text style={{fontWeight:"bold", color:Colors.Cardbackground, fontSize:16}}>johanxpressed.com</Text>

    </View>
   
   </View>
   <View style={{flexDirection:"row", marginTop:10, justifyContent:"space-evenly", paddingBottom:10}}>
        <View style={{marginLeft:10, alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontWeight:"bold", color:Colors.Cardbackground, fontSize:16}}>1</Text>
    <Text style={{fontWeight:"bold", color:Colors.Cardbackground, fontSize:16}}>My Favorites</Text>
        </View>
        <View style={{marginLeft:10, alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontWeight:"bold", color:Colors.Cardbackground, fontSize:16}}>0</Text>
    <Text style={{fontWeight:"bold", color:Colors.Cardbackground, fontSize:16}}>My Cards</Text>
        </View>
  

    </View>
        </View>
  
   <DrawerItemList {...Props}/>
   <DrawerItem  label= "Payment"
  
  icon = {({color,size}) =>(
    <Icon
    name='credit-card-outline'
    type='material-community'
    color={color}
    size={size}
    />)}
  
  />

<DrawerItem  label= "Promotions"
  
  icon = {({color,size}) =>(
    <Icon
    name='tag-heart'
    type='material-community'
    color={color}
    size={size}
    />)}
  
  />
  <DrawerItem  label= "Setting"
  
  icon = {({color,size}) =>(
    <Icon
    name='cog-outline'
    type='material-community'
    color={color}
    size={size}
    />)}
  
  />
  <DrawerItem  label= "Help"
  
  icon = {({color,size}) =>(
    <Icon
    name='lifebuoy'
    type='material-community'
    color={color}
    size={size}
    />)}
  
  />

   <View style={{borderTopWidth:1, borderTopColor:Colors.grey5}}>
    <Text style={styles.Preferences}>Preferences</Text>
   </View>
   <View style={styles.SwitchText}>
    <Text style={styles.darkThemeText}>Dark Theme</Text>
    <View style={{paddingRight:10}}>
        <Switch
        trackColor={{false :"#767577", true:"#81b0ff"}}
        thumbColor={  "#f4f3f4"}
        />

    </View>
   </View>
   
   </DrawerContentScrollView>
   <DrawerItem  label= "Sign Out"
  
  icon = {({color,size}) =>(
    <Icon
    name='logout-variant'
    type='material-community'
    color={color}
    size={size}
   onPress={()=>{signOut()}}
    />)}
  
  />
  </View>
  )
}

export default DrawerContent;

const styles = StyleSheet.create({
container:{
flex:1
},
avtar:{
    borderWidth: 4,
    borderColor: Colors.Cardcomments,
    
},
Preferences:{
    fontSize:16,
    color:Colors.grey2,
    paddingTop:10,
    paddingLeft:10

},
SwitchText:{
    paddingTop:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:5,
    paddingRight:10

},
darkThemeText:{
    fontSize:16,
    color:Colors.grey2,
    paddingTop:10,
    paddingLeft:10,
    fontWeight:"bold"
}
})
