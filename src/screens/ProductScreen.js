import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



const ProductScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={Styles.safeAreaStyle}>
      <TouchableOpacity style={Styles.buttonStyle} onPress={() => navigation.pop()}>
        <Text style={Styles.ButtonText}>{`< Go Back`}</Text>
      </TouchableOpacity>

    <View>
        <Text>Product Screen</Text>
    </View>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({

  safeAreaStyle:{
    flex:1,
    backgroundColor:'white',
    alignItems:"flex-start",
    padding:10,
  },
  
  buttonStyle:{
    alignSelf:'flex-start',
    
    height:30,
    width: 100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'lightgrey',
    borderRadius: 10,
  },
  
  ButtonText:{
    fontWeight: 'bold',
    fontSize: 16,
    
  }
})

export default ProductScreen
