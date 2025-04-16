<template>
    <!-- 第二页面备份 -->
    <transition name="fade" appear>
      <div class="data-center">
        <div class="data-center-content">
          <header class="header">
            <h1>数据可视化</h1>
            <div class="show-time">{{
              `当前时间：${curDate.y}年${curDate.mon}月${curDate.day}日-${curDate.h}时${curDate.m}分${curDate.s}秒` }}</div>
          </header>
          <section class="main-box">
            <div class="column left-col">
              <div class="backBtn flex-row-ac jcc" v-show="deep" @click="back">
                <i class="iconfont icon-fanhui"></i>
              </div>
              <div id="news" :class="deep ? 'panel deep-left' : 'panel'">
                <h2>实时新闻政策</h2>
                <div class="chart news">
                  <ul>
                    <li v-for="e in newsList" class="flex-row-ac" @click="jump(e.href)">
                      <span class="date">{{ e.date }}</span>
                      <span class="news-title sl">{{ e.title }}</span>
                    </li>
                    <li v-for="e in newsList" class="flex-row-ac" @click="jump(e.href)">
                      <span class="date">{{ e.date }}</span>
                      <span class="news-title sl">{{ e.title }}</span>
                    </li>
                  </ul>
                </div>
                <div class="panel-footer"></div>
              </div>
              <div :class="deep ? 'panel deep-left' : 'panel'">
                <h2>{{ `黄河流域${lbData[lbNameIndex].name}改道` }}</h2>
                <div ref="lbChart" class="chart"></div>
                <div class="panel-footer"></div>
              </div>
              <div :class="deep ? 'deep-box deep-zero' : 'deep-box deep-left'">
                <div class="deep-box-content">
                  <h1 class="db-title">{{ text.name }}</h1>
                  <div class="db-img-box flex-col-ac">
                    <img :src="text.src" alt="">
                  </div>
                  <p class="db-item">
                    <span class="db-sub-title">地理位置：</span>
                    <span class="db-des">{{ text.location }}</span>
                  </p>
                  <p class="db-item">
                    <span class="db-sub-title">建成时间：</span>
                    <span class="db-des">{{ text.time }}</span>
                  </p>
                  <p class="db-item">
                    <span class="db-sub-title">建筑类型：</span>
                    <span class="db-des">{{ text.type }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="no">
                <div class="no-hd">
                  <ul>
                    <li>39</li>
                    <li>40</li>
                  </ul>
                </div>
                <div class="no-bd">
                  <ul>
                    <li>黄河主要水利文化遗产数量</li>
                    <li>黄河孕育早期文明数量</li>
                  </ul>
                </div>
              </div>
              <div class="map">
                <div class="map1"></div>
                <div class="map2"></div>
                <div class="map3"></div>
                <transition name="inout">
                  <div ref="mChart" class="chart-map" v-show="showMap"></div>
                </transition>
              </div>
              <transition name="inout">
                <div class="mid-box" v-show="!deep">
                  <div id="mid-panel" class="panel">
                    <h2>水文化遗产的年代分布</h2>
                    <div ref="mbChart" class="chart"></div>
                    <div class="panel-footer"></div>
                  </div>
                </div>
              </transition>
            </div>
            <div class="column right-col">
              <div :class="deep ? 'panel deep-right' : 'panel'">
                <h2>不同遗产类型在黄河历史中的变迁</h2>
                <div ref="rtChart" class="chart"></div>
                <div class="panel-footer"></div>
              </div>
              <div id="yellowRiver" :class="deep ? 'panel deep-right' : 'panel'">
                <h2>黄河文化</h2>
                <div class="chart culture">
                  <ul>
                    <li v-for="e in cultureList" class="flex-row-ac">
                      <img src="../assets/images/右下角图表图形.png" alt="" class="little-png">
                      <span class="culture-name  sl">{{ `${e.time}--${e.name}` }}</span>
                    </li>
                    <li v-for="e in cultureList" class="flex-row-ac">
                      <img src="../assets/images/右下角图表图形.png" alt="" class="little-png">
                      <span class="culture-name  sl">{{ `${e.time}--${e.name}` }}</span>
                    </li>
                  </ul>
                </div>
                <div class="panel-footer"></div>
              </div>
              <div :class="deep ? 'deep-box deep-zero' : 'deep-box deep-right'">
                <div class="deep-box-content">
                  <h1 class="db-title">{{ text.name }}</h1>
                  <p class="db-item">
                    <span class="db-sub-title">描述：</span>
                    <span class="db-des">{{ text.des }}</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </transition>
  </template>
  <script lang="ts" setup>
  import '@/styles/dataCenter.less'
  import { onMounted, onBeforeUnmount, reactive, ref } from 'vue';
  import { useStore } from '@/stores/useStore';
  import * as echarts from 'echarts';
  import { options, nameAndJson, lbData, geoCoordMap } from '@/js&ts/echartsOptions'
  import china from '@/assets/json/china.json'
  import { newsList, cultureList } from '@/js&ts/staticText'
  const pStore = useStore()
  const curDate = reactive({
    y: 0,
    mon: 0,
    day: 0,
    h: 0,
    m: 0,
    s: 0,
  })
  var st: number | undefined;
  var lbst: number | undefined;
  const deep = ref<boolean>(false)
  const showMap = ref<boolean>(true)
  const lbIndex = ref<number>(1)
  const lbNameIndex = ref<number>(0)
  const curKeyName = ref<string>('')
  const text = reactive({
    name: '',
    location: '',
    time: '',
    type: '',
    des: '',
    src: ''
  })
  
  const lbChart = ref<HTMLDivElement | null>(null);
  const rtChart = ref<HTMLDivElement | null>(null);
  const mChart = ref<HTMLDivElement | null>(null);
  const mbChart = ref<HTMLDivElement | null>(null);
  
  var lbChartIns: echarts.ECharts | null = null;
  var rtChartIns: echarts.ECharts | null = null;
  var mChartIns: echarts.ECharts | null = null;
  var mbChartIns: echarts.ECharts | null = null;
  
  function onProvinceClick(e: echarts.ECElementEvent) {
    if (!deep.value && e.componentType == 'geo') {
      curKeyName.value = e.name
      resetText(geoCoordMap[curKeyName.value][0]['name'])
      showMap.value = false
      deep.value = true
      setTimeout(() => {
        try {
          initMapChart(e.name, nameAndJson[e.name])
        } catch (error) {
          console.log(error)
        }
        showMap.value = true;
      }, 1000);
    } else if (deep.value) {
      console.log('建筑名字：',e.name)
      resetText(e.name)
    }
  }
  function back() {
    if (deep.value) {
      deep.value = false
      showMap.value = false
      setTimeout(() => {
        initMapChart('china', nameAndJson['china'])
        showMap.value = true;
      }, 1000);
    }
  }
  function jump(href: string) {
    window.open(href, '_blank')
  }
  function resetLbCahert() {
    const cur = lbIndex.value
    lbNameIndex.value = cur
    lbIndex.value = cur == lbData.length - 1 ? 0 : cur + 1;
    if (lbChart.value && lbChartIns) {
      let temp: echarts.EChartsOption = options['lb']
      temp.xAxis[0].data = lbData[cur].xData
      temp.series = [
        {
          name: '偏移值',
          type: 'line',
          areaStyle: {
            color: lbData[cur].color,
            opacity: 0.5
          },
          lineStyle: {
            color: lbData[cur].color
          },
          itemStyle: {
            color: lbData[cur].color
          },
          emphasis: {
            focus: 'series'
          },
          data: lbData[cur].yData
        }
      ]
      lbChartIns.setOption(temp, true)
    }
  }
  function resetText(name: string) {
    const list = geoCoordMap[curKeyName.value]
    list.forEach(e => {
      if (name == e['name']) {
        text.name = e.name
        text.location = e.location
        text.des = e.des
        text.src = e.value[3].replace(/^image:\/\//, '')
        text.type = e.type
        text.time = e.time
      }
    });
  }
  function initMapChart(mapName: string, jsonData) {
    if (mChart.value) {
      var op = options[mapName]
      if (mChartIns) {
        echarts.registerMap(mapName, jsonData)
        mChartIns.setOption(op, true);
      } else {
        echarts.registerMap(mapName, jsonData)
        mChartIns = echarts.init(mChart.value);
        mChartIns.setOption(op);
        window.addEventListener("resize", function () {
          if (mChartIns) {
            mChartIns.resize();
          }
        });
        mChartIns.on('click', (e) => {
          console.log('点击触发：',e)
          onProvinceClick(e)
        })
      }
    }
  }
  function initMbChart() {
    if (mbChart.value) {
      mbChartIns = echarts.init(mbChart.value);
      mbChartIns.setOption(options.mbt);
      window.addEventListener('resize', () => {
        if (mbChartIns) {
          mbChartIns.resize();
        }
      });
    }
  }
  function initChart() {
    if (lbChart.value) {
      lbChartIns = echarts.init(lbChart.value);
      lbChartIns.setOption(options.lb);
      window.addEventListener('resize', () => {
        if (lbChartIns) {
          lbChartIns.resize();
        }
      });
    }
    if (rtChart.value) {
      rtChartIns = echarts.init(rtChart.value);
      rtChartIns.setOption(options.rt);
      window.addEventListener('resize', () => {
        if (rtChartIns) {
          rtChartIns.resize();
        }
      });
    }
    initMbChart()
    initMapChart('china', china)
  }
  
  onMounted(() => {
    pStore.setNavOption('secondPage')
    pStore.title = '第二页面'
    pStore.curRouteName = 'secondPage'
    st = setInterval(() => {
      let dt = new Date();
      curDate.y = dt.getFullYear();
      curDate.mon = dt.getMonth() + 1;
      curDate.day = dt.getDate();
      curDate.h = dt.getHours();
      curDate.m = dt.getMinutes();
      curDate.s = dt.getSeconds();
    }, 1000);
    lbst = setInterval(() => {
      resetLbCahert()
    }, 3000)
    initChart();
  })
  onBeforeUnmount(() => {
    clearInterval(st);
    clearInterval(lbst);
  })
  </script>
  <style lang="less" scoped>
  .inout-enter-active,
  .inout-leave-active {
    transition: opacity 1s ease-in-out;
  }
  
  .inout-enter-from,
  .inout-leave-to {
    opacity: 0;
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