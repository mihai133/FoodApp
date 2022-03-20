import { useState, useEffect} from 'react'
import Api from '../API/Api'

export default () => {
    // State used for the API
    const [results, setResults] = useState([])

    // State for Error catch
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async(searchTerm) => {
        try{
        const response = await Api.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
            // response = response.data 
            setResults(response.data.businesses)   
            console.log(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong...')
        }
       
    };

    useEffect(()=>{
        searchApi('pasta')
    },[])

    return [searchApi, errorMessage, results]
}