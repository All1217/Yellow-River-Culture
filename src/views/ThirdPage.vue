<template>
  <div class="third-page-container">
    <div class="gap flex-row-ac jcc">
      <div class="big-title flex-row-ac" style="margin: auto;">
        <DataLine style="width: 25px;height: 25px;margin-right: 15px;color: #18191c;" />
        现代之涌
      </div>
    </div>
    <div class="main-box flex-row">
      <div class="left flex-col">
        <div class="lt">
          <h1 ref="danmuBoxTitle">评论弹幕图</h1>
          <div class="lt-background"></div>
          <div class="danmu-canvas" ref="danmuBox"></div>
        </div>
        <div class="lb flex-row">
          <div class="lbl chart-box">
            <h2>用户IP属地TOP10</h2>
            <div ref="lblChart" class="chart cc"></div>
          </div>
          <div class="lbr chart-box">
            <h2>评论情绪分布圆环图</h2>
            <div ref="lbrChart" class="chart cc"></div>
          </div>
        </div>
      </div>
      <div class="right flex-col">
        <div class="rt chart-box">
          <h2>情绪关键词——关系图</h2>
          <div ref="rbtChart" class="chart cc"></div>
        </div>
        <div class="rb chart-box">
          <h2>正文情绪分布圆环图</h2>
          <div ref="rbbChart" class="chart cc"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useStore } from '@/stores/useStore';
import { danmuText, fsConfig, colorList } from '@/js&ts/danmu'
import * as echarts from 'echarts';
import { options } from '@/js&ts/echartsOptions'
const pStore = useStore()
const danmuBox = ref<HTMLDivElement | null>(null);
const danmuBoxTitle = ref<HTMLElement | null>(null);
var clearInter = null
var addDanmuInter = null

const rbtChart = ref<HTMLDivElement | null>(null);
const rbbChart = ref<HTMLDivElement | null>(null);
const lbrChart = ref<HTMLDivElement | null>(null);
const lblChart = ref<HTMLDivElement | null>(null);
var rbtIns: echarts.ECharts | null = null;
var rbbIns: echarts.ECharts | null = null;
var lbrIns: echarts.ECharts | null = null;
var lblIns: echarts.ECharts | null = null;

function initChart() {
  if (rbtChart.value) {
    rbtIns = echarts.init(rbtChart.value);
    rbtIns.setOption(options.TRT);
    window.addEventListener('resize', () => {
      if (rbtIns) {
        rbtIns.resize();
      }
    });
  }
  if (rbbChart.value) {
    rbbIns = echarts.init(rbbChart.value);
    rbbIns.setOption(options.TRB);
    window.addEventListener('resize', () => {
      if (rbbIns) {
        rbbIns.resize();
      }
    });
  }
  if (lbrChart.value) {
    lbrIns = echarts.init(lbrChart.value);
    lbrIns.setOption(options.LBR);
    window.addEventListener('resize', () => {
      if (lbrIns) {
        lbrIns.resize();
      }
    });
  }
  if (lblChart.value) {
    lblIns = echarts.init(lblChart.value);
    lblIns.setOption(options.LBLTotal);
    window.addEventListener('resize', () => {
      if (lblIns) {
        lblIns.resize();
      }
    });
  }
}

function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function addDanmu() {
  if (danmuBox.value) {
    const fontSize: number = Math.random() * 100 % (fsConfig[1] - fsConfig[0] + 1) + fsConfig[0]
    const boxHeight: number = Math.floor(danmuBox.value.offsetHeight)
    const titleHeight = danmuBoxTitle.value.offsetHeight + 10
    const height = fontSize + 6;
    let top = Math.floor(Math.random() * 10000 % (boxHeight - height))
    top = top < titleHeight ? titleHeight + 10 : top;

    const newElement = document.createElement('span');
    newElement.classList.add('danmu');
    newElement.textContent = getRandomElement<string>(danmuText);
    newElement.style.color = getRandomElement<string>(colorList)
    newElement.style.lineHeight = height + 'px'
    newElement.style.fontSize = fontSize + 'px'
    newElement.style.top = top + 'px'
    danmuBox.value.appendChild(newElement);
  }
}
const clearDanmu = () => {
  const es = document.querySelectorAll('.danmu');
  es.forEach((element) => {
    const rect = (element as HTMLElement).getBoundingClientRect();
    const offsetRight = rect.right;
    if (offsetRight <= -450) {
      (element as HTMLElement).remove();
    }
  });
}
onMounted(() => {
  pStore.setNavOption('thirdPage')
  pStore.title = '现代之涌'
  pStore.curRouteName = 'thirdPage'
  clearInter = setInterval(() => {
    clearDanmu();
  }, 1000);
  addDanmuInter = setInterval(() => {
    addDanmu()
  }, 100)
  initChart();
})
onUnmounted(() => {
  clearInterval(clearInter)
  clearInterval(addDanmuInter)
})
</script>
<style lang="less">
@keyframes slide {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-1920px);
  }
}

.cc {
  background: rgba(255, 255, 255, .1);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.danmu {
  position: absolute;
  display: inline-block;
  right: 0;
  width: auto;
  height: auto;
  animation: slide 5s linear forwards;
}

.chart-box {
  position: relative;
  padding: 10px;

  h2 {
    position: absolute;
    left: 0;
    top: 20px;
    width: 100%;
    height: 24px;
    font-size: 20px;
    color: #D1872A;
    line-height: 24px;
    text-align: center;
    z-index: 5;
  }

  .chart {
    width: 100%;
    height: 100%;
    z-index: 4;
  }
}

.third-page-container {
  width: 100%;
  height: 100vh;
  padding: 0 0 30px 0;
  background: url(../assets/images/背景/浅色背景4.png) no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .gap {
    width: 100%;
    height: 64px;
    margin-bottom: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

    .big-title {
      color: #18191c;
      font-weight: bold;
      font-size: 25px;
    }
  }

  .main-box {
    margin: 0 auto;
    width: 1280px;
    height: 800px;
    min-width: 1024px;
    max-width: 1920px;

    .left {
      flex: 2;

      .lt {
        flex: 2;
        padding: 10px 10px 0 10px;
        position: relative;

        .lt-background {
          width: 100%;
          height: 100%;
          background: url(../assets/images/背景/弹幕背景.png) no-repeat;
          background-size: 100% 100%;
          border-radius: 8px;
        }

        h1 {
          position: absolute;
          top: 15px;
          left: 0;
          width: 100%;
          color: #D1872A;
          text-align: center;
          z-index: 5;
        }

        .danmu-canvas {
          position: absolute;
          left: 10px;
          top: 35px;
          width: 833px;
          height: 498px;
          overflow: hidden;
        }

      }

      .lb {
        flex: 1;

        .lbl {
          flex: 1;
        }

        .lbr {
          flex: 1;
        }
      }
    }

    .right {
      flex: 1;

      .rt {
        flex: 1;
        position: relative;
        overflow: hidden;
      }

      .rb {
        flex: 1;
        position: relative;
        overflow: hidden;
      }
    }
  }
}
</style>
