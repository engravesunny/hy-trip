import { defineStore } from 'pinia'
import { getCitys } from '@/service'

const useCityStore = defineStore('city',{
    state:()=>({
        cityList:[],
        currentCity:{}
    }),
    actions:{
        async getAllCitys(){
            this.cityList = []
            const { data } = await getCitys()
            for(let key in data.data){
                this.cityList.push(data.data[key])
            }
        }
    }
})

export default useCityStore