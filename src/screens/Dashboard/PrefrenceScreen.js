import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../global/Style';
import { CheckBox, Icon } from 'react-native-elements';
import { menuData, productData } from '../../global/Data';

const PrefrenceScreen = ({navigation,route}) => {

const {name,details,price} = productData[route.params.index]

  return (
   <View style={styles.container}>
   <ScrollView>
    <View style={styles.header}>
    <Image
    style={styles.backgroundImage}
    source={{uri : "https://img.lovepik.com/free-png/20211215/lovepik-thanksgiving-food-png-image_401653321_wh1200.png"}}
    />
    </View>
    <View style={styles.bar}>
        <Text style={styles.title}>Choose a Prefrence</Text>
    </View>
    <View style={styles.view12}>
    <Icon
 type="material-community"
 name="arrow-left"
 size={30}
 color={Colors.Cardbackground}
 onPress={()=>{navigation.goBack()}}

/>

    </View>
    <View style={styles.view1}>
        <Text style={styles.text1}>{name}</Text>
        <Text style={styles.text2}>{details}</Text>

    </View>
    <View style={styles.view2}>
        <Text style={styles.text3}>Choose a meal type</Text>
        <View style={styles.view3}>
        <Text style={styles.text4}>REQUIRED</Text>

    </View>
    </View>
    <View style={styles.view4}>
    <View style={styles.view5}>
    <View style={styles.view6}>
        <CheckBox
        center
        checkedIcon= "dot-circle-o"
        uncheckedIcon= "circle-o"
        checked= {true}
        checkedColor={Colors.buttons}
        />
        <Text style={styles.text5}>- - - - -</Text>
        </View>
        <Text style={styles.text6}>R{price}</Text>
        </View>  
    </View>
    {
        menuData.map(item=><View key={item.id}>

            
        </View>)
    }
   
   </ScrollView>
   </View>
  )
}

export default PrefrenceScreen;

const styles = StyleSheet.create({
    fill:{
        flex:1
    },
    container:{
        flex:1
    },
    content:{
        flex:1
    },
    header:{
       width:"100%",
        backgroundColor:Colors.buttons,
        overflow:"hidden",
        height:180,
        // height:HEADER_MAX_HEIGHT
    },
    backgroundImage:{
       
        width:"100%",
        height:180,
        // height:HEADER_MAX_HEIGHT,
        resizeMode:"cover",
    },
    bar:{
        top:0,
        left:0,
        right:0,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        height:32,
        backgroundColor:'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38

    },
    title:{
        color:"white",
        fontSize:28,
        fontWeight:"bold",
        marginLeft:40
    },
    scrollviewContent :{
        // paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0
    },
    row:{
        height:40,
        margin:16,
        backgroundColor:"#D3D3D3",
        alignItems:"center",
        justifyContent:"center"
    },
    view1:{
        backgroundColor:"white",
        padding:10,
        marginBottom:10
    },
    text1:{
        fontSize:15,
        color:Colors.grey1,
        fontWeight:"bold"
    },
    text2:{
        fontSize:14,
        color:Colors.grey2,
       marginTop:5
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    text3:{
        fontSize:16,
        color:Colors.grey1,
        fontWeight:"bold",
       marginLeft:10
    },
    view3:{
        borderWidth:3,
        borderColor:Colors.grey5,
        borderRadius:5,
        marginRight:10
    },
    text4:{
        color:Colors.grey3,
        fontWeight:"bold",
        padding:5

    },
    view4:{
        backgroundColor:"white",
        marginBottom:15
    },
    view5:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingRight:10
    },
    view6:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    text5:{
 fontWeight:"bold",
 marginLeft:-10
    },
    text6:{
        fontSize:16,
        fontWeight:"bold"
    },
    view7:{
         flexDirection:"row",
         alignItems:"center",
         justifyContent:"space-between"
    },
    view8:{
        fontSize:16,
        fontWeight:"bold",
                color:Colors.grey1,
                marginLeft:10
    },
    view9:{
        borderWidth:3,
        borderColor:Colors.grey5,
        borderRadius:5,
        marginRight:10
    },
    text7:{
        fontWeight:"bold",
        color:Colors.grey3,
        padding:5
    },
    view10:{
        backgroundColor:"white",
        marginBottom:15
    },
    view11:{
        flexDirection:"row",
        alignItems:"center"
    },
    view12:{
        position:"absolute",
        top:35,
        left:15,

    },
    view13:{
        paddingBottom:0,
        marginTop:5
    },
    text8:{
        paddingLeft:10,
        fontWeight:"bold",
        fontSize:18
    },
    view14:{
        flexDirection:"row",
        backgroundColor:Colors.Cardbackground,
        paddingVertical:5,
        marginBottom:0,
        justifyContent:"space-between",
        paddingHorizontal:15,
        marginBottom:5,
    },
    view15:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:Colors.lightgreen,
        alignItems:"center",
        justifyContent:"center",
    },
    text9:{
        fontWeight:"bold",
        fontSize:18
    },
    view16:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:Colors.lightgreen,
        alignItems:"center",
        justifyContent:"center",
    },
    view17:{
        alignItems:"center",
        padding:10,
        backgroundColor:Colors.Cardbackground,
        marginTop:-5
    },
    view18:{
        backgroundColor: Colors.buttons,
        alignItems:"center",
        paddingVertical:5,
        marginBottom:0,
        width:320,
        borderRadius:12,
    },
    text10:{
        padding:10,
        fontWeight:"bold",
        fontSize:18
    }






})
