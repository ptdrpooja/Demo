import React, { useState } from 'react'
import { View,Text,StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, StatusBar } from 'react-native'
import HomeHeader from '../../component/HomeHeader'
import CountDown from 'react-native-countdown-component';
import { Colors } from '../../global/Style'
import { Icon } from 'react-native-elements';
import {filterData, restaurantData} from '../../global/Data';
import FoofCard from '../../component/FoofCard';


const SCREEN_WIDTH = Dimensions.get('window').width

const HomeScreen = ({navigation}) => {

  const [delivery ,setDelivery] = useState(true);
  const [indexcheck, setIndexcheck] = useState(0);




  return (
    <View style={styles.container}>
     
      <HomeHeader navigation={navigation}/> 
      <ScrollView 
       stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={true}

      >  
      <View style={{paddingBottom:5, backgroundColor: Colors.Cardbackground}}>
      <View style={{marginTop:10, flexDirection:"row", justifyContent:"space-evenly"}}>
        <TouchableOpacity
        onPress={()=>{
          setDelivery(true);
        }}
        >
          <View style={{...styles.deliveryButton , backgroundColor: delivery ? Colors.buttons : Colors.grey4}}>
<Text style={styles.deliveryText}>Delivery</Text>
          </View>
        </TouchableOpacity
        
        >
        <TouchableOpacity
        
        onPress={()=>{
          setDelivery(false);
         
            navigation.navigate("RestaurantMap")
          
        }}
        >
          <View style={{...styles.deliveryButton , backgroundColor: delivery ? Colors.grey4 : Colors.buttons}}>
<Text style={styles.deliveryText}>Pick Up</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.filterView}>
    <View style={styles.addressView}>
    <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10}}>
        <Icon
        type="material-community"
        name= "map-marker"
        size={26}
        color={Colors.grey1}
       //  onPress={()=>{navigation.goBack()}}
        
        />
        <Text style={{marginLeft:5}}>22 Beessie street</Text>
      </View>
      <View style={styles.clockView}>
        <Icon
        type="material-community"
        name= "clock-time-four"
        size={26}
        color={Colors.grey1}
       //  onPress={()=>{navigation.goBack()}}
        
        />
        <Text style={{marginLeft:5}}>Now</Text>
      </View>
    </View>
    <View>
    <Icon
        type="material-community"
        name= "tune"
        size={26}
        color={Colors.grey1}
       //  onPress={()=>{navigation.goBack()}}
        
        />
    </View>
    </View>

    <View style={styles.headerTextView}>
      <Text style={styles.headerText}>Categories</Text>
    </View>
   <View>
   
   <FlatList 
    horizontal={true}
   showsHorizontalScrollIndicator={false}
    data = {filterData}
    keyExtractor = {(item)=>item.id}
    extraData = {indexcheck}
    renderItem = {({item, index})=>(
     
        <Pressable
        onPress={()=>{setIndexcheck(item.id)}}
        >
        <View style={indexcheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
     <Image style={{height:60, width:60, borderRadius:30}}
        source= {item.src}
     />
     <View>
      <Text style={indexcheck === item.id ? {...styles.smallCardTextSelected}:{...styles.smallCardText}}>{item.name}</Text>
     </View>
        </View>
      </Pressable>
     
    
  )}
    
    />
   </View>

   <View style={styles.headerTextView}>
      <Text style={styles.headerText}>Free delivery now</Text>
    </View>
    <View>
      {/* <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
        <Text style={{marginLeft:15, fontSize:16,marginTop:-10,marginRight:5}}>options changing in</Text>
        <CountDown
         until={3600}
         size={14}
         digitStyle={{backgroundColor: Colors.lightgreen}}
         digitTxtStyle={{color: Colors.Cardbackground}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Min', s: 'Sec'}}
        />
      </View> */}
      <FlatList
        style={{marginTop:10, marginBottom:10}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data = {restaurantData}
        keyExtractor = {(item, index)=>index.toString()}
        renderItem = {({item})=>(

          <View style={{marginRight:5}}>
            <FoofCard
             screenWidth={SCREEN_WIDTH*0.8}
             images= {item.images}
             restaurantname={item.restaurantname}
             farAway={item.faraway}
             businessAddress={item.bussinessAddress}
             averageReview={item.averageReview}
             numberofReview={item.numberofReview}
            />
            </View>
        )}
      />
    </View>
    <View style={styles.headerTextView}>
      <Text style={styles.headerText}>Promotions available</Text>
    </View>
    <View>
      <FlatList
        style={{marginTop:10, marginBottom:10}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data = {restaurantData}
        keyExtractor = {(item, index)=>index.toString()}
        renderItem = {({item})=>(

          <View style={{marginRight:5}}>
            <FoofCard
             screenWidth={SCREEN_WIDTH*0.8}
             images= {item.images}
             restaurantname={item.restaurantname}
             farAway={item.faraway}
             businessAddress={item.bussinessAddress}
             averageReview={item.averageReview}
             numberofReview={item.numberofReview}
            />
            </View>
        )}
      />
    </View>
   
    <View style={styles.headerTextView}>
      <Text style={styles.headerText}>Restaurants in your area</Text>
    </View>

    <View style={{width: SCREEN_WIDTH, paddingTop:10}}>

      {
        restaurantData.map(item =>(
          <View key={item.id} style={{paddingBottom:20}}>
  <FoofCard
             screenWidth={SCREEN_WIDTH*0.95}
             images= {item.images}
             restaurantname={item.restaurantname}
             farAway={item.faraway}
             businessAddress={item.bussinessAddress}
             averageReview={item.averageReview}
             numberofReview={item.numberofReview}
            />
           
            </View>
        ))
      }

    </View>
      </ScrollView>

      {delivery &&
      
      <View style={styles.floatButton}>
      <TouchableOpacity onPress={()=>{
       navigation.navigate("RestaurantMap")
      }}>
        <Icon
        name='place'
        type='material'
        size={32}
        color={Colors.buttons}
        />
        <Text style={{color:Colors.grey2}}>Map</Text>

      </TouchableOpacity>
    </View>
 
      }
  
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  deliveryButton:{
    paddingHorizontal:20,
    borderRadius:15,
    paddingVertical:5
  },
  deliveryText:{
    marginLeft:5,
    fontSize:16
  },
  filterView:{
    flexDirection:"row", 
    alignItems:"center", 
    justifyContent: "space-evenly",
    marginHorizontal:10,
     marginVertical:10
    
  },
  addressView:{
    flexDirection:"row", 
    backgroundColor: Colors.grey5,
    borderRadius:15,
    paddingVertical : 3,
    justifyContent:"space-between",
    paddingHorizontal:20

  },
  clockView:{
    flexDirection:"row", 
    alignItems:"center", 
    marginLeft:20,
    backgroundColor: Colors.Cardbackground,
    borderRadius:15,
    paddingHorizontal: 5,
    marginRight:20
  },
  headerText:{
    fontSize:22,
    fontWeight:"bold",
    color:Colors.grey1,
    paddingLeft:10
  },
  headerTextView:{
    backgroundColor: Colors.grey5,
    paddingVertical:3
  },
  smallCard:{
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    margin:10,
    height:100,
    width:80,
    backgroundColor: Colors.grey5
  },
  smallCardSelected:{
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
    padding:5,
    margin:10,
    height:100,
    width:80,
    backgroundColor: Colors.buttons
  },
  smallCardText:{
    fontWeight:"bold",
    color:Colors.grey2
  },
  smallCardTextSelected:{
    fontWeight:"bold",
    color:Colors.Cardbackground
  },
  floatButton:{
    position:"absolute",
    bottom:10,
    right:15,
    width:60,
    height:60,
    backgroundColor:Colors.Cardbackground,
    elevation:10,
    alignItems:"center",
    borderRadius:30
  }

})
