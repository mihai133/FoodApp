import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'



const ProductComponent = (props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('Product Screen')}
    style={Style.touchable}
    
    >
        <Text>Product Component</Text>
    </TouchableOpacity>
  )
}

const Style = StyleSheet.create({
    touchable: {

        
        height: "20%",
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "lightgrey",
        borderRadius:20,
    },
})

export default ProductComponent
