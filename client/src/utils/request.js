import axios from 'axios'
import store from '@/store'
import { getToken } from '@/api/auth'

const request = axios.create({
    baseURl: 'http://127.0.0.1/'
})

request.interceptors.request.use(config => {
    config.headers.Authorization = getToken()
    return config
}, error => {
    return Promise.reject(err)
})

export default request