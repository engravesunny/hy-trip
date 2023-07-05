<template>
    <div class="city">
        <div class="cityName" @click="selectCity">
            <span>{{ currentCity.cityName || "广州" }}</span>
        </div>
        <div class="position" @click="getPosition">
            <div class="text">我的位置</div>
            <img src="../../../asset/img/home/icon_location.png" alt="">
        </div>
    </div>
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)
console.log('1',currentCity);

const router = useRouter()

let selectCity = () => {
    router.push('/city')
}

let getPosition = () => {
    navigator.geolocation.getCurrentPosition(res=>{
        console.log('获取成功',res);
    }, err => {
        console.log('获取失败',err);
    })
}
</script>

<style lang="less" scoped>
    .city{
            display: flex;
            align-items: center;
            height: 44px;
            padding: 0 20px;
            .cityName{
                flex: 1;
                font-size: 15px;
                color: #333;
            }
            .position{
                width: 74px;
                display: flex;
                align-items: center;
                .text{
                    position: relative;
                    top: 1.5px;
                    color: #666;
                    font-size: 12px;
                    margin-right: 5px;
                }
                img{
                    vertical-align: middle;
                    width: 18px;
                }
            }
        }
</style>