<template>
    <div class="main-view flex-col-ac">
        <div class="text-box text-box-view">
            <div class="line"></div>
            <p class="p-title" style="font-size: 24px;">清代：“技术大成”与“制度困局”双重特征</p>
            <br>
            <br>
            <p class="p-text">
                奠基期（1644-1722）<br>
                制度创新：靳辅系统继承潘季驯理论，首创减水坝体系，著《治河方略》确立技术规范<br>
                皇权介入：康熙六次南巡定治河国策，设河兵2万，形成“岁修银”财政保障机制<br>
                科技突破：皮混沌报汛法实现水情日达，拉锡探源终结千年河源争议<br>
                鼎盛期（1723-1795）<br>
                技术革命：嵇曾筠埽工镶垫法提升堵口效率，郭大昌捆厢船法创7天合龙奇迹<br>
                生态调控：乾隆钦定“蓄清刷黄”策略，洪泽湖成治河枢纽，但加剧淮扬生态危机<br>
                文献集成：《行水金鉴》集历代治水智慧，成为世界首部系统水利百科全书<br>
                转型期（1796-1911）<br>
                传统巅峰：青龙冈堵口耗银2000万两，展现传统河工极限动员能力<br>
                西学东渐：林则徐放淤固堤融合生态治理，郑州大工首用德国挖泥船<br>
                体系崩溃：铜瓦厢改道标志自然规律反噬，中牟决口300万灾民催生捻军起义<br>
            </p>
        </div>
        <div class="cover-img" style="top: 100px;right: 70px;width: 800px;" @click="showMask = true">
            <img src="../assets/images/views/view8_main.png" alt="">
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

    img {
        width: 100%;
        cursor: pointer;
        object-fit: cover;
    }
}
</style>