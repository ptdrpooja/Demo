import React from 'react'
import { View , Text,StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import { Colors, Paramters } from '../global/Style';
import { Icon } from 'react-native-elements';

const Header = ({title, type, navigation}) => {
  return (
    <View>
       <StatusBar
      barStyle= "light-content"
      backgroundColor= {Colors.buttons}
      />
   <View style={styles.header}>
  <View style={{marginLeft:20}}>
<Icon
 type="material-community"
 name={type}
 size={30}
 color={Colors.Cardbackground}
 onPress={()=>{navigation.goBack()}}

/>
  </View>
    <View>
        <Text style={styles.headerText}>{title}</Text>
    </View>
    </View>
   </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    header:{
        backgroundColor : Colors.buttons,
        flexDirection:"row",
        height: Paramters.headerHeieght,
        alignContent:"center"

    },
    headerText:{
        color: Colors.Cardbackground,
        fontSize:22,
        fontWeight:"bold",
        marginLeft:30
    }
    ,
    imageIcon  :{
          color: Colors.Cardbackground,
          marginLeft:30,


         
    }
})
