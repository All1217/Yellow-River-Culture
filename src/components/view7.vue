<template>
    <div class="main-view flex-col-ac">
        <div class="text-box text-box-view">
            <div class="line"></div>
            <p class="p-title" style="font-size: 24px;">明朝：“保漕固本”与生态治理的博弈</p>
            <br>
            <br>
            <p class="p-text">
                初期（1368-1435）<br>
                军事优先：洪武朝以堵口固堤为主，修复宁夏古渠保障军屯，兰州浮桥强化西北控制<br>
                漕运奠基：永乐朝宋礼重开会通河，确立“黄运一体”格局，开启治河保漕传统<br>
                中期（1436-1572）<br>
                体系成型：专设河道总督，徐有贞分流入海、白昂筑堤束水，刘大夏创太行堤护漕<br>
                南北之争：黄河频繁改道引发南流北流争议，朱衡开南阳新河突破治河困局<br>
                鼎革期（1573-1620）<br>
                理论突破：潘季驯四任总河，推行“束水攻沙”方略，筑高家堰形成清口枢纽，著《河防一览》奠定理论基础<br>
                工程革新：李化龙开泇河避黄，宁夏石闸控水，兰州天车提灌展现技术创新<br>
                衰亡期（1621-1644）<br>
                系统崩溃：黄淮连年决溢，杨一魁分黄导淮失败，漕运瘫痪加剧财政危机<br>
                生态反噬：河旱交替引发流民潮，李自成部吸纳黄泛饥民，治河失序加速王朝崩溃<br>
            </p>
        </div>
        <div class="cover-img" style="top: 100px;right: 250px;" @click="showMask = true">
            <img src="../assets/images/views/view7_main.png" alt="">
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
    width: 500px;
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