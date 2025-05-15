<template>
  <div class="main-view flex-col-ac">
    <div class="cover-img" style="top: 140px;right: 160px;" @click="showMask = true">
      <img src="../assets/images/views/view2_main.png" alt="">
    </div>
    <CardBox :pos="'top: 350px;right:550px'" :avatar="img" :title="'铜奔马'"
      :des="'铜奔马，又名马踏飞燕，为东汉青铜器，国宝级文物，1969年10月出土于甘肃省武威市雷台汉墓，现藏于甘肃省博物馆'">
    </CardBox>
    <div class="text-box text-box-view2">
      <div class="line"></div>
      <p class="p-title">秦汉时期</p>
      <br>
      <br>
      <p class="p-text">
        秦汉时期包括：<br>
        秦朝（前221年～前207年）；西汉（前202年～公元8年）；东汉（公元 25 年 —220 年）<br>
        代表历史事件：<br>
        公元前215年（秦始皇三十二年）秦朝整治河防<br>
        公元前 7 年（汉哀帝建平二年）贾让治河三策<br>
        公元 69 年（汉明帝永平十二年）王景治河<br>
        <br>
        这一时期以治河、兴修水利为主。
      </p>
    </div>
    <Transition name="mask">
      <Mask v-show="showMask" @close-mask="(val) => showMask = val" :src="maskImage">
        <template #content>
          <div class="div-line"></div>
          <p class="des-title">第二展厅：秦汉时期</p>
          <br>
          <br>
          <div class="des-item flex-row">
            <p class="des">
              公元前215年（秦始皇32年）秦统一后修筑黄河堤防，推行“决通川防”，整合六国分散堤坝，奠定统一河防体系基础。<br>
              公元前 168 年（汉文帝12年）黄河首次大规模决口，泛滥至淮泗地区，文帝征发 “材官”（工兵）堵塞，开启汉代 “河决 - 堵塞” 循环。<br>
              公元前111年，汉武帝元鼎六年在郑国渠基础上增开六条支渠，扩大关中农田灌溉范围，提升粮食产量。
            </p>
            <div class="des-img" style="margin-left: 20px;">
              <img src="../assets/images/views/秦兵马俑.jpg" alt="" class="ni">
            </div>
          </div>
          <div class="des-item flex-row">
            <div class="des-img" style="margin-right: 20px;">
              <img src="../assets/images/views/春秋战国2.jpg" alt="" class="ni">
            </div>
            <p class="des">
              公元前39年，汉元帝永光五年,黄河在鸣犊口（今山东高唐）决口，原屯氏河断流，洪水泛滥清河郡等地。<br>
              公元前7年（汉哀帝建平二年）提出 “不与水争地” 的上策（改道入海）、“分洪减灾” 的中策（疏浚支流）、“缮完故堤” 的下策，首次系统总结治河理论。
            </p>
          </div>
          <div class="des-item flex-row">
            <p class="des">
              公元 69 年（汉明帝永平十二年）王景治河,征发卒夫数十万人，筑堤自荥阳至千乘海口，创 “十里立一水门” 技术，黄河安流 800 年。<br>
              公元113年，汉安帝永初七年,在黄河下游险段修建“八激堤”（以石笼筑成的挑水坝），减弱水流冲击，护岸防洪。<br>
              公元 204 年（汉献帝建安九年）曹操为北征袁绍，筑 “枋头堰” 堵淇水入白沟，打通河北水运网，奠定隋唐永济渠基础。
            </p>
          </div>
        </template>
      </Mask>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import '@/styles/views.less'
import { ref } from 'vue'
import img from '@/assets/images/views/view2_main.png'
import maskImage from '@/assets/images/views/view2_mask.png'
import CardBox from '@/components/elements/CardBox.vue'
import Mask from './elements/Mask.vue'
const showMask = ref<boolean>(false)
</script>

<style scoped lang="less">
.text-box-view2 {
  width: 400px;
  height: 450px;
  bottom: 0;
  left: 120px;
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
  width: 600px;
  height: auto;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>