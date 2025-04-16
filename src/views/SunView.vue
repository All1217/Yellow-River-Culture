<template>
    <div class="sun-view-container">
        <div class="header">
            <h1><i class="fas fa-water"></i> 历史大事与治水之智</h1>
            <p>黄河流域水文化历史可视化</p>
        </div>
        <div class="container">
            <div class="left-panel">
                <div class="map-container" ref="mapContainer"></div>
                <div class="bottom-left-panel">
                    <div class="timeline-container" ref="timelineContainer"></div>
                </div>
            </div>
            <div class="right-panel">
                <div class="chart-container">
                    <div class="chart-controls">
                        <h3><i class="fas fa-chart-line"></i> 城市水旱灾害分析</h3>
                        <div class="city-buttons">
                            <button class="city-btn" :class="{ 'active': activeCity === 0 }"
                                @click="setActiveCity(0)">开封</button>
                            <button class="city-btn" :class="{ 'active': activeCity === 1 }"
                                @click="setActiveCity(1)">洛阳</button>
                            <button class="city-btn" :class="{ 'active': activeCity === 2 }"
                                @click="setActiveCity(2)">西安</button>
                        </div>
                    </div>
                    <div id="lineChart" style="height: 100%;" @mouseenter="onLineChartEnter" @mouseleave="onLineChartLeave"></div>
                </div>
                <div class="pie-chart-container">
                    <div class="chart-title"><i class="fas fa-chart-pie"></i>黄河治水策略</div>
                    <div id="pieChartContainer" style="height: 100%;"></div>
                </div>
            </div>
        </div>
        <div class="filter-options">
            <label><input type="checkbox" value="古代发展萌芽期" v-model="selectedPeriods" /> 萌芽期</label>
            <label><input type="checkbox" value="古代发展繁荣期" v-model="selectedPeriods" /> 繁荣期</label>
            <label><input type="checkbox" value="古代向现代转变期" v-model="selectedPeriods" /> 转型期</label>
            <label><input type="checkbox" value="现代发展繁荣期" v-model="selectedPeriods" /> 现代期</label>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { useStore } from '@/stores/useStore';
import { cityData, timelineData } from '@/js&ts/sunViewData'

import '@/styles/sunView.less'

const pStore = useStore()
const activeCity = ref<number>(0);
const cities = ['开封', '洛阳', '西安']
const selectedPeriods = ref<string[]>(['古代发展萌芽期', '古代发展繁荣期', '古代向现代转变期', '现代发展繁荣期']);

const setActiveCity = (city: number) => {
    activeCity.value = city;
    updateLineChart(cities[city]);
};

const mapContainer = ref<HTMLDivElement | null>(null);
const timelineContainer = ref<HTMLDivElement | null>(null);
var lineInterval = null

const initMap = () => {
    const map = L.map(mapContainer.value!, {
        center: [36.5, 104.5],
        zoom: 5,
        zoomControl: true,
        crs: L.CRS.EPSG3857
    });

    const tiandituKey = '1229dfaf5eec956bb3c59f9d994a956b';
    const tiandituTer = L.tileLayer(`https://t{s}.tianditu.gov.cn/vec_c/wmts?tk=${tiandituKey}&layer=ter&style=default&tilematrixSet=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`, {
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        attribution: '© 天地图地形'
    });

    const tiandituCva = L.tileLayer(`https://t{s}.tianditu.gov.cn/vec_w/wmts?tk=${tiandituKey}&layer=cva&style=default&tilematrixSet=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`, {
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
    });

    tiandituTer.addTo(map);
    tiandituCva.addTo(map);
};

const initTimeline = () => {
    const timeline = new TL.Timeline(timelineContainer.value!, timelineData, {
        timenav_height: 180,
        start_at_slide: 0,
        scale_factor: 8,
        language: 'zh-cn',
        marker_padding: 5,
        marker_height: 20,
        color_by_period: true,
        search: true,
        height: '100%'
    });
};

const initCharts = () => {
    const lineChart = echarts.init(document.getElementById('lineChart')!);
    const pieChart = echarts.init(document.getElementById('pieChartContainer')!);
    window.addEventListener('resize', () => {
        lineChart.resize();
        pieChart.resize();
    });
    initPieChart(pieChart);
    updateLineChart(cities[activeCity.value]);
};

const initPieChart = (pieChart: any) => {
    const data = [
        { name: '黄河上中游', value: 3 },
        { name: '黄河下游', value: 5 },
        { name: '运河及关联水系', value: 2 },
        { name: '全流域治理', value: 6 }
    ];
    const option = {
        series: [{
            type: 'pie',
            radius: '50%',
            data: data
        }]
    };
    pieChart.setOption(option);
};

const updateLineChart = (city: string) => {
    const lineChart = echarts.getInstanceByDom(document.getElementById('lineChart')!);
    const currentData = cityData[city];
    const disasterSeries = currentData.disasters.map(item => ({
        year: item.year,
        flood: item.flood,
        drought: item.drought
    }));
    const tempSeries = currentData.temperatures.filter(item => item.temp !== null).map(item => ({
        year: item.year,
        temp: item.temp
    }));

    // 计算Y轴动态范围
    const maxFlood = Math.max(...disasterSeries.map(d => d.flood));
    const maxDrought = Math.max(...disasterSeries.map(d => d.drought));
    const disasterMax = Math.max(maxFlood, maxDrought);
    const y1Max = Math.ceil(disasterMax / 5) * 5;
    const temps = tempSeries.map(t => t.temp);
    const tempMin = Math.min(...temps);
    const tempMax = Math.max(...temps);
    const padding = 0.2;
    // 清空当前图表
    lineChart.clear();

    const option = {
        // 新增动画配置
        animation: true,
        animationDuration: 2000,
        animationEasing: 'cubicOut',

        title: {
            text: `${city}历史水旱灾害与温度变化`,
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['水灾次数', '旱灾次数', '距平温度'],
            top: 30
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: Array.from({ length: 33 }, (_, i) => -200 + i * 50),
            axisLabel: {
                formatter: function (value) {
                    return value === 0 ? '0' : value + '';
                }
            },
            name: '年份',
            nameLocation: 'middle',
            nameGap: 18
        },
        yAxis: [
            {
                type: 'value',
                name: '灾害次数',
                position: 'left',
                min: 0,
                max: y1Max,
                interval: Math.ceil(y1Max / 5),
                axisLine: { lineStyle: { color: '#5470C6' } }
            },
            {
                type: 'value',
                name: '距平温度(℃)',
                position: 'right',
                min: (tempMin - padding).toFixed(1),
                max: (tempMax + padding).toFixed(1),
                interval: 0.2,
                axisLine: { lineStyle: { color: '#EE6666' } }
            }
        ],
        series: [
            {
                name: '水灾次数',
                type: 'line',
                data: disasterSeries.map(d => d.flood),
                smooth: true,
                lineStyle: {
                    width: 2,
                    color: '#5470C6',
                    opacity: 0.8 // 初始透明度
                },
                itemStyle: {
                    color: '#5470C6',
                    opacity: 0 // 初始隐藏数据点
                },
                // 新增动画配置
                animationDelay: function (idx) {
                    return idx * 50; // 按数据点顺序延迟
                },
                emphasis: {
                    lineStyle: {
                        opacity: 1 // 悬停时全显
                    },
                    itemStyle: {
                        opacity: 1
                    }
                }
            },
            {
                name: '旱灾次数',
                type: 'line',
                data: disasterSeries.map(d => d.drought),
                smooth: true,
                lineStyle: {
                    width: 2,
                    color: '#91CC75',
                    opacity: 0.8
                },
                itemStyle: {
                    color: '#91CC75',
                    opacity: 0
                },
                animationDelay: function (idx) {
                    return idx * 50 + 200; // 增加基础延迟
                },
                emphasis: {
                    lineStyle: {
                        opacity: 1
                    },
                    itemStyle: {
                        opacity: 1
                    }
                }
            },
            {
                name: '距平温度',
                type: 'line',
                yAxisIndex: 1,
                data: tempSeries.map(t => t.temp),
                smooth: true,
                lineStyle: {
                    width: 2,
                    color: '#EE6666',
                    opacity: 0.8
                },
                itemStyle: {
                    color: '#EE6666',
                    opacity: 0
                },
                animationDelay: function (idx) {
                    return idx * 30 + 400; // 不同线条不同延迟
                },
                emphasis: {
                    lineStyle: {
                        opacity: 1
                    },
                    itemStyle: {
                        opacity: 1
                    }
                }
            }
        ]
    };
    // 分阶段渲染
    lineChart.setOption(option, {
        lazyUpdate: true,
        silent: true
    });
    // 添加过渡效果监听
    lineChart.on('finished', () => {
        // 动画结束后显示数据点
        lineChart.setOption({
            series: [
                { itemStyle: { opacity: 1 } },
                { itemStyle: { opacity: 1 } },
                { itemStyle: { opacity: 1 } }
            ]
        });
    });
};
function onLineChartEnter() {
    clearInterval(lineInterval);
}
function onLineChartLeave() {
    lineInterval = setInterval(() => {
        activeCity.value = (activeCity.value + 1) % cities.length;
        const city: string = cities[activeCity.value];
        updateLineChart(city)
    }, 4500);
}
onMounted(() => {
    pStore.setNavOption('sunView')
    pStore.title = '历史大事与治水之智'
    pStore.curRouteName = 'sunView'
    initMap();
    initTimeline();
    initCharts();
    // 定时切换函数
    lineInterval = setInterval(() => {
        activeCity.value = (activeCity.value + 1) % cities.length;
        const city: string = cities[activeCity.value];
        updateLineChart(city)
    }, 4500);
});
onUnmounted(() => {
    clearInterval(lineInterval);
})
</script>
<style lang="less" scoped>
.sun-view-container {
    width: 100%;
    height: 100vh;
    background: url(../assets/images/背景/浅色背景4.png) no-repeat;
    background-size: 100% 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>