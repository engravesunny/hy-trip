import axios from 'axios'
import { BASE_URL,TIME_OUT } from './config'


const request = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

request.interceptors.request.use(config=>{
    return config
},err=>{
    return Promise.reject(err)
})

request.interceptors.response.use(config=>{
    return config
},err=>{
    return Promise.reject(err)
})


export default request