import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import {Feather} from '@expo/vector-icons'


const ProductComponent = (props) => {
  console.log(props)
  const navigation = useNavigation()
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('Product Screen')}
    style={Styles.touchable}
    
    >
      
        <Image style={Styles.image} source={props.imageSource} />
        <View style={Styles.productDescribtion}>
        
        {/* title */}
          <Text style={Styles.productTitle}>{props.title}</Text>
        
        {/* rating */}
          <View style={{flexDirection:'row', paddingRight:20,}}>
            <Feather name='star' size={20} />
            <Text style={Styles.productTitle}>{props.rating}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}

const Styles = StyleSheet.create({
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
