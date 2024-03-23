import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Colors } from '../../../global/Style';
import { menuData, specialData } from '../../../global/Data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const MenuScree = ({navigation,restaurant,onPress}) => {


  return (
  <View style={styles.container}>
  <View>
    {specialData.map((item)=>
    <View key={item.key} style={styles.view1}>
<TouchableOpacity onPress={onPress}>
       <View style={styles.view2}>
        <Icon name='star' type='material-community' color= "gold"/>
         <Text style={styles.text1}>{item.title}</Text>     
       </View>
</TouchableOpacity>
    </View>
    )

    }
  </View>
  <View>
    {menuData.map((item)=>
    <View key={item.key} style={styles.view1}>
<TouchableOpacity onPress={onPress}>
       <View style={styles.view2}>
         <Text style={styles.text1}>{item.title}</Text>     
       </View>
</TouchableOpacity>
    </View>
    )

    }
  </View>
  </View>
  )
}

export default MenuScree;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    view1:{
        paddingHorizontal:10
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        padding:10,
        borderBottomColor: Colors.grey5
    },
    text1:{
        color: Colors.grey3,
        fontSize:18,
        fontWeight:'bold'
    }
   

})
