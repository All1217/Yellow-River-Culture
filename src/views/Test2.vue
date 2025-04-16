<template>
    <!-- 备份2025/4/16 -->
    <div class="sun-view-container">
        <div class="header">
            <h1><i class="fas fa-water"></i> 历史大事与治水之智</h1>
            <p>黄河流域水文化历史可视化</p>
        </div>
        <div class="container">
            <div class="left-panel">
                <div class="map-container" ref="mapContainer"></div>
                <div class="bottom-left-panel">
                    <!-- <div class="timeline-container" ref="timelineContainer"></div> -->
                </div>
            </div>
            <div class="right-panel">
                <div class="chart-container">
                    <div class="chart-controls">
                        <h3><i class="fas fa-chart-line"></i> 城市水旱灾害分析</h3>
                        <div class="city-buttons">
                            <button class="city-btn" :class="{ 'active': activeCity === '开封' }"
                                @click="setActiveCity('开封')">开封</button>
                            <button class="city-btn" :class="{ 'active': activeCity === '洛阳' }"
                                @click="setActiveCity('洛阳')">洛阳</button>
                            <button class="city-btn" :class="{ 'active': activeCity === '西安' }"
                                @click="setActiveCity('西安')">西安</button>
                        </div>
                    </div>
                    <div id="lineChart" style="height: 100%;"></div>
                </div>
                <div class="pie-chart-container">
                    <div class="chart-title"><i class="fas fa-chart-pie"></i> 黄河治水策略</div>
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
import { ref, onMounted } from 'vue';
// import * as L from 'leaflet';
import * as echarts from 'echarts';
// import * as TL from 'vue3-timeline'
import { useStore } from '@/stores/useStore';
import { cityData, timelineData } from '@/js&ts/sunViewData'

import '@/styles/sunView.less'

const pStore = useStore()
const activeCity = ref('开封');
const selectedPeriods = ref<string[]>(['古代发展萌芽期', '古代发展繁荣期', '古代向现代转变期', '现代发展繁荣期']);

const setActiveCity = (city: string) => {
    activeCity.value = city;
    updateLineChart(city);
};

const mapContainer = ref<HTMLDivElement | null>(null);
// const timelineContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
    pStore.setNavOption('sunView')
    pStore.title = '历史大事与治水之智'
    pStore.curRouteName = 'sunView'
    initMap();
    // initTimeline();
    initCharts();
});

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

// const initTimeline = () => {
//     const timeline = new TL.Timeline(timelineContainer.value!, timelineData, {
//         timenav_height: 180,
//         start_at_slide: 0,
//         scale_factor: 8,
//         language: 'zh-cn',
//         marker_padding: 5,
//         marker_height: 20,
//         color_by_period: true,
//         search: true,
//         height: '100%'
//     });
// };

const initCharts = () => {
    const lineChart = echarts.init(document.getElementById('lineChart')!);
    const pieChart = echarts.init(document.getElementById('pieChartContainer')!);

    window.addEventListener('resize', () => {
        lineChart.resize();
        pieChart.resize();
    });

    initPieChart(pieChart);
    updateLineChart(activeCity.value);
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

    const option = {
        title: {
            text: `${city}历史水旱灾害与温度变化`,
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: disasterSeries.map(d => d.year.toString())
        },
        yAxis: [{
            type: 'value',
            name: '灾害次数'
        }],
        series: [{
            name: '水灾次数',
            type: 'line',
            data: disasterSeries.map(d => d.flood)
        }, {
            name: '旱灾次数',
            type: 'line',
            data: disasterSeries.map(d => d.drought)
        }, {
            name: '距平温度',
            type: 'line',
            yAxisIndex: 0,
            data: tempSeries.map(t => t.temp)
        }]
    };

    lineChart.setOption(option);
};
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