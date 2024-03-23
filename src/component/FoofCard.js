import React from 'react'
import { View , Text,StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { Colors, Paramters } from '../global/Style';
import { Icon, Image } from 'react-native-elements';
const FoofCard = ({
    OnPressFoodCard,
    restaurantname,
    deliveryAvailable,
    discountAvailable,
    discountPresent,
    numberofReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}) => {
  return (
   <TouchableOpacity>
    <View style={{...styles.cardView, width:screenWidth}}>
<Image style={{...styles.image, width:screenWidth}}
  source={{uri: images}}
/>
<View>
    <View>
        <Text style={styles.restaurantName}>{restaurantname}</Text>
    </View>
    <View style={{flex:1, flexDirection:"row"}}>
        <View style={styles.distance}>
        <Icon
 type="material"
 name= "place"
 size={18}
 color={Colors.grey2}
 iconStyle={{
    marginTop:3
 }}
//  onPress={()=>{navigation.goBack()}}

/>
<Text style={styles.Min}>{farAway} Min</Text>

        </View>
        <View style={{flex:9, flexDirection:"row"}}>
            <Text style={styles.address}>{businessAddress}</Text>
       
    </View>
        </View>
      
</View>


    </View>
    <View style={styles.review}>
            <Text style={styles.average}>{averageReview}</Text>
            <Text style={styles.numberofReview}>{numberofReview} reviews</Text>
       
    </View>
   </TouchableOpacity>
  )
}

export default FoofCard;

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderRadius:5,
        backgroundColor: Colors.grey5,
        // borderWidth:1
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150
    },
    restaurantName:{
        fontSize:17,
        fontWeight:"bold",
        color:Colors.grey1,
        marginTop:5,
        marginLeft:10


    },
    distance:{
        flex:4,
        flexDirection:"row",
        borderRightColor: Colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1
    },
    Min:{
        fontSize:12,
        fontWeight:"bold",
        color:Colors.grey3,
        paddingTop:5
    },
    address:{
        fontSize:12,
        color:Colors.grey2,
        paddingTop:5,
        paddingHorizontal:10
    },
    review:{
        top:0,
        right:10,
        position:"absolute",
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomLeftRadius:12,
        backgroundColor:"rgba(52, 52, 52, 0.3)"
    },
    average:{
        fontSize:20,
        color:"white",
        paddingTop:-3,
       fontWeight:"bold"
    },
    numberofReview:{
        fontSize:13,
        color:"white",
        marginLeft:0,
        marginLeft:0
    }
})
