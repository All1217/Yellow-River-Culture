<template>
  <div class="third-page-container">
    <div class="gap"></div>
    <div class="main-box flex-row">
      <div class="left flex-col">
        <div class="lt danmu-box">
          <h1 ref="danmuBoxTitle">评论弹幕图</h1>
          <div class="danmu-canvas" ref="danmuBox"></div>
        </div>
        <div class="lb flex-row">
          <div class="lbl chart-box">
            <h2>用户IP属地TOP10</h2>
            <div ref="lblChart" class="chart"></div>
          </div>
          <div class="lbr chart-box">
            <h2>评论情绪分布圆环图</h2>
            <div ref="lbrChart" class="chart"></div>
          </div>
        </div>
      </div>
      <div class="right flex-col">
        <div class="rt chart-box">
          <h2>发布媒体气泡图</h2>
          <div ref="rbtChart" class="chart"></div>
        </div>
        <div class="rb chart-box">
          <h2>正文情绪分布圆环图</h2>
          <div ref="rbbChart" class="chart"></div>
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
  pStore.title = '第三页面'
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
    top: 10px;
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
  padding: 30px 0 30px 0;
  background: url(../assets/images/背景/浅色背景4.png) no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .main-box {
    margin: 0 auto;
    width: 1280px;
    height: 800px;
    min-width: 1024px;
    max-width: 1920px;
    // background-color: #fff;
    // box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.5);

    .left {
      flex: 2;

      .lt {
        flex: 2;
        position: relative;
        overflow: hidden;
      }

      .danmu-box {
        position: relative;
        padding-top: 35px;
        overflow: hidden;

        h1 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: #D1872A;
          text-align: center;
          z-index: 5;
        }

        .danmu-canvas {
          width: 100%;
          height: 500px;
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
