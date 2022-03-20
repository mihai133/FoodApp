import  React, {useState} from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    

  return (
    <View style={Styles.backgroundStyle}>
        <Feather name='search' style={Styles.iconStyle} />
        <TextInput  
            autoCapitalize="none"
            autoCorrect={false}
            placeholder='Search for food' 
            style={Styles.textInput}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
  )
}

const Styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:15 , 
        width:"100%", 
        height: 50, 
        borderRadius:10, 
        backgroundColor:'#F0EEEE', 
        flexDirection:'row'
    },

    iconStyle:{
        alignSelf:'center',
        fontSize:35,
        paddingRight:15, 
        paddingLeft:10,
    },

    textInput:{
        flex:1,
        width:"80%",
        fontSize:18,
},

})

export default SearchBar
