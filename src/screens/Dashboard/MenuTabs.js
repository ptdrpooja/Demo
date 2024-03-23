import React from 'react'
import { View, StyleSheet, Text,FlatList } from 'react-native';
import MenuCard from '../../component/MenuCard';
import { productData } from '../../global/Data';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Route1 = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.view1}>
         <FlatList
         showsVerticalScrollIndicator = {false}
         style={{backgroundColor:"white"}}
         data={productData}
         keyExtractor={(item,index)=>index.toString()}
         renderItem={({item,index})=>(
          <TouchableOpacity onPress={()=>{navigation.navigate("PrefrenceScreen",{index})}}>
            <MenuCard
            productName={item.name}
          price={item.price}
          image={item.image}
          productDetails={item.details}
            />
          </TouchableOpacity>
         )}
         />

        </View>

    </View>
  )
}

export default Route1;

export const Route2 = ()=>(<View style={styles.container}/>)
export const Route3 = ()=>(<View style={styles.container}/>)
export const Route4 = ()=>(<View style={styles.container}/>)
export const Route5 = ()=>(<View style={styles.container}/>)
export const Route6 = ()=>(<View style={styles.container}/>)
export const Route7 = ()=>(<View style={styles.container}/>)
export const Route8 = ()=>(<View style={styles.container}/>)




const styles = StyleSheet.create({
    container:{
      flex:1,


    },
    view1:{
        marginTop:5,
        paddingBottom:20
    },
    scene:{
        backgroundColor:"#673ab7"
    }
})
