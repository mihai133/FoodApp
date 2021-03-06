
import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../components/SearchBar'
import ProductComponent from '../components/Product'
import useResults from '../hooks/useResults'

const HomeScreen = ({navigation}) => {
    // State used for the Search bar
    const [term, setTerm] = useState('')
    const [searchApi, errorMessage, results] = useResults()
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    const filterResultsByRating = (rating) => {
        return results.filter(result => {
            return result.rating >= rating
        })
        console.log(results)
    }

  return (
    <SafeAreaView style={styles.screen}>
        <StatusBar backgroundColor="#61dafb"/>
        <View style={styles.headerLogoMenu}>   
            {/* Logo */}
            <TouchableOpacity>
                <Image source={require('../../assets/Icons/Vector.png')} style={styles.logo}/> 
            </TouchableOpacity>
        </View >

        {/* H1 Heading */}
        <Text style={styles.h1}>Find Good food around you</Text>

        {/* Search Bar */}
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
       {errorMessage ?  <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>

        {/* Product Component */}
        {/* Here is going to be a FlatList of Restaurants */}
       <ProductComponent
            heading="Best Rated Places"
            results={filterResultsByRating(4.5)}
            title="Salad Restaurant"
            imageSource={{uri:'https://images.unsplash.com/photo-1602881917760-7379db593981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80'}} 
            navigation={()=> navigation.navigate('Product Screen')} 
       />
       <ProductComponent
            heading="Budget Friendly"
            results={filterResultsByPrice('$$')}
            title="Sushi Restaurant"
            imageSource={{uri:'https://images.unsplash.com/photo-1635526910429-051cf1ed127e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80'}} 
            navigation={()=> navigation.navigate('Product Screen')} 
       />
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
