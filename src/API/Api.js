import axios from "axios";

const Api =  axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer ******
    }
})

export default Api
