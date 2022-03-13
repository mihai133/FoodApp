
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather} from '@expo/vector-icons'
import ProductComponent from '../components/Product'

const HomeScreen = (props) => {
    console.log(props)
  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.headerLogoMenu}>   
            {/* Logo */}
            <TouchableOpacity>
                <Image source={require('../../assets/Icons/Vector.png')} style={styles.logo}/> 
            </TouchableOpacity>
        </View >

        {/* H1 Heading */}
        <Text style={styles.h1}>Find Good food around you</Text>

        {/* Search Bar */}

        {/* Product Component */}
       <ProductComponent navigation={()=> props.navigation.navigate('Product Screen')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:'white',
        height:'100%',
        padding:20,
    },

    headerLogoMenu:{
        
        flexDirection:'row',
        justifyContent:'space-between',
    },

    logo:{
        height:34.99,
        width:27.32,
    },

    menu:{
        alignSelf:'baseline',
    },

    h1:{
        
        marginTop:24,
        fontFamily:'Helvetica',
        fontSize: 32,
        fontWeight:'700',
        lineHeight:38,
    },

})

export default HomeScreen
