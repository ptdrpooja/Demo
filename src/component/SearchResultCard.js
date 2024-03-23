import React from 'react'
import { Text, View, StyleSheet, ImageBackground, FlatList } from 'react-native'
import { Colors } from '../global/Style';
import { Icon } from 'react-native-elements';
import ProductCard from './ProductCard';
import { productData } from '../global/Data';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchResultCard = ({
    OnPressRestaurantCard,
    restaurantname,
    deliveryAvailable,
    discountAvailable,
    discountPresent,
    numberofReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    // productData,
    screenWidth
}) => {
  return (
   <View>
    <TouchableOpacity onPress={OnPressRestaurantCard}>
  <View style={styles.View1}>
    <View style={{height:150}}>
        <ImageBackground
        style={{height:150}}
        source={{uri: images}}
        imageStyle={styles.imageStyle}
        />
        <View style={styles.image}>
          <Text style={styles.text1}>{averageReview}</Text>
          <Text style={styles.text2}>{numberofReview} reviews</Text>

        </View>



    </View>
          <View style={styles.View3}>
           <View style={{paddingTop:5}}>
            <Text style={styles.text5}>{restaurantname}</Text>
           
           </View>
           <View style={{ flexDirection:"row"}}>
            <View style={styles.View4}>
                <Icon
                name='place'
                type='material'
                color={Colors.grey1}
                size={18}
                iconStyle={{marginTop:3,marginLeft:-3}}
                />
                <Text style={styles.View5}>{farAway}Min</Text>
            </View>
            <View style={{flex:9}}>
                <Text style={styles.text6}>{businessAddress}</Text>
            </View>

           </View>
          </View>
  </View>
  </TouchableOpacity>

<View style={{marginTop:5 ,paddingBottom:20}}>

<FlatList
horizontal={true}
showsHorizontalScrollIndicator={false}
style={{backgroundColor: Colors.Cardbackground}}
data={productData}
keyExtractor={(item,index)=>index.toString()}
renderItem={({item,index})=>(
    <ProductCard
    image={item.image}
    productNamme={item.name}
    price={item.price}
    />
    
)}


/>

   
    
    
    
    
</View>

   </View>
  )
}

export default SearchResultCard;

const styles = StyleSheet.create({
    View1:{
marginHorizontal:9,
borderTopRightRadius:5,
borderTopLeftRadius:5

},

image:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'rgba(52, 52, 52, 0.4)',
    padding:2,
    borderRadius:5,
    borderBottomLeftRadius:12,
    position:"absolute",
    top:0,
    right:0

},
imageStyle:{
    borderTopLeftRadius:5,
    borderTopRightRadius:5

},
text1:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",
    marginTop:-3
},
text2:{
    fontSize:13,
    color:"white", 
    marginRight:0,
    marginLeft:0
},
View2 :{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:-5
},
text3:{
    fontSize:10,
    color: Colors.grey2, 
    fontWeight:"bold",
},
View3:{
    flexDirection:"column",
    marginHorizontal:10,
    marginBottom:10,
    marginLeft:0


},
text5:{
    fontSize:17,
    color: Colors.grey1, 
    fontWeight:"bold",
},
View4:{
    flex:4,
    flexDirection:"row",
    borderRightWidth:1,
    borderRightColor: Colors.grey4,
    paddingHorizontal:5

},
View5:{
    fontSize:12,
    color: Colors.grey3, 
    fontWeight:"bold",
    paddingTop:5,


},


text6:{
    fontSize:12,
    color: Colors.grey2, 
  paddingHorizontal:10,
    paddingTop:5, 
}
})