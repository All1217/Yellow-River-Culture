<template>
    <div class="main-view flex-col-ac">
        <div class="text-box text-box-view">
            <div class="line"></div>
            <p class="p-title">第六展厅：金元时期</p>
            <br>
            <br>
            <p class="p-text">
                金元时期黄河治理呈现军事利用与生态灾难交织的特点：<br>
                <br>
                金朝阶段（1128-1234）<br>
                以军事决河为主，杜充掘黄导致河道南迁夺淮，江淮生态恶化，后期颁布首部河防法规《河防令》，设立专职河防官员，但受战争制约成效有限<br>
                <br>
                元朝阶段（1264-1351）<br>
                前期注重综合整治：修复宁夏古渠、考察河源、开凿京杭运河避黄险段，编纂《河防通议》系统总结治河经验。<br>
                后期财政困窘致河患失控，白茅口决河引发百万饥民，贾鲁堵口工程直接触发红巾军起义。治河不力成为王朝衰亡重要推手，折射出人河关系的政治化特征，该时期黄河治理在工程技术上有进步，但军事化操作和王朝治理能力缺陷导致生态灾难与社会动荡恶性循环。
            </p>
        </div>
        <div class="cover-img" style="top: 100px;right: 300px;" @click="showMask = true">
            <img src="../assets/images/views/view6_main.png" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import '@/styles/views.less'
import { ref } from 'vue'
const showMask = ref<boolean>(false)
</script>

<style scoped lang="less">
.text-box-view {
    width: 420px;
    height: 100vh;
    padding-top: 60px;
    bottom: 0;
    left: 120px;
    transform: translateY(100%);
    animation: riseUp 1s ease;
    animation-delay: 1s;
    animation-fill-mode: forwards;
}

.cover-img {
    position: absolute;
    width: 400px;

    img {
        width: 100%;
        cursor: pointer;
        object-fit: cover;
    }
}
</style>