<template>
    <div class="home unselectable">
        <nav-bar-home></nav-bar-home>
        <div class="banner">
            <img src="../../asset/img/home/banner.webp" alt="">
        </div>
        <home-search></home-search>
        <div class="date">
            <div class="start">
                <span class="text">入住</span>
                <span>8月25日</span>
            </div>
            <div class="total">
                <span>共1晚</span>
            </div>
            <div class="end">
                <span class="text">离店</span>
                <span>03月26日</span>
            </div>
        </div>
        <div class="limit">
            <div class="sprice">价格不限</div>
            <div class="people">人数不限</div>
        </div>
        <div class="fixText">
            关键字/位置/民宿名
        </div>
    </div>
</template>

<script setup>
import navBarHome from './components/nav-bar-home.vue';
import homeSearch from './components/home-search.vue';
</script>

<style lang="less" scoped>
    .home{
        .banner{
            img{
                width: 100%;
            }
        }
    }
    .date{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        border-bottom: 1px solid rgba(135, 132, 132, 0.1);
        border-top: 1px solid rgba(135, 132, 132, 0.1);
        .start,.end{
            display: flex;
            flex-direction: column;
            .text{
                color: gray;
                font-size: 12px;
                padding: 3px 0;
            }
        }
        .total{
            font-size: 14px;
            color: gray;
        }
    }
    .limit{
        display: flex;
        padding: 10px 20px;
        justify-content: space-between;
        border-bottom: 1px solid rgba(135, 132, 132, 0.1);
        font-size: 15px;
        color: gray;
    }
    .fixText{
        display: flex;
        padding: 10px 20px;
        justify-content: space-between;
        border-bottom: 1px solid rgba(135, 132, 132, 0.1);
        font-size: 15px;
        color: gray;
    }
</style>