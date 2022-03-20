import axios from "axios";

const Api =  axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer vxUYi4WtaX2R5lCDgzA49QRNqFvgWr6Mikp7fUOeXMKGPegiegxPLhioZSt1DTorhOgvH4EzedduOGHUOS7kvZzVL9xwpmyKvZy1CIUIAt3F9nb29qlfqXG8bsf7YXYx'
    }
})

export default Api