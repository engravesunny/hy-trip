<template>
    <div class="content">
        <div class="hot">
            <div class="title">热门</div>
            <div class="hot_citys">
                <ul>
                    <li v-for="item in hotCities" @click="selectCity(item)">
                        {{ item.cityName }}
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div class="group-item" v-for="item in cities" :key="item.group">
            <div class="groupTitle">{{ item.group }}</div>
            <div class="list">
                <div class="list-item" v-for="list_item in item.cities" :key="list_item.cityId">
                    {{ list_item.cityName }}
                </div>
            </div>
        </div> -->
        <van-index-bar :index-list="cities.map(item=>item.group)">
            <template v-for="item in cities"  :key="item.group">
                <van-index-anchor :index="item.group" />
                <template v-for="list_item in item.cities" :key="list_item.cityId">
                    <van-cell :title="list_item.cityName" @click="selectCity(list_item)" />
                </template>
            </template>
        </van-index-bar>
    </div>
</template>

<script setup>
import useCityStore from '@/store/modules/city';
const cityStore = useCityStore()

const router = useRouter()


let selectCity = (item) => {
    cityStore.currentCity = item
    router.back()
}

const props = defineProps({
    hotCities:{
        type:Array,
        default:[]
    },
    cities:{
        type:Array,
        default:[]
    }
})

</script>

<style lang="less" scoped>
.content{
    padding: 5px 0 0 0;
    height: calc(100vh - 98px);
    overflow-y: auto;
    .hot{
        .title{
            font-size: 15px;
            padding: 15px;
        }
        .hot_citys{
            ul{
                width: 100%;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                li{
                    border-radius: 25px;
                    width: 20%;
                    padding: 4px 0px;
                    margin: 10px 5px;
                    text-align: center;
                    background-color: #fff4ec;
                    font-size: 15px;
                }
            }
        }
    }
}
    
</style>