import React from 'react'
import { View , Text,StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { Colors, Paramters } from '../global/Style';
import { Icon , withBadge} from 'react-native-elements';

const HomeHeader = ({navigation}) => {

 const BadgeIcon = withBadge(5)(Icon)
    return (
    <View style={styles.header}>
    <View style={{ alignItems:"center", justifyContent:"center"}}>
<Icon
 type="material-community"
 name= "menu"
 size={30}
 color={Colors.Cardbackground}
 onPress={()=>{navigation.toggleDrawer()}}

/>
   </View>
   <View style={{alignItems:"center", justifyContent:"center"}}>

        <Text style={styles.headerTexts}>XpressFood</Text>
    </View>
    <View style={{alignItems:"center", justifyContent:"center"}}>
        <BadgeIcon
         type="material-community"
         name= "cart"
         size={30}
         color={Colors.Cardbackground}
        
        
        />
    </View>
   </View>
  )
}

export default HomeHeader;

const styles = StyleSheet.create({
    header:{
        backgroundColor : Colors.buttons,
        flexDirection:"row",
        height: Paramters.headerHeieght,
        alignContent:"center",
        justifyContent:"space-around"

    },
    headerTexts:{
        color: Colors.Cardbackground,
        fontSize:22,
        fontWeight:"bold",
       
    }
   })

