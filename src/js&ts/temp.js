const cityData = {
    开封: {
        disasters: [
            { year: -200, flood: null, drought: null },
            { year: -150, flood: null, drought: null },
            { year: -100, flood: null, drought: null },
            { year: -50, flood: null, drought: null },
            { year: 0, flood: null, drought: null },
            { year: 50, flood: null, drought: null },
            { year: 100, flood: null, drought: null },
            { year: 150, flood: null, drought: null },
            { year: 200, flood: null, drought: null },
            { year: 250, flood: null, drought: null },
            { year: 300, flood: null, drought: null },
            { year: 350, flood: null, drought: null },
            { year: 400, flood: null, drought: null },
            { year: 450, flood: null, drought: null },
            { year: 500, flood: null, drought: null },
            { year: 550, flood: null, drought: null },
            { year: 600, flood: 3, drought: 0 },
            { year: 650, flood: 9, drought: 2 },
            { year: 700, flood: 2, drought: 3 },
            { year: 750, flood: 1, drought: 3 },
            { year: 800, flood: 5, drought: 1 },
            { year: 850, flood: 2, drought: 4 },
            { year: 900, flood: 3, drought: 1 },
            { year: 950, flood: 3, drought: 1 },
            { year: 1000, flood: 16, drought: 40 },
            { year: 1050, flood: 10, drought: 20 },
            { year: 1100, flood: 11, drought: 14 },
            { year: 1150, flood: 6, drought: 0 },
            { year: 1200, flood: null, drought: null },
            { year: 1250, flood: null, drought: null },
            { year: 1300, flood: null, drought: null },
            { year: 1350, flood: null, drought: null },
            { year: 1400, flood: null, drought: null }
        ],
        temperatures: [
            { year: -200, temp: null },
            { year: -150, temp: null },
            { year: -100, temp: null },
            { year: -50, temp: null },
            { year: 0, temp: 0.4 },
            { year: 50, temp: 0.08 },
            { year: 100, temp: 0.56 },
            { year: 150, temp: 0.4 },
            { year: 220, temp: -0.01 },
            { year: 250, temp: 0.2 },
            { year: 285, temp: -0.36 },
            { year: 300, temp: -0.2 },
            { year: 325, temp: -0.49 },
            { year: 375, temp: 0.2 },
            { year: 395, temp: 0.05 },
            { year: 425, temp: -0.01 },
            { year: 500, temp: -0.62 },
            { year: 520, temp: -0.5 },
            { year: 575, temp: 0.5 },
            { year: 609, temp: 0.2 },
            { year: 645, temp: 0.4 },
            { year: 680, temp: 0.5 },
            { year: 700, temp: 0.6 },
            { year: 750, temp: 0.2 },
            { year: 780, temp: -0.3 },
            { year: 810, temp: -0.4 },
            { year: 825, temp: 0.12 },
            { year: 850, temp: -0.28 },
            { year: 900, temp: -0.2 },
            { year: 918, temp: 0.2 },
            { year: 942, temp: 0.4 },
            { year: 950, temp: 0.7 },
            { year: 975, temp: 0.12 },
            { year: 1000, temp: 0.7 },
            { year: 1020, temp: -0.1 },
            { year: 1030, temp: 0.52 },
            { year: 1050, temp: 0.3 },
            { year: 1060, temp: 1.09 },
            { year: 1070, temp: 0.4 },
            { year: 1075, temp: 0.6 },
            { year: 1080, temp: 0.5 },
            { year: 1090, temp: 0.6 },
            { year: 1100, temp: -0.08 },
            { year: 1150, temp: -0.25 },
            { year: 1200, temp: 0.3 }
        ]

    },
    洛阳: {
        disasters: [
            { year: -200, flood: 0, drought: 0 },
            { year: -150, flood: 1, drought: 1 },
            { year: -100, flood: 2, drought: 1 },
            { year: -50, flood: 0, drought: 0 },
            { year: 0, flood: 3, drought: 1 },
            { year: 50, flood: 4, drought: 4 },
            { year: 100, flood: 3, drought: 6 },
            { year: 150, flood: 13, drought: 13 },
            { year: 200, flood: 6, drought: 4 },
            { year: 250, flood: 4, drought: 2 },
            { year: 300, flood: 10, drought: 1 },
            { year: 350, flood: 1, drought: 2 },
            { year: 400, flood: 0, drought: 0 },
            { year: 450, flood: 0, drought: 0 },
            { year: 500, flood: 3, drought: 0 },
            { year: 550, flood: 3, drought: 0 },
            { year: 600, flood: 3, drought: 0 },
            { year: 650, flood: 8, drought: 2 },
            { year: 700, flood: 8, drought: 4 },
            { year: 750, flood: 14, drought: 3 },
            { year: 800, flood: 8, drought: 1 },
            { year: 850, flood: 3, drought: 4 },
            { year: 900, flood: 3, drought: 1 },
            { year: 950, flood: 8, drought: 4 },
            { year: 1000, flood: 6, drought: 3 },
            { year: 1050, flood: 1, drought: 1 },
            { year: 1100, flood: 3, drought: 3 },
            { year: 1150, flood: null, drought: null },
            { year: 1200, flood: null, drought: null },
            { year: 1250, flood: null, drought: null },
            { year: 1300, flood: null, drought: null },
            { year: 1350, flood: null, drought: null },
            { year: 1400, flood: null, drought: null }
        ],
        temperatures: [
            { year: -200, temp: null },
            { year: -150, temp: null },
            { year: -100, temp: null },
            { year: -50, temp: null },
            { year: 0, temp: 0.4 },
            { year: 50, temp: 0.09 },
            { year: 100, temp: 0.5 },
            { year: 150, temp: 0.4 },
            { year: 210, temp: 0 },
            { year: 240, temp: 0.21 },
            { year: 280, temp: -0.35 },
            { year: 300, temp: -0.2 },
            { year: 336, temp: -0.45 },
            { year: 375, temp: 0.21 },
            { year: 400, temp: 0.1 },
            { year: 425, temp: 0 },
            { year: 490, temp: -0.6 },
            { year: 510, temp: -0.5 },
            { year: 550, temp: 0.47 },
            { year: 600, temp: 0.2 },
            { year: 620, temp: 0.39 },
            { year: 655, temp: 0.5 },
            { year: 680, temp: 0.63 },
            { year: 700, temp: 0.5 },
            { year: 725, temp: 0.2 },
            { year: 780, temp: -0.3 },
            { year: 810, temp: -0.4 },
            { year: 850, temp: 0.1 },
            { year: 875, temp: -0.29 },
            { year: 908, temp: -0.2 },
            { year: 955, temp: 0.4 },
            { year: 970, temp: 0.71 },
            { year: 980, temp: 0.1 },
            { year: 1000, temp: 0.71 },
            { year: 1015, temp: -0.05 },
            { year: 1030, temp: 0.5 },
            { year: 1050, temp: 0.3 },
            { year: 1060, temp: 1.1 },
            { year: 1070, temp: 0.4 },
            { year: 1075, temp: 0.6 },
            { year: 1080, temp: 0.5 },
            { year: 1090, temp: 0.6 },
            { year: 1100, temp: 0 },
            { year: 1150, temp: -0.2 },
            { year: 1202, temp: 0.3 }
        ]

    },
    西安: {
        disasters: [
            { year: -200, flood: 0, drought: 0 },
            { year: -150, flood: 2, drought: 5 },
            { year: -100, flood: 1, drought: 11 },
            { year: -50, flood: 2, drought: 7 },
            { year: 0, flood: 1, drought: 8 },
            { year: 50, flood: 0, drought: 4 },
            { year: 100, flood: 0, drought: 1 },
            { year: 150, flood: 1, drought: 3 },
            { year: 200, flood: 0, drought: 2 },
            { year: 250, flood: 0, drought: 0 },
            { year: 300, flood: 0, drought: 5 },
            { year: 350, flood: 0, drought: 4 },
            { year: 400, flood: 0, drought: 1 },
            { year: 450, flood: 0, drought: 1 },
            { year: 500, flood: 3, drought: 2 },
            { year: 550, flood: 0, drought: 2 },
            { year: 600, flood: 0, drought: 8 },
            { year: 650, flood: 1, drought: 6 },
            { year: 700, flood: 3, drought: 9 },
            { year: 750, flood: 1, drought: 9 },
            { year: 800, flood: 5, drought: 13 },
            { year: 850, flood: 7, drought: 12 },
            { year: 900, flood: 0, drought: 2 },
            { year: 950, flood: 1, drought: 2 },
            { year: 1000, flood: 2, drought: 7 },
            { year: 1050, flood: 0, drought: 9 },
            { year: 1100, flood: 1, drought: 8 },
            { year: 1150, flood: 0, drought: 2 },
            { year: 1200, flood: 2, drought: 0 },
            { year: 1250, flood: 0, drought: 9 },
            { year: 1300, flood: 0, drought: 3 },
            { year: 1350, flood: null, drought: null },
            { year: 1400, flood: null, drought: null }
        ],
        temperatures: [
            { year: -200, temp: null },
            { year: -150, temp: null },
            { year: -100, temp: null },
            { year: -50, temp: null },
            { year: 0, temp: 0.4 },
            { year: 47, temp: 0.09 },
            { year: 100, temp: 0.58 },
            { year: 160, temp: 0.4 },
            { year: 215, temp: 0 },
            { year: 240, temp: 0.2 },
            { year: 275, temp: -0.35 },
            { year: 300, temp: -0.2 },
            { year: 350, temp: -0.5 },
            { year: 375, temp: 0.22 },
            { year: 400, temp: 0.05 },
            { year: 420, temp: -0.01 },
            { year: 495, temp: -0.6 },
            { year: 525, temp: -0.4 },
            { year: 550, temp: 0.42 },
            { year: 590, temp: 0.2 },
            { year: 625, temp: 0.4 },
            { year: 655, temp: 0.42 },
            { year: 690, temp: 0.65 },
            { year: 750, temp: 0.2 },
            { year: 775, temp: -0.3 },
            { year: 815, temp: -0.4 },
            { year: 850, temp: 0.2 },
            { year: 875, temp: -0.3 },
            { year: 910, temp: -0.2 },
            { year: 950, temp: 0.4 },
            { year: 960, temp: 0.7 },
            { year: 975, temp: 0.2 },
            { year: 1000, temp: 0.7 },
            { year: 1005, temp: -0.05 },
            { year: 1020, temp: 0.58 },
            { year: 1050, temp: 0.2 },
            { year: 1064, temp: 1.05 },
            { year: 1071, temp: 0.4 },
            { year: 1080, temp: 0.62 },
            { year: 1090, temp: 0.58 },
            { year: 1095, temp: 0.62 },
            { year: 1100, temp: 0 },
            { year: 1150, temp: -0.2 },
            { year: 1200, temp: 0.22 },
            { year: 1250, temp: 0.98 },
            { year: 1270, temp: 0.8 },
            { year: 1315, temp: -0.3 },
            { year: 1350, temp: -0.2 },
            { year: 1380, temp: 0.3 },
            { year: 1400, temp: 0.1 }
        ]

    }
};

function initCharts() {
    const lineChart = echarts.init(document.getElementById('lineChart'));
    const pieChart = echarts.init(document.getElementById('pieChartContainer'));
    // 强制设置容器高度
    document.getElementById('lineChart').style.height = '100%';
    document.getElementById('pieChartContainer').style.height = '100%';
    // 添加resize监听
    window.addEventListener('resize', function () {
        lineChart.resize();
        pieChart.resize();
    });
    return { lineChart, pieChart };
}
document.addEventListener('DOMContentLoaded', function () {
    // 初始化地图
    const map = L.map('map', {
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

    // 添加底图
    tiandituTer.addTo(map);
    tiandituCva.addTo(map);

    // 按时期定义颜色
    const periodColors = {
        "古代发展萌芽期": "#8b4513",
        "古代发展繁荣期": "#228b22",
        "古代向现代转变期": "#ff8c00",
        "现代发展繁荣期": "#1e90ff"
    };

    // 存储所有标记
    const markers = L.layerGroup().addTo(map);

    // 初始化时间轴
    const timeline = new TL.Timeline('timeline', window.timelineData, {
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
        if (window.events.length > 0) {
            setTimeout(() => highlightEvent(window.events[0]), 500);
        }
    });

    // 创建标记并添加到地图
    function createMarkers() {
        markers.clearLayers();

        window.events.forEach(event => {
            const isVisible = Array.from(document.querySelectorAll('.period-checkbox:checked'))
                .some(checkbox => checkbox.value === event.period);

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
    // 初始加载所有标记
    createMarkers();

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

    // 初始化饼图
    function initPieChart() {
        const pieChart = echarts.init(document.getElementById('pieChartContainer'));
        // 数据处理
        const data = [
            {
                name: '黄河上中游',
                value: 3,
                children: [
                    { name: '疏浚分洪', value: 1, event: '修复光禄渠（汉）、李铣决河（唐）', desc: '疏浚旧渠、开分洪道，减轻主河道压力。', url: 'https://baike.baidu.com/item/%E5%88%86%E6%B4%AA/5194120' },
                    { name: '引水灌溉', value: 1, event: '利用多沙河道大放淤（宋）、汉唐渠以石建闸（明）', desc: '利用黄河泥沙淤灌农田，改良土壤。', url: 'https://baike.baidu.com/item/%E6%B7%A4%E7%81%8C/6071872' },
                    { name: '防洪工程', value: 1, event: '兰州修建河防工程（清）、甘肃靖远修筑河堤（清）', desc: '修筑堤防，保护沿岸城镇。', url: 'https://baike.baidu.com/item/%E9%98%B2%E6%B4%AA%E5%B7%A5%E7%A8%8B/6714543' }
                ]
            },
            {
                name: '黄河下游',
                value: 5,
                children: [
                    { name: '堤防体系构建', value: 1, event: '贾让治河三策（西汉）、宽立堤防（宋）、修筑河南各地堤防（明）', desc: '主张"宽河固堤"或系统性筑堤（如潘季驯"束水攻沙"）。', url: 'https://baijiahao.baidu.com/s?id=1810140296377421234&wfr=spider&for=pc' },
                    { name: '堵口抢险', value: 1, event: '河决酸枣（战国）、贾鲁堵口（元）、刘大夏治张秋决河（明）', desc: '集中人力堵决口（如贾鲁"石船堤法"）或人工改道（如王景治河）。', url: 'https://baike.baidu.com/item/%E5%A0%B5%E5%8F%A3/5895248' },
                    { name: '调水调沙', value: 1, event: '遏淇水入白沟（东汉）、导洛通汴（宋）', desc: '引入清水河流（如洛水）稀释黄河泥沙，改善漕运。', url: 'https://baike.baidu.com/item/%E8%B0%83%E6%B0%B4%E8%B0%83%E6%B2%99/6906532' },
                    { name: '以水代兵', value: 1, event: '朱全忠决河（唐末）、梁决河拒晋（五代）', desc: '人为决河，导致灾害。', url: 'https://www.gzszx.gov.cn/wstd/wsmb/38399.shtml' }
                ]
            },
            {
                name: '运河及关联水系',
                value: 2,
                children: [
                    { name: '漕运', value: 1, event: '修白起渠（战国）、导洛通汴（宋）、朱衡开新河（明）', desc: '开凿或整治运河（如汴渠）保障漕运，结合清水济运。', url: 'https://baike.baidu.com/item/%E6%BC%95%E8%BF%90/1058503' },
                    { name: '闸坝工程', value: 1, event: '宋代卷埽、蒲津河堤创建埽坝工程（唐）', desc: '采用埽工、木石闸坝调控水位，如卷埽技术加固堤岸。', url: 'https://baike.baidu.com/item/%E9%97%B8%E5%9D%9D%E5%B7%A5%E7%A8%8B/10262118' }
                ]
            },
            {
                name: '全流域治理',
                value: 6,
                children: [
                    { name: '统一管理机构', value: 1, event: '成立治河委员会（1946年）', desc: '设立专门机构统筹黄河治理。', url: 'http://www.yrcc.gov.cn' },
                    { name: '水库拦沙', value: 1, event: '"蓄水拦沙"治河方略确立（1954年）', desc: '通过水库（如三门峡）拦截泥沙，减少下游淤积。', url: 'http://www.yrcc.gov.cn/xwdt/hhyw/202312/t20231228_406350.html' },
                    { name: '综合治理', value: 1, event: '"上拦下排、两岸分滞"新方略确立（1965年）', desc: '上游拦沙、中游调水调沙、下游分洪，形成系统治理体系。', url: 'http://www.yrcc.gov.cn/zwzc/zcjd/202403/t20240312_426782.html' },
                    { name: '水量分配', value: 1, event: '"八七"分水方案（1987年）', desc: '确定黄河流域各省区用水配额，缓解水资源矛盾。', url: 'https://baike.baidu.com/item/%E2%80%9C%E5%85%AB%E4%B8%83%E5%88%86%E6%B0%B4%E2%80%9D%E6%96%B9%E6%A1%88/15538461' },
                    { name: '综合规划', value: 1, event: '黄河流域综合规划（2013年）', desc: '统筹防洪、供水、生态保护等目标。', url: 'https://baike.baidu.com/item/%E9%BB%84%E6%B2%B3%E6%B5%81%E5%9F%9F%E7%BB%BC%E5%90%88%E8%A7%84%E5%88%92/141194' },
                    { name: '国家战略', value: 1, event: '黄河重大国家战略提出（2019年）', desc: '将黄河流域生态保护和高质量发展上升为国家战略。', url: 'https://baike.baidu.com/item/%E9%BB%84%E6%B2%B3%E6%B5%81%E5%9F%9F%E7%94%9F%E6%80%81%E4%BF%9D%E6%8A%A4%E5%92%8C%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95/23764172' }
                ]
            }
        ];

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
        const outerData = data.reduce((acc, parent, parentIndex) => {
            const baseColor = colorPalette[parentIndex % colorPalette.length];
            const colorSeries = generateColorSeries(baseColor, parent.children.length);

            return acc.concat(parent.children.map((child, childIndex) => ({
                ...child,
                itemStyle: {
                    color: colorSeries[childIndex % colorSeries.length]
                }
            })));
        }, []);

        //内外层配置
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
                data: data.map(item => item.name)  // 只保留主分类名称
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
                    data: data.map((item, index) => ({  // 添加index参数
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

        pieChart.setOption(option);
        // 添加点击事件
        pieChart.on('click', function (params) {
            if (params.data.url) {
                window.open(params.data.url, '_blank');
            }
        });
        pieChart.setOption(option);

    }

    // 初始化图表
    initPieChart();
    updateLineChart('开封');

    const resizeObserver = new ResizeObserver(() => {
        lineChart.resize();
    });
    resizeObserver.observe(document.getElementById('lineChart'));
    // 窗口大小变化时调整图表大小
    window.addEventListener('resize', function () {
        lineChart.resize();
        pieChart.resize();
        map.invalidateSize();
        lineChart.resize();
    });



    // // 增强联动效果函数
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


    // // 修改时间轴事件处理
    timeline.on('select', function (e) {
        const eventId = e.data?.unique_id;
        if (!eventId) return;

        const eventData = window.events.find(event => event.id === eventId);
        if (eventData) {
            highlightEvent(eventData);
        }// else {
        //     console.warn('未找到匹配事件:', eventId);
        // }
    });


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

    // 添加加载状态控制
    function showLoading() {
        document.getElementById('loading').style.display = 'flex';
    }

    function hideLoading() {
        document.getElementById('loading').style.display = 'none';
    }

    // 初始化时显示加载状态
    showLoading();
    window.addEventListener('load', hideLoading);
    setTimeout(hideLoading, 3000); // 超时保护
});