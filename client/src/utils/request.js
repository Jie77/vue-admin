import axios from 'axios'
import store from '@/store'

const request = axios.create({
    baseURl: 'http://127.0.0.1/'
})

request.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers[' X-Token ']
    }
    
    return config
}, error => {
    console.log(error)
})

export default request