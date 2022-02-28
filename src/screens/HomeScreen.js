import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather} from '@expo/vector-icons'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const HomeScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.screen}>
        <View style={styles.headerLogoMenu}>
            {/* Menu Button */}
            <TouchableOpacity >
                <Feather name='menu' size={34} style={styles.menu}/> 
            </TouchableOpacity>
            {/* Logo */}
            <TouchableOpacity>
                <Image source={require('../../assets/Icons/Vector.png')} style={styles.logo}/> 
            </TouchableOpacity>
        </View >

        {/* H1 Heading */}
        <Text style={styles.h1}>Find Good food around you</Text>

        {/* Search Bar */}
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:'white',
        height:'100%',
        paddingTop:20,
    },

    headerLogoMenu:{
        marginHorizontal:25,
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
        paddingLeft:25,
        paddingRight:40,
        marginTop:24,
        fontFamily:'helvetica',
        fontSize: 32,
        fontWeight:'700',
        lineHeight:38,
    },

})

export default HomeScreen
