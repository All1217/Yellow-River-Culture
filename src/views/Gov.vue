<template>
  <div class="gov-container">
    <div class="header flex-row-ac jcc">
      <Management style="width: 25px;height: 25px;margin-right: 15px;color: #18191c;" />
      <span class="header-title">河吏之鉴</span>
    </div>
    <div class="gov-container-content flex-row">
      <div class="gov-left">
        <div class="chart-container shadow-bgc">
          <div class="chart-title">河务官员晋升路径</div>
          <div class="chart" ref="sankeyChart"></div>
        </div>
      </div>
      <div class="gov-right flex-col">
        <div class="rt-container shadow-bgc">
          <div class="chart-title rt-title">水利机构</div>
          <div class="relationship-container">
            <div class="relationship-content">
              <div class="visual-map-box">
                <div class="visual-map-item flex-row-ac">
                  <a class="vm-color-block" style="background-color: #f7cbac;"></a>
                  <span class="vm-des">中央机构包括直属中央及派驻地方管理水政的中央官吏</span>
                </div>
                <div class="visual-map-item flex-row-ac">
                  <a class="vm-color-block" style="background-color: #c5e0b3;"></a>
                  <span class="vm-des">地方机构指的是地方专职和基层水官</span>
                </div>
              </div>
              <el-timeline style="max-width: 680px">
                <el-timeline-item timestamp="夏商周、春秋战国时期（公元前2070~前221年）" placement="top">
                  <div class="rt-chart-container" title="鼠标滑入切换文本和图片" @mouseenter="curObj = description.rela1">
                    <div class="rt-chart" ref="rt1"></div>
                  </div>
                </el-timeline-item>
                <el-timeline-item timestamp="秦汉时期（公元前221~公元220年）" placement="top">
                  <div class="rt-chart-container" title="鼠标滑入切换文本和图片" @mouseenter="curObj = description.rela2">
                    <div class="rt-chart" ref="rt2"></div>
                  </div>
                </el-timeline-item>
                <el-timeline-item timestamp="魏晋南北朝时期（220年~581年）" placement="top">
                  <div class="rt-chart-container" title="鼠标滑入切换文本和图片" @mouseenter="curObj = description.rela3">
                    <div class="rt-chart" ref="rt3"></div>
                  </div>
                </el-timeline-item>
                <el-timeline-item timestamp="隋唐五代时期（581年~960年）" placement="top">
                  <div class="rt-chart-container" title="鼠标滑入切换文本和图片" @mouseenter="curObj = description.rela4">
                    <div class="rt-chart" ref="rt4"></div>
                  </div>
                </el-timeline-item>
                <el-timeline-item timestamp="两宋、辽金夏时期（960年~1271年）" placement="top">
                  <div class="rt-chart-container" title="鼠标滑入切换文本和图片" @mouseenter="curObj = description.rela5">
                    <div class="rt-chart" ref="rt5"></div>
                  </div>
                </el-timeline-item>
                <el-timeline-item timestamp="元明清时期（960年~1271年）" placement="top">
                  <div class="rt-chart-container" title="鼠标滑入切换文本和图片" @mouseenter="curObj = description.rela6">
                    <div class="rt-chart" ref="rt6"></div>
                  </div>
                </el-timeline-item>
              </el-timeline>
              <div class="gap"></div>
            </div>
          </div>
        </div>
        <div class="rb-container shadow-bgc">
          <div class="chart-container">
            <div class="chart-title">水利机构简介</div>
            <div class="rb-description flex-row">
              <div class="rb-text-box">
                <div class="rb-text-content" @click="jumpTo(curObj.href)">
                  <h3>{{ curObj.title }}</h3>
                  <p class="rb-text" v-for="para in curObj.text.split('&&')" title="滚动滚轮可上下滑动">{{ para }}</p>
                </div>
              </div>
              <div class="rb-img-box" @click="jumpTo(curObj.href)">
                <img :src="curObj.src" alt="" class="rb-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/stores/useStore.ts';
import { sankey, rela1, rela2, rela3, rela4, rela5, rela6, description } from '@/js&ts/Gov/index'

import { onMounted, ref } from "vue";
import * as echarts from 'echarts';
const pStore = useStore()
/**
 * @description: 桑葚图
 */
const sankeyChart = ref<HTMLDivElement | null>(null)
var leftIns: echarts.ECharts | null = null;
/**
 * @description: 关系图
 */
const rt1 = ref<HTMLDivElement | null>(null)
var rt1Ins: echarts.ECharts | null = null;
const rt2 = ref<HTMLDivElement | null>(null)
var rt2Ins: echarts.ECharts | null = null;
const rt3 = ref<HTMLDivElement | null>(null)
var rt3Ins: echarts.ECharts | null = null;
const rt4 = ref<HTMLDivElement | null>(null)
var rt4Ins: echarts.ECharts | null = null;
const rt5 = ref<HTMLDivElement | null>(null)
var rt5Ins: echarts.ECharts | null = null;
const rt6 = ref<HTMLDivElement | null>(null)
var rt6Ins: echarts.ECharts | null = null;
/**
 * @description: 描述文本
 */
const curObj = ref(description.rela1)
function initChart() {
  if (sankeyChart.value) {
    leftIns = echarts.init(sankeyChart.value);
    leftIns.setOption(sankey);
    window.addEventListener('resize', () => {
      if (leftIns) {
        leftIns.resize();
      }
    });
  }
  if (rt1.value) {
    rt1Ins = echarts.init(rt1.value);
    rt1Ins.setOption(rela1);
    window.addEventListener('resize', () => {
      if (rt1Ins) {
        rt1Ins.resize();
      }
    });
  }
  if (rt2.value) {
    rt2Ins = echarts.init(rt2.value);
    rt2Ins.setOption(rela2);
    window.addEventListener('resize', () => {
      if (rt2Ins) {
        rt2Ins.resize();
      }
    });
  }
  if (rt3.value) {
    rt3Ins = echarts.init(rt3.value);
    rt3Ins.setOption(rela3);
    window.addEventListener('resize', () => {
      if (rt3Ins) {
        rt3Ins.resize();
      }
    });
  }
  if (rt4.value) {
    rt4Ins = echarts.init(rt4.value);
    rt4Ins.setOption(rela4);
    window.addEventListener('resize', () => {
      if (rt4Ins) {
        rt4Ins.resize();
      }
    });
  }
  if (rt5.value) {
    rt5Ins = echarts.init(rt5.value);
    rt5Ins.setOption(rela5);
    window.addEventListener('resize', () => {
      if (rt5Ins) {
        rt5Ins.resize();
      }
    });
  }
  if (rt6.value) {
    rt6Ins = echarts.init(rt6.value);
    rt6Ins.setOption(rela6);
    window.addEventListener('resize', () => {
      if (rt6Ins) {
        rt6Ins.resize();
      }
    });
  }
}
function jumpTo(url: string) {
  window.open(url, '_blank')
}

onMounted(() => {
  pStore.setNavOption('GovView')
  pStore.title = '水利机构与官员晋升'
  pStore.curRouteName = 'GovView'

  initChart();
})
</script>
<style lang="less">
.shadow-bgc {
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
}

.chart-container {
  position: relative;
  width: 100%;
  height: 100%;

  .chart {
    width: 100%;
    height: 100%;
  }
}

.gov-container {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0 0 30px 0;
  background: url(../assets/images/背景/浅色背景4.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;

  .header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 64px;
    backdrop-filter: blur(4px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

    .header-title {
      color: #18191c;
      font-weight: bold;
      font-size: 25px;
    }
  }

  .gov-container-content {
    width: 100%;
    height: 96vh;

    .chart-title {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 48px;
      text-align: center;
      font-size: 18px;
      line-height: 48px;
      color: #18191c;
    }

    .gov-left {
      height: 100%;
      flex: 1;
      padding: 84px 10px 0 15px;
    }

    .gov-right {
      height: 100%;
      flex: 1;
      padding: 84px 15px 0 10px;
      row-gap: 20px;

      .rt-container {
        flex: 1;
        background-color: #fff;
        max-height: calc(48vh-42px);
        overflow: hidden;

        .rt-title {
          position: unset !important;
          min-height: 48px;
        }

        .relationship-container {
          height: 100%;
          overflow-x: hidden;
          overflow-y: scroll;

          .relationship-content {
            padding: 0 25px;
            height: auto;

            .visual-map-box {
              width: 100%;
              height: auto;
              padding: 15px 0;

              .visual-map-item {
                width: 100%;
                height: 30px;

                .vm-color-block {
                  display: inline-block;
                  width: 18px;
                  height: 18px;
                  margin-right: 15px;
                  border-radius: 4px;
                }

                .vm-des {
                  color: #18191c;
                }
              }
            }

            .gap {
              height: 64px;
            }

            .rt-chart-container {
              width: 100%;
              max-width: 665px;
              height: 280px;
              padding: 10px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

              .rt-chart {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }

      .rb-container {
        max-height: calc(48vh-42px);
        overflow: hidden;
        flex: 1;

        .rb-description {
          width: 100%;
          height: 100%;
          padding: 63px 20px 20px 20px;
          overflow: hidden;

          .rb-text-box {
            flex: 1;
            max-width: 350px;
            overflow-x: hidden;
            overflow-y: auto;

            .rb-text-content {
              width: 100%;
              height: auto;
              cursor: pointer;

              h3 {
                text-align: center;
                color: #18191c;
              }

              .rb-text {
                color: #18191c;
              }
            }
          }

          .rb-text-box::-webkit-scrollbar {
            display: none;
          }

          .rb-img-box {
            flex: 1;
            padding-left: 15px;

            .rb-img {
              cursor: pointer;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}
</style>