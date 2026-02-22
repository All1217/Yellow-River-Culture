<template>
    <div class="sun-view-container">
        <div class="sun-header">
            <h1><i class="fas fa-water"></i>治水之智</h1>
            <p>黄河流域水文化历史可视化</p>
        </div>
        <div class="container">
            <div class="left-panel">
                <div class="map-container cc" ref="mapContainer"></div>
                <div class="bottom-left-panel cc">
                    <div class="filter-options">
                        <label>
                            <input type="checkbox" class="period-checkbox" value="古代发展萌芽期" v-model="selectedPeriods" />
                            萌芽期
                        </label>
                        <label>
                            <input type="checkbox" class="period-checkbox" value="古代发展繁荣期" v-model="selectedPeriods" />
                            繁荣期
                        </label>
                        <label>
                            <input type="checkbox" class="period-checkbox" value="古代向现代转变期" v-model="selectedPeriods" />
                            转型期
                        </label>
                        <label>
                            <input type="checkbox" class="period-checkbox" value="现代发展繁荣期" v-model="selectedPeriods" />
                            现代期
                        </label>
                    </div>
                    <div class="timeline-container" ref="timelineContainer"></div>
                </div>
            </div>
            <div class="right-panel">
                <div class="chart-container cc">
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
                    <div id="lineChart" @mouseenter="onLineChartEnter" @mouseleave="onLineChartLeave"></div>
                </div>
                <div class="pie-chart-container cc">
                    <div class="pie-chart-title"><i class="fas fa-chart-pie"></i>黄河治水策略</div>
                    <div id="pieChartContainer"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import { useStore } from '@/stores/useStore';
import { cityData, timelineData, pieData, events } from '@/js&ts/sunViewData'

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

const initMapAndTimeLine = () => {
    //初始化时间轴
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
    timeline.on('loaded', function () {
        console.log('时间轴加载完成');
        // 修复时间轴高度问题
        const tlContainer = document.querySelector('.tl-timeline');
        if (tlContainer) {
            tlContainer.style.height = '100%';
            tlContainer.style.overflowY = 'auto';
        }
        // 初始高亮第一个事件
        if (events.length > 0) {
            setTimeout(() => highlightEvent(events[0]), 500);
        }
    });
    timeline.on('select', function (e) {
        const eventId = e.data?.unique_id;
        if (!eventId) return;
        const eventData = events.find(event => event.id === eventId);
        if (eventData) {
            highlightEvent(eventData);
        }
    });

    // 按时期定义颜色
    const periodColors = {
        "古代发展萌芽期": "#8b4513",
        "古代发展繁荣期": "#228b22",
        "古代向现代转变期": "#ff8c00",
        "现代发展繁荣期": "#1e90ff"
    };

    const map = L.map(mapContainer.value!, {
        center: [36.5, 104.5],
        zoom: 5,
        zoomControl: true,
        crs: L.CRS.EPSG3857
    });
    // 天地图地形图服务
    const tiandituKey = '1229dfaf5eec956bb3c59f9d994a956b';
    const tiandituTer = L.tileLayer(`https://t{s}.tianditu.gov.cn/vec_c/wmts?tk=${tiandituKey}&layer=ter&style=default&tilematrixSet=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`, {
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        attribution: '© 天地图地形'
    });
    // 天地图注记层
    const tiandituCva = L.tileLayer(`https://t{s}.tianditu.gov.cn/vec_w/wmts?tk=${tiandituKey}&layer=cva&style=default&tilematrixSet=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}`, {
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
    });

    tiandituTer.addTo(map);
    tiandituCva.addTo(map);
    // 添加图例（缩小版）
    const legend = L.control({ position: 'bottomleft' });
    legend.onAdd = function (map) {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = '<h4><i class="fas fa-map-marker-alt"></i> 发展时期</h4>';
        Object.entries(periodColors).forEach(([period, color]) => {
            div.innerHTML += `<i style="background:${color}"></i> ${period}<br>`;
        });
        return div;
    };
    legend.addTo(map);
    // 增强图例
    legend.onAdd = function (map) {
        const div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = `
        <h4><i class="fas fa-map-marker-alt"></i> 发展时期</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">
            ${Object.entries(periodColors).map(([period, color]) =>
            `<div style="display: flex; align-items: center;">
                    <i style="background:${color}; width:12px; height:12px; border-radius:50%; margin-right:5px;"></i>
                    <span style="font-size:12px;">${period}</span>
                </div>`
        ).join('')}
        </div>
    `;
        return div;
    };
    // 存储所有标记
    const markers = L.layerGroup().addTo(map);
    function createMarkers() {
        markers.clearLayers();
        events.forEach(event => {
            const isVisible = Array.from(document.querySelectorAll('.period-checkbox:checked'))
                .some(checkbox => checkbox.value === event.period);
            console.log('isVisible:', isVisible)
            if (isVisible) {
                const marker = L.circleMarker(event.location, {
                    radius: 5,
                    fillColor: periodColors[event.period] || "#ff0000",
                    color: "#000",
                    weight: 0.8,
                    opacity: 1,
                    fillOpacity: 0.6
                }).addTo(markers);

                // 将事件对象附加到标记上
                marker._event = event;
                marker.bindPopup(`
                    <h3>${event.title}</h3>
                    <p><b>时间：</b> ${event.year > 0 ? event.year + '年' : Math.abs(event.year) + '年前'}</p>
                    <p><b>发展时期：</b> ${event.period}</p>
                    <p>${event.description}</p>
                `);
                marker.on('click', function () {
                    highlightEvent(event); // 直接传递完整事件对象
                });
            }
        });
    }
    createMarkers();
    //增强联动效果函数
    function highlightEvent(event) {
        if (!event) return;
        // 调整地图缩放级别
        const ZOOM_LEVEL = 6;
        // 2. 高亮地图标记
        markers.eachLayer(layer => {
            if (layer instanceof L.CircleMarker) {
                const isTarget = layer._event?.id === event.id;
                layer.setStyle({
                    radius: isTarget ? 9 : 5,
                    fillOpacity: isTarget ? 1 : 0.8,
                    weight: isTarget ? 2 : 0.8
                });
                if (isTarget) {
                    map.flyTo(layer.getLatLng(), ZOOM_LEVEL, {
                        duration: 0.5,
                        easeLinearity: 0.25
                    });
                }
            }
        });
        // 3. 定位时间轴
        if (timeline && event.id) {
            try {
                timeline.goToId(event.id);
            } catch (e) {
                console.warn('时间轴定位失败:', e);
            }
        }
    }
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
    // 颜色配置
    const colorPalette = [
        '#c23531', // 红系 - 黄河上中游
        '#2f4554', // 蓝系 - 黄河下游
        '#d48265', // 橙系 - 运河及关联水系
        '#61a0a8'  // 青系 - 全流域治理
    ];
    // 生成同色系渐变颜色
    function generateColorSeries(baseColor, count) {
        const colors = [];
        const hsl = hexToHsl(baseColor);

        for (let i = 0; i < count; i++) {
            // 调整亮度和饱和度生成同色系颜色
            const lightness = Math.min(95, Math.max(20, hsl.l + (i % 2 === 0 ? 15 : -15)));
            const saturation = Math.min(100, Math.max(30, hsl.s + (i % 2 === 0 ? 10 : -10)));
            colors.push(hslToHex(hsl.h, saturation, lightness));
        }
        return colors;
    }
    // 辅助函数：HEX转HSL
    function hexToHsl(hex) {
        let r = parseInt(hex.substring(1, 3), 16) / 255;
        let g = parseInt(hex.substring(3, 5), 16) / 255;
        let b = parseInt(hex.substring(5, 7), 16) / 255;

        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }
    // 辅助函数：HSL转HEX
    function hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }
    // 准备外环数据 - 为每个子项生成同色系颜色
    const outerData = pieData.reduce((acc, parent, parentIndex) => {
        const baseColor = colorPalette[parentIndex % colorPalette.length];
        const colorSeries = generateColorSeries(baseColor, parent.children.length);

        return acc.concat(parent.children.map((child, childIndex) => ({
            ...child,
            itemStyle: {
                color: colorSeries[childIndex % colorSeries.length]
            }
        })));
    }, []);
    const option = {
        title: {
            show: false,
            text: '黄河流域治水策略分布',
            subtext: '内环：河段分类 | 外环：具体策略',
            left: 'center',
            top: 10
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                const data = params.data;
                if (data.children) {
                    return `${data.name}<br/>策略数量: ${data.children.length}`;
                } else {
                    return `
                            <strong>${data.name}</strong><br/>
                            代表事件: ${data.event}<br/>
                            说明: ${data.desc}<br/>
                            <a href="${data.url}" target="_blank" style="color:#3398DB">查看更多</a>
                        `;
                }
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            top: '10%',
            data: pieData.map(item => item.name)  // 只保留主分类名称
        },
        series: [
            // 内层环（河段分类）
            {
                type: 'pie',
                radius: ['0%', '40%'],
                label: {
                    position: 'inner',
                    formatter: '{b|{b}}',
                    fontSize: 12,
                    rich: {
                        b: {
                            fontSize: 11,
                            fontWeight: 'bold',
                            lineHeight: 20,
                            color: '#fff'
                        }
                    }
                },
                labelLine: {
                    show: false
                },
                data: pieData.map((item, index) => ({  // 添加index参数
                    name: item.name,
                    value: item.children.length,
                    itemStyle: {
                        color: colorPalette[index % colorPalette.length]  // 按顺序使用新颜色
                    }
                }))
            },
            // 外层环（具体策略）
            {
                type: 'pie',
                radius: ['40%', '85%'],
                label: {
                    show: true,
                    formatter: '{b}',
                    fontSize: 10,
                    color: '#fff',
                    alignTo: 'edge',
                    position: 'inside',
                    lineHeight: 16,
                    margin: 10
                },
                labelLine: {
                    show: false
                },
                data: outerData
            }
        ]
    };
    // 添加点击事件
    pieChart.on('click', function (params) {
        if (params.data.url) {
            window.open(params.data.url, '_blank');
        }
    });
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
    pStore.title = '治水之智'
    pStore.curRouteName = 'sunView'
    initMapAndTimeLine();
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