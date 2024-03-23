import React from 'react'
import { StyleSheet, View ,Dimensions,Text,Image} from 'react-native';
import { Colors } from '../global/Style';

const MenuCard = ({productName, price, image, productDetails}) => {
  return (
   <View style={styles.view1}>
    <View style={styles.view2}>
    <View style={styles.view3}>
   <Text style={styles.text1}>{productName}</Text>
   <View>
   <Text style={styles.text2}>{productDetails}</Text>
   
</View>
<Text style={styles.text3}>ZAR{price}</Text>


</View>
<View style={{flex:2}}>
   <Image style={styles.image} source={{uri : image}} />
</View>
</View>

   </View>
  )
}

export default MenuCard;
const styles= StyleSheet.create({
    view1:{
        backgroundColor:"white",
        elevation:4,
        shadowOpacity:0.4,
        shadowColor:Colors.black,
        padding:10
    },
    view2:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:0
    },
    view3:{
        flex:6,
        justifyContent:"space-between"
    },
    text1:{
        fontSize:15,
        color:Colors.grey1,
        fontWeight:"bold",
    },
    text2:{
        fontSize:15,
        color:Colors.grey3,
        marginRight:4,
       
    },
    text3:{
        fontSize:15,
        color:Colors.black,
      

    },
    image:{
        flex:1
    }

})
