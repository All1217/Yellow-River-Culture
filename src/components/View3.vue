<template>
    <div class="main-view flex-col-ac">
        <div class="text-box text-box-view3">
            <div class="line"></div>
            <p class="p-title">第三展厅：魏晋南北朝</p>
            <br>
            <br>
            <p class="p-text">
                本文所涉魏晋南北朝时期包括：<br>
                三国・曹魏（220—265 年）；西晋（266—316 年）；北魏（386—534 年）<br>
                <br>
                与黄河水文化相关的主要历史历史事件：<br>
                公元 223 年（魏文帝黄初四年）伊、洛河大水，洛阳城水深丈余，冲毁宗庙宫室，文帝曹丕亲赴灾区，首次在都城设 “水衡都尉” 专管河防。<br>
                公元 274 年（晋武帝泰始十年）镇南大将军杜预在富平津（今孟津）建 “河桥”，用 “竹笼装石” 筑基，终结黄河中游无固定桥梁历史。<br>
                公元 444 年（北魏太武帝太平真君五年）薄骨律镇将刁雍在宁夏引黄河水，筑 “艾山渠” 长 40 里，灌田 4 万顷，创 “分段围堰引水” 技术。<br>
                公元 516 年（北魏孝明帝熙平元年）尚书仆射崔楷提出 **“疏川导滞、筑堤固防” 两策 **，主张黄河下游 “人工改道” 入渤海，因战乱未实施。<br>
            </p>
        </div>
        <div class="cover-img" style="top: 80px;right: 300px;width: 400px;">
            <img src="../assets/images/views/view3_main.png" alt="">
        </div>
        <CardBox :pos="'top: 300px;right:500px'" :avatar="img" :title="'魏晋南北朝'" :des="'这一时期洪灾多发，面对自然灾害，古代先民利用各种新技术和新理论与泛滥成灾的河湖斗智斗勇'">
        </CardBox>
    </div>
</template>

<script lang="ts" setup>
import '@/styles/views.less'
import CardBox from '@/components/elements/CardBox.vue'
import img from '@/assets/images/views/魏晋南北.jpg'
</script>

<style scoped lang="less">
.text-box-view3 {
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
    width: 300px;
    height: auto;

    img {
        width: 100%;
        object-fit: cover;
    }
}
</style>