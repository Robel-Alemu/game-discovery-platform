import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '932aeaf6debf4831badfc8999b48401b'
    }
})