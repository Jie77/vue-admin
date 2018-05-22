import axios from 'axios'

const request = axios.create({
    baseURl: 'http://127.0.0.1:3000/'
})

export default request