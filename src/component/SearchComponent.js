import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Modal, TextInput, FlatList, Keyboard,TouchableOpacity } from 'react-native'
import { Colors } from '../global/Style';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import { filterData } from '../global/Data';
import { useNavigation } from '@react-navigation/native';
import filter from 'lodash/filter'




const SearchComponent = () => {

const navigation = useNavigation()

    const [data, setData] = useState([...filterData]);

    const [modalVisible, setModalVisible] = useState(false);
    const [textInputFocussed, setTextInputFocussed] = useState(true);
    const textInput = useRef(0)


    const contains =({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }

    const handlesearch = text =>{
        const datas = filter(filterData,userSearch =>{
            return contains(userSearch,text)
        })

        setData([...datas])
    }



  return (
   <View style={{alignItems:"center",}}>
    <TouchableWithoutFeedback
    onPress={()=>{
          setModalVisible(true)
        // navigation.navigate("RestaurantMap")
    }}
    >
        <View style={styles.searchArea}>
            <Icon
             name='search'
             type='material'
           style={styles.searchIcon}
           iconStyle={{marginLeft:5}}
             size={32}
            />
            <Text style={{fontSize:15}}>What are you looking for ?</Text>
        </View>
    </TouchableWithoutFeedback>
   
    <Modal
    animationType='fade'
     transparent={false}
      visible={modalVisible}
    >
  <View style={styles.modal}> 
  <View style={styles.view1}>
    <View style={styles.TextInput}>
        <Animatable.View
            animation={textInputFocussed ? "fadeInRight" : "fadeInLeft"}
            duration={400}
        >
            <Icon name= {textInputFocussed ? 'arrow-back':'search'}
            onPress={()=>{
                if(textInputFocussed)
                    setModalVisible(false)
                    setTextInputFocussed(true) }}
            style={styles.Icon2}
            type= "material"
            iconStyle={{marginRight:5}}
            
            />
        </Animatable.View>
        <TextInput
        style={{width:"90%"}}
        placeholder=''
        autoFocus= {false}
        ref={textInput}
        onFocus={()=>{
            setTextInputFocussed(true)
        }}

        onBlur={()=>{
            setTextInputFocussed(false)

        }}
        onChangeText={handlesearch}
        
        />
        <Animatable.View
         animation={textInputFocussed ? "fadeInLeft" : ""}
         duration={400}
        >
            <Icon name= {textInputFocussed ? 'cancel': null}
             style={{marginRight:10}}
             type= "material"
             iconStyle={{color:Colors.grey3}}
            onPress={()=>{
               textInput.current.clear()
                handlesearch()
               
            }}
           
            
            />
        </Animatable.View> 

</View>
    </View> 

  
    <FlatList
    data={data}
    renderItem={({item})=>(
        <TouchableOpacity
        onPress={()=>{
            Keyboard.dismiss
            navigation.navigate("SearchResultScreen",{item:item.name})
             setModalVisible(false)
             setTextInputFocussed(true)
        }}
        >
            <View style={styles.View2}>
<Text style={{color:Colors.grey2, fontSize:15}}>{item.name}</Text>
            </View>

        </TouchableOpacity>
      
    )}
    keyExtractor={item=> item.id}
    />
  </View>

    </Modal>
   </View>
  )
}

export default SearchComponent;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
        color:Colors.grey3,
        fontSize:16
    },
    TextInput:{
        borderWidth:1,
        borderRadius:12,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
        borderColor:"#86939e",
        marginHorizontal:0
    },
    searchArea:{
        marginTop:10,
        width:"94%",
        height:50,
        borderRadius:12,
        borderWidth:1,
        backgroundColor:Colors.grey5,
     borderColor: Colors.grey4,
     flexDirection:"row",
     alignItems:"center"
    
    },
    searchIcon:{
        color:Colors.grey2,
        fontSize:24,
        padding:5
    },
    view1:{
        height:70,
         justifyContent:"center",
        paddingHorizontal:10

    },
  View2:{
      flexDirection:"row",
      padding:15,
      alignItems:"center"
  },
  Icon2:{
    color:Colors.grey2,
    fontSize:24,
    padding:5
  },
  modal:{
  flex:1
  }

})
