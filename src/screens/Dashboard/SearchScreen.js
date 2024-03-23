import React from 'react';
import { FlatList, ImageBackground, TouchableWithoutFeedback, View , StyleSheet, Dimensions, Text} from 'react-native'
import SearchComponent from '../../component/SearchComponent';
import { filterData } from '../../global/Data';
import { Colors } from '../../global/Style';
import { useNavigation } from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width

const SearchScreen = ({navigation}) => {


  return (
    <View style={{flex:1,marginBottom:10}}>
   <SearchComponent/>
   <View style={{marginTop:10}}>
   <View >
    <FlatList
    horizontal= {false}
    showsVerticalScrollIndicator={false}
    numColumns={2}
    ListHeaderComponent={<Text style={styles.listHeader}>Top categories</Text>}
    ListFooterComponent={<Footer/>}
    style={{marginBottom:1,}}
    data={filterData}
    keyExtractor = {(item)=>item.id}
    renderItem = {({item, index})=>(
      <TouchableWithoutFeedback
      onPress={()=>{
        navigation.navigate("SearchResultScreen",{item:item.name})
       }}
      >
        <View style={styles.imageView}>
          <ImageBackground
            style={styles.image}
            source= {item.src}
          >
            <View style={styles.textView}>
           <Text style={{color:Colors.Cardbackground}}>{item.name}</Text>   
         

            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
  )}
    />
   </View>
   </View>
   </View>
  )
}
 
const Footer = ()=>{

  const navigation = useNavigation()

  return(
    <View style={{marginTop:10,marginBottom:30}}>
   <View style={{}}>
     <FlatList
     horizontal= {false}
     showsVerticalScrollIndicator={false}
     numColumns={2}
     ListHeaderComponent={<Text style={styles.listHeader}>More categories</Text>}
    
     style={{marginBottom:10,}}
     data={filterData}
     keyExtractor = {(item)=>item.id}
     renderItem = {({item, index})=>(
       <TouchableWithoutFeedback
       onPress={()=>{
        navigation.navigate("SearchResultScreen",{item:item.name})
       }}
       
       >
         <View style={styles.imageView}>
           <ImageBackground
             style={styles.image}
             source= {item.src}
           >
             <View style={styles.textView}>
            <Text style={{color:Colors.Cardbackground}}>{item.name}</Text>   
          
 
             </View>
           </ImageBackground>
         </View>
       </TouchableWithoutFeedback>
   )}
     />
    </View>
    </View>
  )
}

export default SearchScreen;
const styles = StyleSheet.create({

imageView:{
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center",
  width: SCREEN_WIDTH*0.4475,
  height:SCREEN_WIDTH*0.4475,
  marginLeft:SCREEN_WIDTH*0.035,
  marginBottom:SCREEN_WIDTH*0.035,
},
image:{
  width: SCREEN_WIDTH*0.4475,
  height:SCREEN_WIDTH*0.4475,
  borderRadius:10
},
listHeader:{
  fontSize:16,
  color:Colors.grey2,
  paddingBottom:10,
  marginLeft:12
},
textView:{
  width: SCREEN_WIDTH*0.4475,
  height:SCREEN_WIDTH*0.4475,
  alignItems:"center",
 justifyContent:"center",
 backgroundColor:'rgba(52, 52, 52, 0.3)'
}

})
