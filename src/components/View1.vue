<template>
  <div class="main-view flex-col-ac">
    <div class="cover-img" style="top: 120px;left: 150px;" @click="showMask = true">
      <img src="../assets/images/views/夏商周2.png" alt="" style="height: 400px;">
    </div>
    <div class="cover-img" style="top: 40px;left: 300px;" @click="showMask = true">
      <img src="../assets/images/views/夏商周1.png" alt="" style="width: 850px;">
    </div>
    <div class="text-box text-box-view1">
      <div class="line"></div>
      <p class="p-title">夏朝至春秋战国</p>
      <!-- <p class="p-title"></p> -->
      <br>
      <br>
      <br>
      <p class="p-text">
        这一时期在黄河流域发生的大事件主要有：<br>
        公元前21世纪（夏朝初期）：大禹治水<br>
        前16世纪～前11世纪：商都数迁<br>
        公元前651年（齐桓公称霸时期）： 葵丘之会<br>
        公元前602年（周定王5年）：禹河大徙（首次大改道）<br>
        公元前422年（魏文侯时期）：引漳十二渠<br>
        公元前332年（赵肃侯18年）：赵国决河灌齐魏<br>
        公元前246年（秦王政元年）：开郑国渠<br>
        公元前225年（秦王政22年）：秦灌大梁<br>
      </p>
    </div>
    <CardBox :pos="'top: 540px;left:200px'" :avatar="cardImg1" :title="'大禹治水'" :des="'大禹疏导黄河，划分九州，奠定早期黄河河道（史称“禹河故道”）'">
    </CardBox>
    <CardBox :pos="'top: 540px;left:600px'" :avatar="cardImg2" :title="'商都数迁'"
      :des="'因黄河泛滥、战乱等因素，商朝都城频繁迁移（如亳→隞→相→邢→殷），反映早期黄河下游水患对政治中心的影响。'"></CardBox>
    <Transition name="mask">
      <Mask v-show="showMask" @close-mask="(val) => showMask = val" :src="maskImage">
        <template #content>
          <div class="div-line"></div>
          <p class="des-title">第一展厅：先秦时期</p>
          <br>
          <br>
          <div class="des-item flex-row">
            <div class="des-img" style="margin-right: 30px;">
              <img src="../assets/images/views/view1_mask1.png" alt="" class="ni">
            </div>
            <p class="des">
              大禹治水：约4000年前的尧舜时代，当时黄河流域洪水泛滥威胁部落生存。大禹作为鲧之子，接替其父未竟的治水任务，摒弃 “堵截” 策略，改用 “疏导法”，通过开凿河道、修建堤坝、划定 “九州”
              分区治理，引导洪水入海；他历时 13 年，“三过家门不入”，组织民众使用耒耜等工具协同劳作，成功平息水患，使黄河中下游平原成为良田，奠定农业社会基础。
            </p>
          </div>
          <div class="des-item flex-row">
            <p class="des">
              商朝前期因黄河频繁泛滥、水患频发，曾
              “五迁其都”。黄河改道、洪水淹没农田与聚落，迫使商王仲丁、祖乙等多次迁都避患。直至盘庚迁都至殷（今安阳），选位于太行山东麓高地、避开黄河主河道的洹水流域，既防水患又得灌溉之利，此后商朝 273
              年未再迁都，殷成为稳定都城，孕育了殷墟文明。
            </p>
            <div class="des-img" style="margin-left: 20px;">
              <img src="../assets/images/views/view1_mask2.png" alt="" class="ni">
            </div>
          </div>
        </template>
      </Mask>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import '@/styles/views.less'
import CardBox from '@/components/elements/CardBox.vue'
import cardImg1 from '@/assets/images/views/大禹治水_小.jpg'
import cardImg2 from '@/assets/images/views/商都数迁_小.jpg'
import maskImage from '@/assets/images/views/方尊.png'
import Mask from './elements/Mask.vue'
import { ref } from 'vue'
const showMask = ref<boolean>(false)
</script>

<style scoped lang="less">
.text-box-view1 {
  width: 400px;
  height: 500px;
  bottom: 0;
  right: 130px;
  transform: translateY(100%);
  animation: riseUp 1s ease;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

.des-img {
  min-width: 120px;
  height: 180px;
}

.cover-img {
  position: absolute;
  width: auto;
  height: auto;

  img {
    cursor: pointer;
    object-fit: cover;
  }
}
</style>
