<template>
  <transition name="slide">
    <div class="nav-box flex-row-ac jc-spb" v-if="showNav" @mouseleave="showNav = false">
      <div class="nav-title">
        <span class="title">{{ pStore.title }}</span>
      </div>
      <div class="nav-bar">
        <a @click="jumpTo({ name: 'home' })" class="nav-item"
          :style="`background-color: ${curRoute == 'home' ? 'var(--itemBgcHight)' : ''};`">
          导览
          <div class="bottom-bar" v-show="curRoute == 'home'"></div>
        </a>
        <a @click="jumpTo({ name: 'secondPage' })" class="nav-item"
          :style="`background-color: ${curRoute == 'secondPage' ? 'var(--itemBgcHight)' : ''};`">
          文化遗产
          <div class="bottom-bar" v-show="curRoute == 'secondPage'"></div>
        </a>
        <a @click="jumpTo({ name: 'sunView' })" class="nav-item"
          :style="`background-color: ${curRoute == 'sunView' ? 'var(--itemBgcHight)' : ''};`">
          治水之智
          <div class="bottom-bar" v-show="curRoute == 'sunView'"></div>
        </a>
        <a @click="jumpTo({ name: 'GovView' })" class="nav-item"
          :style="`background-color: ${curRoute == 'GovView' ? 'var(--itemBgcHight)' : ''};`">
          河吏之鉴
          <div class="bottom-bar" v-show="curRoute == 'GovView'"></div>
        </a>
        <a @click="jumpTo({ name: 'thirdPage' })" class="nav-item"
          :style="`background-color: ${curRoute == 'thirdPage' ? 'var(--itemBgcHight)' : ''};`">
          现代之涌
          <div class="bottom-bar" v-show="curRoute == 'thirdPage'"></div>
        </a>
      </div>
    </div>
  </transition>
  <div :class="showBtn ? 'show-btn nav-c-btn flex-row-ac jcc' : 'hide-btn nav-c-btn flex-row-ac jcc'"
    @mouseenter="onMouseEnterBtn" @mouseleave="showBtn = false">
    <i class="iconfont icon-shouyeweixuanzhong" style="color: var(--btnColor);"></i>
  </div>
  <router-view />
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useStore } from '@/stores/useStore';
import { useRouter, RouteLocationRaw } from 'vue-router';

const showNav = ref<boolean>(false)
const showBtn = ref<boolean>(false)
const router = useRouter()
const pStore = useStore()

const title = ref<string>(pStore.title)
const curRoute = ref<string>(pStore.curRouteName)
function onMouseEnterBtn() {
  showBtn.value = true
  showNav.value = true
}
function jumpTo(path: RouteLocationRaw) {
  router.push(path)
}
watch(() => pStore.title, (newVal) => {
  if (newVal) {
    title.value = newVal
  }
}
)
watch(() => pStore.curRouteName, (newVal) => {
  if (newVal) {
    curRoute.value = newVal
  }
}
)
</script>
<style lang="less">
.show-btn {
  opacity: 1;
}

.hide-btn {
  opacity: 0;
}

.nav-c-btn {
  position: absolute;
  right: 20px;
  top: 14px;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 4px;
  transition: opacity .5s;
  cursor: pointer;
  z-index: 50;

  i {
    font-size: 26px;
  }
}

.nav-box {
  position: absolute;
  padding: 0 100px 0 20px;
  width: 100%;
  height: 60px;
  left: 0;
  top: 0;
  background-color: var(--bgc);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.5);
  z-index: 45;

  .nav-title {
    width: auto;
    height: 30px;
    line-height: 30px;

    .title {
      line-height: 30px;
      font-weight: 700;
      text-align: center;
      font-size: 20px;
      color: var(--textColor);
    }
  }

  .nav-bar {
    width: auto;
    height: 60px;

    .nav-item {
      position: relative;
      display: inline-block;
      padding: 0 12px;
      width: auto;
      height: 60px;
      font-size: 15px;
      color: var(--textColor);
      line-height: 60px;

      .bottom-bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: var(--barBgc);
      }
    }

    .nav-item:hover {
      background-color: var(--itemBgc);
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all .5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}

.slide-enter-to,
.slide-leave {
  transform: translateY(0);
}
</style>
