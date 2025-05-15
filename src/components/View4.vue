<template>
    <div class="main-view flex-col-ac">
        <div class="cover-img" style="top: 180px;left: 250px;" @click="showMask = true">
            <img src="../assets/images/封面主图.png" alt="">
        </div>
        <div class="text-box text-box-view4">
            <div class="line"></div>
            <p class="p-title">第四展厅：隋唐五代</p>
            <br>
            <br>
            <p class="p-text">
                隋唐五代：<br>
                 隋朝（581—618 年）；唐朝（618—907 年）；五代十国（907—960 年）<br>
                <br>
                与黄河水文化相关的主要历史历史事件：<br>
                公元 444 年（北魏太武帝太平真君五年）薄骨律镇将刁雍在宁夏引黄河水，筑 “艾山渠” 长 40 里，灌田 4 万顷，创 “分段围堰引水” 技术。<br>
                公元 516 年（北魏孝明帝熙平元年）尚书仆射崔楷提出 “疏川导滞、筑堤固防” 两策 ，主张黄河下游 “人工改道” 入渤海，因战乱未实施。<br>
                公元 608 年（隋炀帝大业四年）开永济渠，征发河北民夫百万，引沁水南通黄河，北至涿郡（北京），渠宽 50 步，奠定北方水运网基础。<br>
                公元 624 年（唐高祖武德七年）灵州都督李靖筑 “汉渠”，引黄河水灌田 2000 顷，开创宁夏 “唐徕渠” 前身。<br>
                公元 741 年（唐玄宗开元二十九年）陕郡太守李齐物在三门峡 “开元新河”，避开 “人门、神门、鬼门” 险滩，漕船通过率提升 60%。<br>
            </p>
        </div>
        <Transition name="mask">
            <Mask v-show="showMask" @close-mask="(val) => showMask = val" :src="maskImage">
                <template #content>
                    <div class="div-line"></div>
                    <p class="des-title">第四展厅：隋唐五代</p>
                    <br>
                    <br>
                    <div class="des-item flex-row">
                        <div class="des-img" style="margin-right: 30px;">
                            <img src="../assets/images/views/view4_des_img1.png" alt="" class="ni">
                        </div>
                        <p class="des">
                            公元 584 年（隋文帝开皇四年）开广通渠:宇文恺主持，引渭水从长安至潼关，渠长 300 里，漕运能力提升 3 倍，又称 “富民渠”。<br>
                            公元637年，唐太宗贞观十一年河溢河北县,黄河在河北县（今山西平陆）决口，淹没农田。
                        </p>
                    </div>
                    <div class="des-item flex-row">
                        <p class="des">
                            公元759年，唐肃宗乾元二年,将领李铣为阻安史叛军南下，掘开黄河堤防，导致豫北洪灾。<br>
                            公元813年，唐宪宗元和八年黎阳开分洪道,在黎阳（今河南浚县）开辟黄河分洪道，减轻下游压力。<br>
                            公元893年，唐昭宗景福二年河口北徙,黄河入海口北移至今山东利津附近，河道变迁。<br>
                        </p>
                        <div class="des-img" style="margin-left: 20px;">
                            <img src="../assets/images/views/隋唐2.jpg" alt="" class="ni">
                        </div>
                    </div>
                    <div class="des-item flex-row">
                        <p class="des">
                            公元918年，后梁末帝贞明四年,后梁为阻挡后晋（河东）军队，决黄河堤，河南、山东受灾。<br>
                            公元930年，后唐明宗长兴元年修酸枣至濮州堤防,<br>
                            公元 944 年（后晋开运元年）黄河在澶州（濮阳）至滑州间，决口 7 处，淹没 3 州 17 县，后晋出帝石重贵 “诏免租赋三年”。<br>
                            公元954年，后周太祖显德元年黄河在杨刘（今山东东阿）至博州段泛滥，周太祖下令筑堤防洪
                        </p>
                    </div>
                </template>
            </Mask>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import '@/styles/views.less'
import maskImage from '@/assets/images/views/隋唐3.jpg'
import { ref } from 'vue'
import Mask from './elements/Mask.vue'
const showMask = ref<boolean>(false)
</script>

<style scoped lang="less">
.text-box-view4 {
    width: 480px;
    height: 100vh;
    padding-top: 60px;
    bottom: 0;
    right: 150px;
    transform: translateY(100%);
    animation: riseUp 1s ease;
    animation-delay: 1s;
    animation-fill-mode: forwards;
}

@keyframes rotate {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

.cover-img {
    position: absolute;
    width: 360px;
    border-radius: 50%;
    animation: 10s rotate linear infinite normal;

    img {
        width: 100%;
        height: 100%;
        cursor: pointer;
        object-fit: cover;
    }
}

.des-img {
  min-width: 120px;
  height: 180px;
}
</style>