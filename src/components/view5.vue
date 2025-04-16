<template>
    <div class="main-view flex-col-ac">
        <div class="cover-img" style="top: 100px;left: 500px;" @click="showMask = true">
            <img src="../assets/images/views/宋朝.jpg" alt="">
        </div>
        <Transition name="mask">
            <Mask v-show="showMask" @close-mask="(val) => showMask = val" :src="maskImage">
                <template #content>
                    <div class="div-line"></div>
                    <p class="des-title">第五展厅：宋朝</p>
                    <br>
                    <br>
                    <div class="des-item flex-row">
                        <p class="des">
                            公元965年，宋太祖乾德三年,黄河在阳武县（今河南原阳）决口，淹没开封以东州县，宋廷征调民夫堵口修复。<br>
                            公元967年，宋太祖乾德五年,北宋正式确立黄河堤防“岁修”制度，每年冬春征调沿河民力加固堤防，形成常态化维护。<br>
                            公元1000年，宋真宗咸平三年,黄河在郓州（今山东东平）决口，京东路受灾严重，真宗下诏免除灾区赋税。<br>
                            1019年，宋真宗天禧三年,黄河在滑州天台山决溢，洪水冲毁汴河堤堰，漕运中断，堵口工程持续三年。<br>
                        </p>
                    </div>
                    <div class="des-item flex-row">
                        <p class="des">
                            1034年，宋仁宗景祐元年,黄河在横陇埽（今河南濮阳东）决口，河道北移入渤海，结束东汉以来“京东故道”。<br>
                            1048年，宋仁宗庆历八年,黄河在商胡埽（今河南濮阳东）决口，形成“北流”新河道，河北路沦为黄泛区。<br>
                            1069年，宋神宗熙宁二年,王安石变法颁布《农田水利法》，鼓励地方兴修水利，黄河沿岸掀起开渠淤田高潮。<br>
                            1081～1094年朝廷多次强塞北流、挽河东归，但屡修屡决，耗费国力，成为党争焦点。<br>
                        </p>
                    </div>
                </template>
            </Mask>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import '@/styles/views.less'
import maskImage from '@/assets/images/views/宋朝.jpg'
import { ref } from 'vue'
import Mask from './elements/Mask.vue'
const showMask = ref<boolean>(false)
</script>

<style scoped lang="less">
.cover-img {
    position: absolute;
    width: 500px;

    img {
        width: 100%;
        cursor: pointer;
        object-fit: cover;
    }
}

.des-img {
  min-width: 120px;
  height: 180px;
}
</style>