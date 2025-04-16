<template>
  <div :class="curView == 4 ? 'home blue' : 'home yellow'">
    <transition name="fade" mode="out-in" appear>
      <Cover v-if="curView == 0"></Cover>
      <View1 v-else-if="curView == 1"></View1>
      <View2 v-else-if="curView == 2"></View2>
      <View3 v-else-if="curView == 3"></View3>
      <View4 v-else-if="curView == 4"></View4>
      <View5 v-else-if="curView == 5"></View5>
      <View6 v-else-if="curView == 6"></View6>
      <View7 v-else-if="curView == 7"></View7>
      <View8 v-else-if="curView == 8"></View8>
    </transition>
    <div class="arrow-down" @click="pageDown" v-if="show">
      <img class="arrow" src="../assets/images/arrow-down.png" alt="">
    </div>
    <div class="more" v-if="show" @click="showMask = true">
      <i class="iconfont icon-caidan"></i>
    </div>
    <div class="nav-li" v-if="show">
      <ul>
        <li :class="curView == 1 ? '' : 'uncur-li'" @click="curView = 1"></li>
        <li :class="curView == 2 ? '' : 'uncur-li'" @click="curView = 2"></li>
        <li :class="curView == 3 ? '' : 'uncur-li'" @click="curView = 3"></li>
        <li :class="curView == 4 ? '' : 'uncur-li'" @click="curView = 4"></li>
        <li :class="curView == 5 ? '' : 'uncur-li'" @click="curView = 5"></li>
        <li :class="curView == 6 ? '' : 'uncur-li'" @click="curView = 6"></li>
        <li :class="curView == 7 ? '' : 'uncur-li'" @click="curView = 7"></li>
        <li :class="curView == 8 ? '' : 'uncur-li'" @click="curView = 8"></li>
      </ul>
    </div>
    <transition name="fade">
      <div class="mask flex-row" v-show="showMask">
        <div class="close" @click="showMask = false">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="mask-title flex-row-ac jcc">
          <p>史 家 胡 同 博 物 馆</p>
        </div>
        <div class="tab flex-col-ac">
          <div class="tab-line" :style="`transform: translateY(${tabLine}px);`"></div>
          <div class="tab-item" @mouseenter="tabLine = 0"><a @click="firstPage">首 页</a></div>
          <div class="tab-item" @mouseenter="tabLine = 100" @mouseleave="tabLine = 0">
            <a>馆 内 展 陈</a>
          </div>
          <div class="tab-item" @mouseenter="tabLine = 200" @mouseleave="tabLine = 0"><a>参 观 服 务</a></div>
          <div class="tab-item" @mouseenter="tabLine = 300" @mouseleave="tabLine = 0"><a>关 于</a></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import Cover from "@/components/Cover.vue";
import View1 from "@/components/View1.vue";
import View2 from "@/components/View2.vue";
import View3 from "@/components/View3.vue";
import View4 from "@/components/View4.vue";
import View5 from "@/components/view5.vue";
import View6 from "@/components/view6.vue";
import View7 from "@/components/view7.vue";
import View8 from "@/components/view8.vue";
import { ref, onMounted } from "vue";
import { useStore } from '@/stores/useStore';
const pStore = useStore()
const curView = ref<number>(0);
const showMask = ref<boolean>(false);
const show = ref<boolean>(false);
const tabLine = ref<number>(0);
function pageDown() {
  if (curView.value == 8) {
    curView.value = 1;
    return
  }
  curView.value++;
}
onMounted(() => {
  setTimeout(() => {
    curView.value = 1
    show.value = true
  }, 7000);
  pStore.setNavOption('home')
  pStore.title = '导览'
  pStore.curRouteName = 'home'
})
function firstPage() {
  showMask.value = false
  curView.value = 1
}
</script>
<style lang="less" scoped>
@keyframes shakeUp {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-30%);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes arise {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slideToLeft {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.uncur-li {
  opacity: 0.4;
}

.home {
  position: relative;
  width: 100%;
  height: 100vh;
  transition: all 1s;
}

.arrow-down {
  position: absolute;
  width: 60px;
  height: auto;
  bottom: 15px;
  left: 50vw;
  animation: arise 1.5s forwards;

  .arrow {
    width: 60px;
    object-fit: cover;
    animation: shakeUp 1.5s ease infinite;
  }
}

.more {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 32px;
  height: 32px;
  z-index: 5;
  transition: all 1.5s;
  animation: arise 1.5s forwards;

  i {
    color: #574334;
    font-size: 30px;
  }
}

.nav-li {
  position: absolute;
  right: 15px;
  top: 45vh;
  width: 12px;
  height: auto;
  z-index: 5;
  animation: slideToLeft 1s ease forwards;

  li {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-bottom: 10px;
    background-color: #574334;
  }
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.6);

  .close {
    position: absolute;
    padding-top: 2px;
    bottom: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    border: 3px solid #e7dfc1;
    border-radius: 50%;
    z-index: 10;

    i {
      font-weight: 700;
      color: #e7dfc1;
    }
  }

  .mask-title {
    min-width: 101px;
    height: 100%;
    border-right: 2px solid #e7dfc1;

    p {
      color: #e7dfc1;
      font-size: 26px;
      writing-mode: vertical-rl;
    }
  }

  .tab {
    position: relative;
    padding-top: 100px;
    width: 100%;
    height: auto;
    z-index: 5;

    .tab-line {
      position: absolute;
      width: 100%;
      height: 2px;
      top: 200px;
      left: 0;
      background-color: #e7dfc1;
      transition: transform .5s ease;
    }

    .tab-item {
      width: auto;
      height: 100px;
      line-height: 100px;

      a {
        color: #e7dfc1;
        font-size: 40px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
