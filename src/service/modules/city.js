import request from "../request/index.js";


export const getCitys = () => request({
    url:"/city/all"
})
