<template>
    <div class="city unselectable">
        <div class="top">
            <van-search
                v-model="searchValue"
                shape="round"
                show-action
                placeholder="城市/区域/位置"
                @search="onSearch"
                @cancel="onCancel"
            />
            <van-tabs color="#ff9854" v-model:active="tabIndex">
                <van-tab v-for="item in cityList" :key="item.title" :title="item.title"></van-tab>
            </van-tabs>
        </div>
        <group :hotCities=cityList[tabIndex]?.hotCities :cities="cityList[tabIndex]?.cities" />
    </div>
</template>

<script setup>
import group from './components/group.vue'
import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
const cityStore = useCityStore()
cityStore.getAllCitys()
const { cityList } = storeToRefs(cityStore)

console.log(cityList);

const router =useRouter()
let searchValue = ref('')

let onSearch = () => {
    // search
}
let onCancel = () => {
    router.push('/home')
}
let tabIndex = ref(0)
</script>

<style lang="less" scoped>
    .city{
        position: relative;
        z-index: 9;
        height: 100vh;
        background-color: #fff;
        overflow-y: auto;
        .top{
            position: relative;
            z-index: 9;
        }
    }
</style>