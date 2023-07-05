<template>
    <div class="tab-bar unselectable">
        <van-tabbar v-model="curIndex" active-color="#ff9854">
            <van-tabbar-item 
            v-for="(item,index) in tabbarBtn" 
            :key="item.text"
            :to="item.path"
            >
                <span>{{ item.text }}</span>
                <template #icon>
                    <img :src="curIndex === index ? item.iconActivePath : item.iconPath" />
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { tabbarBtn } from '@/asset/data/tabbar'

let curIndex = ref(0)

</script>

<style lang="less" scoped>
    .tab-bar{
        --van-tabbar-item-font-size: 12px;
        img{
            height: 28px;
        }
    }
</style>