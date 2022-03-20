import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {View, Text, TouchableOpacity, StyleSheet, Image, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons'


const ProductComponent = (props) => {
  console.log(props)
  const navigation = useNavigation()
  return (
    <>
    <Text style={Styles.headingStyle}>{props.heading}</Text>
    <Text>Results: {props.results.length}</Text>
    <FlatList 
      horizontal={true}
      data={props.results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return (
          <>
          <Text>{item.name}</Text>
          </>
        )
      }}
    />
    </>
  )
}

const Styles = StyleSheet.create({
  headingStyle:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:10,

  },

    touchable: {
      marginTop:50,
        height: 200,
        width: "100%",
        backgroundColor: "lightgrey",
        borderRadius:10,
        
    },

    image:{
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      height: "70%",
      width:'100%',
      top:-20,
      marginBottom: -5,
      position:'relative',
    },

    productDescribtion:{
      paddingLeft:10,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    productTitle: {
      fontSize:18,
      fontWeight:'700',
    },

})

export default ProductComponent
