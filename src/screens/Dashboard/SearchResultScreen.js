import React from 'react'
import { StyleSheet, View,Text , Dimensions, FlatList} from 'react-native';
import SearchResultCard from '../../component/SearchResultCard';
import { restaurantData } from '../../global/Data';
import { productData } from '../../global/Data';
import { Colors } from '../../global/Style';


const SCREEN_WIDTH = Dimensions.get('window').width


const SearchResultScreen = ({navigation,route}) => {
  return (
    <View style={styles.container}>
     
      <View>
        <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
       
          <Text style={styles.listHeader} >{restaurantData.length} Result for {route.params.item}</Text>
    
          </View>
        }
        style={{backgroundColor: Colors.Cardbackground}}
data={restaurantData}
keyExtractor={(item,index)=>index.toString()}
renderItem={({item,index})=>(
  <SearchResultCard
  screenWidth={SCREEN_WIDTH}
  images={item.images}
  averageReview={item.averageReview}
  numberofReview={item.numberofReview}
  restaurantname={item.restaurantname}
 farAway={item.faraway}
 businessAddress={item.bussinessAddress}
 productData={item.productData}
 OnPressRestaurantCard={()=>{navigation.navigate("RestaurantHomeScreen",{id:index, restaurant : item.restaurantname})}}

 
 />
)}
        />
      </View>
       
    </View>
  )
}

export default SearchResultScreen;

const styles = StyleSheet.create({
    container:{
         flex:1,
         paddingTop:20
    },
    listHeader:{
    
        color: Colors.grey1,
   fontSize:20,
   fontWeight:"bold",
   paddingHorizontal:10,
   paddingVertical:15   
    }


})
