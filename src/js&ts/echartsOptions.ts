import * as echarts from 'echarts';
import Henan from '@/assets/json/Henan.json'
import Shandong from '@/assets/json/ShanDong.json'
import huanghe from '@/assets/json/huanghe.json'

import { tLinks } from '@/js&ts/rtChart'

import HIMG1 from '@/assets/images/嘉应观.jpg'
import HIMG2 from '@/assets/images/五龙口古代水利设施.png'
import HIMG3 from '@/assets/images/人民胜利渠渠首.png'
import HIMG4 from '@/assets/images/开封镇河铁犀.png'
import HIMG5 from '@/assets/images/林公堤.png'
import HIMG6 from '@/assets/images/三门峡水利枢纽工程.png'
import HIMG7 from '@/assets/images/东坝头险工.png'
import HIMG8 from '@/assets/images/三门峡水文站.png'
import HIMG9 from '@/assets/images/花园口水文站.png'

import SIMG1 from '@/assets/images/戴村坝.png'
import SIMG2 from '@/assets/images/高村险工.png'
import SIMG3 from '@/assets/images/泺口险工.png'
import SIMG4 from '@/assets/images/南坦险工.png'
import SIMG5 from '@/assets/images/打渔张灌区引黄闸.jpg'
import SIMG6 from '@/assets/images/石洼分洪闸.png'
import SIMG7 from '@/assets/images/泺口水文站.png'
import SIMG8 from '@/assets/images/黄河东银铁路银山车站旧址（黄河东银铁路文化展馆）.png'

import xianIMG from '@/assets/images/陕西黄河.jpg'
import taiyuanIMG from '@/assets/images/山西黄河.jpg'
import sichuanIMG from '@/assets/images/四川黄河.jpg'
import ningxiaIMG from '@/assets/images/宁夏黄河.jpg'
import gansuIMG from '@/assets/images/甘肃黄河.jpg'
import qinghaiIMG from '@/assets/images/青海黄河.jpg'

//引力气泡图
const chartData = [
    { "id": "0", "name": "正向情绪", "color": "#91cc75", "size": 60, "des": "情绪取向", "category": 0 },
    { "id": "1", "name": "负向情绪", "color": "#91cc75", "size": 60, "des": "情绪取向", "category": 0 },

    { "id": "2", "name": "积极的", "color": "#fac858", "size": 40, "des": "情绪类型", "category": 1 },
    { "id": "3", "name": "惊讶", "color": "#fac858", "size": 40, "des": "情绪类型", "category": 1 },
    { "id": "4", "name": "称赞", "color": "#fac858", "size": 40, "des": "情绪类型", "category": 1 },
    { "id": "5", "name": "愉悦", "color": "#fac858", "size": 40, "des": "情绪类型", "category": 1 },
    { "id": "6", "name": "消极的", "color": "#fac858", "size": 40, "des": "情绪类型", "category": 1 },
    { "id": "7", "name": "气恼", "color": "#fac858", "size": 40, "des": "情绪类型", "category": 1 },
    { "id": "8", "name": "厌恶", "color": "#fac858", "size": 40, "des": "情绪类型", "category": 1 },
    { "id": "9", "name": "惧怕", "color": "#fac858", "size": 40, "des": "情绪类型", "category": 1 },
    { "id": "10", "name": "悲伤", "color": "#fac858", "size": 40, "des": "情绪类型", "category": 1 },

    { "id": "11", "name": "践行治水思想", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "12", "name": "震撼", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "13", "name": "魅力", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "14", "name": "幸福河", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "15", "name": "工作条件艰苦", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "16", "name": "资源过度开发", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "17", "name": "黄沙漫天", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "18", "name": "警惕外来物种入侵", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "19", "name": "古人乡关愁绪", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "20", "name": "守护黄河安澜", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "21", "name": "黄河咆哮", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "22", "name": "大好河山", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "23", "name": "治河成效", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "24", "name": "环境污染", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "25", "name": "破坏生态平衡", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "26", "name": "河道淤积", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "27", "name": "水土流失", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "28", "name": "财产损失", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "29", "name": "环保意识", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "30", "name": "神奇翠绿", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "31", "name": "智慧结晶", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "32", "name": "改善环境", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "33", "name": "绿色沙漠", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "34", "name": "影响经济发展", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "35", "name": "污水横流", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "36", "name": "旱灾", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "37", "name": "人员伤亡", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "38", "name": "继承发扬中国文化", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "39", "name": "母亲河", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "40", "name": "保障平安", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "41", "name": "精神传承危机", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "42", "name": "河口决堤", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
    { "id": "43", "name": "洪灾", "color": "#5470c6", "size": 15, "des": "关键词", "category": 2 },
]

//带经纬度数据
const mbData = [
    { xLabel: '清雍正元年（1723年）', },
    { xLabel: '明永乐九年（1411年）', },
    { xLabel: '秦始皇赢政二十六年（公元前221年）', },
    { xLabel: '1950-1952年', },
    { xLabel: '明宣德五年（1430年）', },
    { xLabel: '清道光二十一年（1841年）', },
    { xLabel: '1957-1961年', },
    { xLabel: '明弘治七年（1494年）', },
    { xLabel: '1949-1957年', },
    { xLabel: '1881年', },
    { xLabel: '1989年', },
    { xLabel: '清光绪十六年（1890年）', },
    { xLabel: '清光绪十一年（1885年）', },
    { xLabel: '1956年', },
    { xLabel: '1967年', },
    { xLabel: '1974年', },
    { xLabel: '1938年', },
    { xLabel: '1919年', },
    { xLabel: '明弘治三年（1490年）', },
    { xLabel: '1972年', },
]

//改道
export const lbData = [
    {
        name: '第一次',
        color: '#cfa347',
        xData: ['滑县', '大名', '夏津', '清河', '沧州', '黄骅', '渤海(汉志河)'],
        yData: [40, 141, 65, 78, 52, 189, 124],
        des: '前 602 年（周定王五年）,首次大改道，形成汉志河<br/>向东迁移 40km，经滑县、大名、夏津、清河，由沧州、黄骅入渤海<br/>'
    },
    {
        name: '第二次',
        color: '#cfa347',
        xData: ['濮阳', '清丰', '阳谷', '聊城', '临邑', '惠民', '利津', '渤海(东汉河)'],
        yData: [65, 78, 52, 189, 124, 100, 54, 256],
        des: '11 年（王莽始建国三年），向东迁移 80km<br/>王景治河后，历东汉、隋、唐、五代无水患'
    },
    {
        name: '第三次',
        color: '#cfa347',
        xData: ['濮阳市东昌湖集', '商胡北流', '无棣笃马河', '渤海(北流 + 东流)'],
        yData: [78, 52, 189, 124],
        des: '1048 年（宋仁宗庆历八年）,先向北迁移 40~80km（商胡北流），1060 年分出东流（由无棣笃马河入渤海）<br/>形成双河道，称 “商胡北流” 与 “东流”'
    },
    {
        name: '第四次',
        color: '#cfa347',
        xData: ['延津', '封丘', '长垣', '兰封', '东明', '曹县', '云梯关', '黄海'],
        yData: [140, 241, 65, 78, 52, 189, 124, 99],
        des: '1194 年（金章宗明昌五年）,首次长期夺淮入海'
    },
    {
        name: '第五次',
        color: '#cfa347',
        xData: ['开封', '兰考东坝头', '黄海'],
        yData: [40, 161, 65],
        des: '1494 年（明孝宗弘治二年），分三支：南支入涡河、颍河；北支冲张秋运河；中支合泗水入淮。<br/>河道紊乱，以夺淮入海为主'
    },
    {
        name: '第六次',
        color: '#cfa347',
        xData: ['兰考东坝头', '濮阳', '聊城', '济南', '利津', '渤海(现行河道)'],
        yData: [40, 141, 65, 189, 124, 161],
        des: '1855 年（清咸丰五年）,河道回归泰山之阴，形成现行河道'
    },
]

export const geoCoordMap = {
    "huanghe": [
        { name: '河南', value: [113.665412, 34.757975, 100, 'image://' + HIMG1] },
        { name: '山东', value: [117.000923, 36.675807, 100, 'image://' + SIMG1] },
        { name: '陕西省', value: [109.0861893, 34.53727, 100, 'image://' + xianIMG] },
        { name: '山西省', value: [112.549248, 37.857014, 100, 'image://' + taiyuanIMG] },
        { name: '四川省', value: [104.065735, 30.659462, 100, 'image://' + sichuanIMG] },
        { name: '宁夏回族自治区', value: [106.278179, 38.46637, 100, 'image://' + ningxiaIMG] },
        { name: '青海省', value: [101.778916, 36.623178, 100, 'image://' + qinghaiIMG] },
        { name: '甘肃省', value: [103.823557, 36.058039, 100, 'image://' + gansuIMG] },
    ],
    "河南省": [
        {
            "name": "嘉应观",
            "location": "河南焦作市武陟县杨庄村南",
            "value": [
                113.301248,
                35.021589, 100,
                'image://' + HIMG1,
                '焦作市'
            ],
            "time": "清雍正元年（1723年）",
            "type": "人民治黄纪念地",
            "des": "嘉应观始建于清雍正元年（1723年），作为我国历史上唯一记述治黄史的庙宇，也是黄河流域保存最完好、规模最大、规格最高的清代皇家风格建筑群。"
        },
        {
            "name": "五龙口古代水利设施",
            "location": "河南省济源市五龙口镇",
            "value": [112.689169, 35.135853, 100, 'image://' + HIMG2, '济源市'],
            "time": "秦始皇赢政二十六年（公元前221年）",
            "type": "古闸坝及枢纽工程",
            "des": "五龙口古代水利设施位于济源五龙口镇沁河出山口。该设施始建于秦代，明代万历年间，在沁口附近相继开挖五条水渠，形成了五龙分水之势。五龙口古代水利设施是我国历史上第一个采用“暗渠”方式实现“隔山取水”的水利工程，也是首次利用“水流弯道”原理取水的水利工程。"
        },
        {
            "name": "人民胜利渠渠首",
            "location": "河南省焦作市武陟县嘉应观乡秦厂大坝",
            "value": [
                113.517174,
                34.998752, 100,
                'image://' + HIMG3, '焦作市'
            ],
            "time": "1950-1952年",
            "type": "灌溉工程",
            "des": "其总干渠平行于京广铁路，灌区涉及新乡、获嘉、武陟、原阳、延津、汲县及新乡市郊区等六县一市的农田灌溉，并为新乡市工业及生活供水，还有计划向天津、安阳送水。人民胜利渠正以新姿态接待一批批游人，成为武陟著名的人文景观，为武陟的经济建设作出新贡献。"
        },
        {
            "name": "开封镇河铁犀",
            "location": "河南省开封市许铁牛村",
            "value": [
                114.394176,
                34.824252, 100,
                'image://' + HIMG4, '开封市'
            ],
            "time": "明宣德五年（1430年）",
            "type": "人民治黄纪念地",
            "des": "河南巡抚于谦动员沿岸居民参与以工代赈，对开封的堤防进行了加固，并铸造了镇河铁犀。镇河铁犀坐南向北，面河而踞，通高2.04米，围长2.66米。"
        },
        {
            "name": "林公堤",
            "location": "河南省开封市西北部柳园口",
            "value": [
                114.328471,
                34.887465, 100,
                'image://' + HIMG5, '开封市'
            ],
            "time": "清道光二十一年（1841年）",
            "type": "古堤防",
            "des": "由林则徐主持修建。当时黄河在开封张湾决口，洪水围困开封城，林则徐临危受命，成功解除水患。为纪念林则徐之功，开封市人民政府于1992年4月1日，将林则徐率众修筑的堤防命名为林公堤。"
        },
        {
            "name": "三门峡水利枢纽工程",
            "location": "河南省三门峡市湖滨区大安街道",
            "value": [
                111.34108,
                34.82669, 100,
                'image://' + HIMG6, '三门峡市'
            ],
            "time": "1957-1961年",
            "type": "枢纽工程",
            "des": "三门峡水利枢纽是新中国首座以防洪为主的大型综合水利工程。其最大特点是通过 “蓄清排浑” 方式解决泥沙淤积难题，控制黄河 91.5% 流域面积及 98% 来沙量。作为 “万里黄河第一坝”，它在防洪、发电、生态等方面效益显著，入选中国工业遗产名录，为多泥沙河流治理提供国际范例，助力黄河安澜。"
        },
        {
            "name": "太行堤（河南段）",
            "location": "河南省新乡市延津县",
            "value": [
                114.205624,
                35.165876, 100,
                'image://' + HIMG6, '新乡市'
            ],
            "time": "明弘治七年（1494年）",
            "type": "古堤防",
            "des": "副都御史刘大夏堵张秋河决，又浚黄陵岗南贾鲁旧河。八年（1495年）正月塞黄陵岗、荆隆口等决口7处，以防河水北犯，在堤西“起胙城（今延津）历滑县、长垣、东明、曹州，抵虞城，凡三百六十里”，屹然如山，故曰“太行堤”。"
        },
        {
            "name": "东坝头险工",
            "location": "河南省兰考县东坝头镇杨庄村",
            "value": [
                114.780984,
                34.936476, 100,
                'image://' + HIMG7, '开封市'
            ],
            "time": "1949-1957年",
            "type": "古险工",
            "des": "东坝头险工地位于兰考县，地处九曲黄河最后一道弯的险要位置。历史上，该地区多次发生黄河决口，1855年铜瓦厢决口终结了黄河七百余年向南流动的历史，导致黄河改道东北，经大清河注入渤海。东坝头险工的大部分工程始建于1949年至1957年之间，通过持续的抢修和建设逐步完成。"
        },
        {
            "name": "影唐险工",
            "location": "河南省濮阳市台前县孙口乡影唐村",
            "value": [
                115.889175,
                35.958063, 100,
                'image://' + HIMG7, '濮阳市'
            ],
            "time": "1989年",
            "type": "古险工",
            "des": "\n影唐险工位于台前县黄河河南段尾闾，采用\"凹入型\"布局与\"以坝护湾、以湾导溜\"治河理论，创新\"石坝+柳石枕\"结构抗冲护滩。作为黄河下游关键控导工程，通过精准河势调控实现防洪减淤，累计护滩淤地超2万亩，保障鲁豫两省180万亩耕地安全，为游荡型河段治理提供典型范例。"
        },
        {
            "name": "三门峡水文站",
            "location": "河南省三门峡市湖滨区高庙乡坝头",
            "value": [
                111.346816,
                34.827409, 100,
                'image://' + HIMG8, '三门峡市'
            ],
            "time": "1974年",
            "type": "水文站",
            "des": "\n三门峡水文站以96亿立方米库容调洪削峰30%+，保障下游1.2亿人安全；年均供水100亿立方米，拦沙100亿吨降河床抬升80%；200平方公里湿地护生态，支撑黄河流域安澜与高质量发展。"
        },
        {
            "name": "花园口水文站",
            "location": "河南省郑州市惠济区",
            "value": [
                113.66597,
                34.905067, 100,
                'image://' + HIMG9, '郑州市'
            ],
            "time": "1938年",
            "type": "水文站",
            "des": "花园口水文站位于郑州市花园口镇，是黄河下游起点站，也是国家基本水文站、重点报汛站、大河重要控制站。花园口水文站1938年7月设站，几经停复，承担着向国家防总、黄河防总等单位报汛的任务。"
        },
        {
            "name": "原阳砖坝遗迹",
            "location": "河南省原阳县官厂镇板张庄村",
            "value": [
                113.911164,
                34.97931, 100,
                'image://' + HIMG9, '新乡市'
            ],
            "time": "明弘治三年（1490年）",
            "type": "古闸坝及枢纽工程",
            "des": "原阳砖坝遗迹为清代 “以砖代埽” 治河典范，首创抛砖筑坝技术，现存规模最大古代砖石险工，突破传统埽工易腐局限，选址控黄河出邙山首冲要津，串联战国至明清五代堤防体系，见证 400 年治河史，其 “就地取材、因势利导” 理念为现代生态治理提供历史镜鉴。"
        },
    ],
    "山东省": [
        {
            "name": "戴村坝",
            "location": "山东省泰安市东平县彭集镇南城子村",
            "value": [
                116.544818,
                35.886284, 100,
                'image://' + SIMG1, '泰安市'
            ],
            "time": "明永乐九年（1411年）",
            "type": "古闸坝及枢纽工程",
            "des": "戴村坝是我国古代水利工程的杰出代表，其独特的“闸门式”结构，通过分水、引水、泄洪等功能，有效调节黄河与运河的水量，保障了明清两代漕运畅通，体现了古代水利工程技术的高度成就。"
        },
        {
            "name": "高村险工",
            "location": "山东省菏泽市东明县菜园集镇高村",
            "value": [
                115.079781,
                35.351928, 100,
                'image://' + SIMG2, '菏泽市'
            ],
            "time": "1881年",
            "type": "古险工",
            "des": "东明高村险工位于黄河下游，始建于1881年，历经多次加固成为重要防洪屏障。作为首批黄河水利遗产，其承载治黄历史与红色记忆，现转型为集抗洪、生态、文化于一体的活态博物馆，推动黄河文化传承与流域高质量发展。"
        },
        {
            "name": "泺口险工",
            "location": "山东省济南市天桥区黄河左岸大坝",
            "value": [
                116.987106,
                36.678665, 100,
                'image://' + SIMG3, '济南市'
            ],
            "time": "清光绪十六年（1890年）",
            "type": "古险工",
            "des": "泺口险工位于黄河下游济南段，以\"石坝+护岸\"结构形成险要河段防洪屏障，通过\"以坝护弯、以弯导流\"技术控导河势，历年来成功抵御多次大洪水，保障济南及沿黄地区安全，兼具生态护岸与文化遗产价值，是黄河下游重要的水利枢纽工程。"
        },
        {
            "name": "南坦险工",
            "location": "山东省德州市齐河县齐河黄河河务局",
            "value": [
                116.767385,
                36.783134, 100,
                'image://' + SIMG4, '德州市'
            ],
            "time": "清光绪十一年（1885年）",
            "type": "古险工",
            "des": "南坦险工始建于清，1970年，黄河上第一只简易机动自航式钢板吸泥船在这里诞生，开辟了黄河下游机淤固堤的新纪元。1978年，引黄放淤固堤经验获得“全国科学大会奖”。2008年在南坦险工建成“红心一号”文化广场，并于2022年完成提升改造。目前，南坦险工成为集防洪、生态、文化等于一体的综合性水利遗产，并被纳入齐河黄河国际生态城国家级旅游度假区。"
        },
        {
            "name": "打渔张灌区引黄闸",
            "location": "山东省滨州市博兴县山东打渔张灌区引黄闸",
            "value": [
                118.162123,
                37.360775, 100,
                'image://' + SIMG5, '滨州市'
            ],
            "time": "1956年",
            "type": "灌溉工程（涵闸工程）",
            "des": "打渔张灌区引黄闸是黄河下游重要的水利枢纽工程，其价值和水利意义主要体现在：作为灌区核心工程（始建于1956年，含老一担、引黄济青等13座进水闸），承担着引黄灌溉、城乡供水等核心功能，通过科学调配黄河水资源，有效保障了区域农业生产和生态用水需求；其历史价值显著，引黄闸主体被列为县级文物保护单位，原山东省委书记舒同题写的闸名成为灌区文化标志，承载了黄河治理的历史记忆；同时，工程与湿地文化、黄河文化深度融合，形成\"一中心四景观带\"的水利风景区，兼具防洪、生态、景观多重效益，成为黄河流域水利工程与文化遗产、自然景观协同发展的典范。"
        },
        {
            "name": "石洼分洪闸",
            "location": "山东省泰安市东平县戴庙镇",
            "value": [
                116.105303,
                35.966446, 100,
                'image://' + SIMG6, '泰安市'
            ],
            "time": "1967年",
            "type": "涵闸工程",
            "des": "石洼分洪闸（1960 年建）为东平湖蓄滞洪区核心工程，50 孔 / 438 米总宽，设计分洪 4000 立方米 / 秒，系黄河流域最大分洪闸之一。采用开敞式平底闸，机械化快控洪水。作为下游防洪关键节点，承担分蓄超标洪水、削峰功能，保护济南、淄博、京沪铁路、胜利油田，使防洪标准提升至百年一遇，兼顾生态调度，保障流域安全发展。"
        },
        {
            "name": "泺口水文站",
            "location": "山东省济南市天桥区济泺路",
            "value": [
                116.996099,
                36.724073, 100,
                'image://' + SIMG7, '济南市'
            ],
            "time": "1919年",
            "type": "水文站",
            "des": "泺口水文站作为黄河干流第一个水文站，开创黄河流速仪测流先河。历经五代技术革新（从人工到无人吊箱），现承担水沙冰污全要素监测，支撑下游防洪防凌、水资源调度及生态修复，其百年数据链见证黄河治理变迁，周恩来视察旧址等文化遗存彰显治黄精神，是黄河水文遗产中兼具历史连续性、技术创新性与战略支撑性的核心节点。"
        },
        {
            "name": "黄河东银铁路银山车站旧址（黄河东银铁路文化展馆）",
            "location": "山东省泰安市银山镇",
            "value": [
                116.132753,
                36.058848, 100,
                'image://' + SIMG8, '泰安市'
            ],
            "time": "1972年",
            "type": "人民治黄纪念地",
            "des": "黄河东银铁路银山车站旧址（黄河东银铁路文化展馆）是黄河系统唯一以防汛物资运输专线为主题的文化展馆，为解决山东黄河上游治黄石料运输难题而修建，共运输防汛石料93万立方米，为山东黄河抗洪抢险、防洪工程建设作出了重大贡献."
        }
    ]
}

export const nameAndJson = {
    "河南省": Henan,
    "山东省": Shandong,
    "huanghe": huanghe
}



export type EO = echarts.EChartsOption;
interface EOS {
    "lb": EO
    "rt": EO
    "mbt": EO
    "huanghe": EO
    "河南省": EO
    "山东省": EO
    "TRT": EO
    "TRB": EO
    "LBR": EO
    "LBLTotal": EO
    "LBLChina": EO
}
export const options: EOS = {
    "lb": {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            top: '4%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: lbData[0].xData
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '偏移值',
                type: 'line',
                areaStyle: {
                    color: lbData[0].color,
                    opacity: 0.5
                },
                lineStyle: {
                    color: lbData[0].color
                },
                itemStyle: {
                    color: lbData[0].color
                },
                emphasis: {
                    focus: 'series'
                },
                data: lbData[0].yData
            },
        ]
    },
    "rt": {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params: any) {
                let tar;
                if (params[1] && params[1].value !== '-') {
                    tar = params[1];
                } else {
                    tar = params[2];
                }
                return tar && tar.name + '<br/>' + tar.value;
            }
        },
        grid: {
            top: '2%',
            left: '3%',
            right: '2%',
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: (function () {
                let list = [];
                mbData.forEach((e) => {
                    list.push(e.xLabel)
                })
                return list;
            })()
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Placeholder',
                type: 'bar',
                stack: 'Total',
                silent: true,
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                },
                emphasis: {
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    }
                },
                data: [0, 200, 545, 938, 830, 676, 811, 989, 1275, 1156, 795, 592, 733, 833, 912, 1112, 1276, 1135, 1035, 956, 756, 592]
            },
            {
                name: 'Income',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [200, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-', 141, 100, 79, 200, 164, '-', '-', '-', '-']
            },
            {
                name: 'Expenses',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'bottom'
                },
                data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203, '-', '-', '-', '-', '-', 141, 100, 79, 200, 164]
            }
        ]
    },
    "huanghe": {
        tooltip: {//鼠标悬停时的信息提示
            trigger: "item",
            formatter: function (params) {//回调函数类型的格式，具体看官方文档
                if (params.seriesType == "effectScatter") {
                    return params.data.name
                } else {
                    return params.name;
                }
            }
        },
        geo: {
            map: 'huanghe',
            zoom: 1.2,
            roam: true,
            itemStyle: {
                areaColor: "#588EA2",
                borderColor: "rgba(218, 224, 255,1)",
                borderWidth: 1
            },
            label: {
                color: "#fff"
            },
            selectedMode: true,//这个不打开的话geo的各种action全部无效！
            select: {
                label: {
                    show: true,
                    color: "#fff"
                },
                itemStyle: {
                    areaColor: "#2B91B7"
                }
            },
            emphasis: {
                label: {
                    show: true,
                    color: "#fff"
                },
                itemStyle: {
                    areaColor: "#D1872A"
                }
            },
        },
        series: [
            {
                id: '1',
                name: 'hightLightDot',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 1,
                rippleEffect: {
                    brushType: 'stroke'
                },
                symbolSize: 10,
                itemStyle: {
                    color: '#fac858'
                },
                data: (function () {
                    let list = [];
                    geoCoordMap['huanghe'].forEach((e) => { list.push({ value: e.value, name: e.name }) })
                    return list;
                })()
            },
            {
                id: '2',
                name: 'pinScatter',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [46, 46],
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 9,
                    formatter: '{b}'
                },
                itemStyle: {
                    color: '#fac858'
                },
                zlevel: 2,
                data: (function () {
                    let list = [];
                    geoCoordMap['huanghe'].forEach((e) => { list.push({ value: e.value, name: e.name }) })
                    return list;
                })()
            },
            {
                id: '3',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: (value): string => {
                    return value[3]
                },
                symbolSize: [72, 48],
                symbolOffset: [0, -75],
                zlevel: 3,
                data: (function () {
                    let list = [];
                    geoCoordMap['huanghe'].forEach((e) => { list.push({ value: e.value, name: e.name }) })
                    return list;
                })()
            },
        ]
    },
    "河南省": {
        tooltip: {
            trigger: "item",
            formatter: function (params) {
                if (params.seriesType == "effectScatter") {
                    return params.data.name
                } else {
                    return params.name;
                }
            }
        },
        geo: {
            map: '河南省',
            zoom: 1.2,
            roam: true,
            itemStyle: {
                areaColor: "#83B3C5",
                borderColor: "rgba(218, 224, 255,1)",
                borderWidth: 1
            },
            label: {
                show: true,
                color: "#fff"
            },
            selectedMode: true,
            select: {
                label: {
                    show: true,
                    color: "#fff"
                },
                itemStyle: {
                    areaColor: "#2B91B7"
                }
            },
            emphasis: {
                label: {
                    show: true,
                    color: "#fff"
                },
                itemStyle: {
                    areaColor: "#D1872A"
                }
            },
        },
        series: [
            {
                id: '1',
                name: 'hightLightDot',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                symbolSize: 10,
                itemStyle: {
                    color: '#fac858'
                },
                data: (function () {
                    let list = [];
                    geoCoordMap['河南省'].forEach((e) => { list.push({ value: e.value, name: e.name }) })
                    return list;
                })()
            },
            {
                id: '2',
                name: 'pinScatter',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [40, 40],
                itemStyle: {
                    color: '#fac858'
                },
                zlevel: 2,
                data: (function () {
                    let list = [];
                    geoCoordMap['河南省'].forEach((e) => { list.push({ value: e.value, name: e.name }) })
                    return list;
                })()
            },
            {
                id: '3',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: (value): string => {
                    return value[3]
                },
                symbolSize: [50, 40],
                symbolOffset: [0, -60],
                z: 10,
                data: (function () {
                    let list = [];
                    geoCoordMap['河南省'].forEach((e) => { list.push({ value: e.value, name: e.name }) })
                    return list;
                })()
            },
        ]
    },
    "山东省": {
        tooltip: {
            trigger: "item",
            formatter: function (params) {
                if (params.seriesType == "effectScatter") {
                    return params.data.name
                } else {
                    return params.name;
                }
            }
        },
        geo: {
            map: '山东省',
            zoom: 1.2,
            roam: true,
            itemStyle: {
                areaColor: "#83B3C5",
                borderColor: "rgba(218, 224, 255,1)",
                borderWidth: 1
            },
            label: {
                show: true,
                color: "#fff"
            },
            selectedMode: true,
            select: {
                label: {
                    show: true,
                    color: "#fff"
                },
                itemStyle: {
                    areaColor: "#2B91B7"
                }
            },
            emphasis: {
                label: {
                    show: true,
                    color: "#fff"
                },
                itemStyle: {
                    areaColor: "#D1872A"
                }
            },
        },
        series: [
            {
                id: '1',
                name: 'hightLightDot',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                symbolSize: 10,
                itemStyle: {
                    color: '#fac858'
                },
                data: (function () {
                    let list = [];
                    geoCoordMap['山东省'].forEach((e) => { list.push({ value: e.value, name: e.name }) })
                    return list;
                })()
            },
            {
                id: '2',
                name: 'pinScatter',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'pin',
                symbolSize: [40, 40],
                itemStyle: {
                    color: '#fac858'
                },
                zlevel: 2,
                data: (function () {
                    let list = [];
                    geoCoordMap['山东省'].forEach((e) => { list.push({ value: e.value, name: e.name }) })
                    return list;
                })()
            },
            {
                id: '3',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: (value): string => {
                    return value[3]
                },
                symbolSize: [50, 40],
                symbolOffset: [0, -60],
                z: 10,
                data: (function () {
                    let list = [];
                    geoCoordMap['山东省'].forEach((e) => { list.push({ value: e.value, name: e.name }) })
                    return list;
                })()
            },
        ]
    },
    "mbt": {
        title: [{
            text: '建筑类型',
            textStyle: { fontSize: 12, color: '#D1872A' },
            top: 0,
            left: 0,
        },
        {
            text: '历史朝代',
            textStyle: { fontSize: 12, color: '#D1872A' },
            top: 'top',
            left: '21%',
        },
        {
            text: '黄河河段',
            textStyle: { fontSize: 12, color: '#D1872A' },
            top: 'top',
            left: '42%',
        },
        {
            text: '保存状况',
            textStyle: { fontSize: 12, color: '#D1872A' },
            top: 'top',
            left: '64%',
        },
        {
            text: '保护级别',
            textStyle: { fontSize: 12, color: '#D1872A' },
            top: 'top',
            left: '85%',
        },
        ],
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        animation: false,
        series: [
            {
                type: 'sankey',
                top: '8%',
                right: '9%',
                left: '3%',
                bottom: 0,
                emphasis: {
                    focus: 'adjacency'
                },
                data: [{ name: '石刻石窟' },
                { name: '宫殿&都城遗址' },
                { name: '佛教建筑' },
                { name: '水利建设' },
                { name: '新石器' },
                { name: '夏商' },
                { name: '两周' },
                { name: '秦汉' },
                { name: '三国魏晋南北朝' },
                { name: '隋唐五代' },
                { name: '宋元明清' },
                { name: '黄河上游' },
                { name: '黄河中游' },
                { name: '黄河下游' },
                { name: '保存较好' },
                { name: '完全重建' },
                { name: '严重破坏' },
                { name: '不存遗址可考' },
                { name: '国家级' },
                { name: '省级' },
                { name: '市级' },
                { name: '未明确' },
                ],
                links: tLinks,
                label: {
                    position: 'right',
                    color: 'inherit',
                    fontSize: '9'
                },
                lineStyle: {
                    color: 'gradient',
                    curveness: 0.5
                }
            }
        ]
    },
    "TRT": {
        tooltip: {
            trigger: 'item',
            formatter: (params): string => {
                return params.value[1] + ': ' + params.name
            }
        },
        cursor: 'pointer',
        legend: [{ data: ['情绪取向', '情绪类型', '关键词'], bottom: '10' }],
        series: [
            {
                type: 'graph',
                layout: 'force',
                cursor: 'pointer',
                force: {
                    repulsion: 150,
                },
                label: {
                    color: '#000',
                    show: true
                },
                roam: true,
                categories: [{ name: '情绪取向' }, { name: '情绪类型' }, { name: '关键词' },],
                data: (function () {
                    var graphData = []
                    chartData.forEach((item, index) => {
                        graphData.push(
                            {
                                //如果id也写上的话连线会失败，卡了一节课
                                name: item.name,
                                value: [0, item.des],
                                symbolSize: item.size,
                                draggable: true,
                                category: item.des,
                                label: {
                                    show: item.size > 30,
                                    textStyle: {
                                        fontSize: 12,
                                        color: '#fff',
                                    }
                                },
                                emphasis: {
                                    label: {
                                        color: '#000',
                                        show: true
                                    }
                                }
                            },
                        )
                    })
                    return graphData;
                })(),
                links: [
                    { source: '正向情绪', target: '负向情绪' },
                    { source: '正向情绪', target: '积极的' },
                    { source: '正向情绪', target: '惊讶' },
                    { source: '正向情绪', target: '称赞' },
                    { source: '正向情绪', target: '愉悦' },
                    { source: '负向情绪', target: '消极的' },
                    { source: '负向情绪', target: '气恼' },
                    { source: '负向情绪', target: '厌恶' },
                    { source: '负向情绪', target: '惧怕' },
                    { source: '负向情绪', target: '悲伤' },

                    { source: '积极的', target: '践行治水思想' },
                    { source: '积极的', target: '守护黄河安澜' },
                    { source: '积极的', target: '环保意识' },
                    { source: '积极的', target: '继承发扬中国文化' },
                    { source: '惊讶', target: '震撼' },
                    { source: '惊讶', target: '黄河咆哮' },
                    { source: '惊讶', target: '神奇翠绿' },
                    { source: '称赞', target: '魅力' },
                    { source: '称赞', target: '大好河山' },
                    { source: '称赞', target: '智慧结晶' },
                    { source: '称赞', target: '母亲河' },
                    { source: '愉悦', target: '幸福河' },
                    { source: '愉悦', target: '治河成效' },
                    { source: '愉悦', target: '改善环境' },
                    { source: '愉悦', target: '保障平安' },
                    { source: '消极的', target: '工作条件艰苦' },
                    { source: '消极的', target: '环境污染' },
                    { source: '消极的', target: '绿色沙漠' },
                    { source: '气恼', target: '资源过度开发' },
                    { source: '气恼', target: '破坏生态平衡' },
                    { source: '气恼', target: '影响经济发展' },
                    { source: '气恼', target: '精神传承危机' },
                    { source: '厌恶', target: '黄沙漫天' },
                    { source: '厌恶', target: '河道淤积' },
                    { source: '厌恶', target: '污水横流' },
                    { source: '厌恶', target: '河口决堤' },
                    { source: '惧怕', target: '警惕外来物种入侵' },
                    { source: '惧怕', target: '水土流失' },
                    { source: '惧怕', target: '旱灾' },
                    { source: '惧怕', target: '洪灾' },
                    { source: '悲伤', target: '古人乡关愁绪' },
                    { source: '悲伤', target: '财产损失' },
                    { source: '悲伤', target: '人员伤亡' },
                ],
            },
        ],
    },
    "TRB": {
        grid: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params): string {
                return params.name + ' 占比：<br/>' + (params.value / 10).toFixed(2) + '%';
            },
        },
        legend: {
            bottom: 0,
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                padAngle: 1,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 390, name: '积极的' },
                    { value: 110, name: '消极的' },
                    { value: 80, name: '愉悦' },
                    { value: 10, name: '气恼' },
                    { value: 60, name: '厌恶' },
                    { value: 1, name: '惧怕' },
                    { value: 40, name: '悲伤' },
                    { value: 10, name: '惊讶' },
                    { value: 300, name: '称赞' },
                ]
            }
        ]
    },
    "LBR": {
        grid: {
            bottom: 0,
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params): string {
                return params.name + ' 占比：<br/>' + (params.value / 10.7).toFixed(2) + '%';
            },
        },
        legend: {
            bottom: 0,
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['35%', '60%'],
                avoidLabelOverlap: false,
                padAngle: 1,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 410, name: '积极的' },
                    { value: 90, name: '消极的' },
                    { value: 30, name: '愉悦' },
                    { value: 1, name: '气恼' },
                    { value: 40, name: '厌恶' },
                    { value: 40, name: '惧怕' },
                    { value: 10, name: '悲伤' },
                    { value: 10, name: '惊讶' },
                    { value: 370, name: '称赞' },
                ]
            }
        ]
    },
    "LBLTotal": {
        tooltip: {
            trigger: 'item',
            formatter: function (params): string {
                return params.name + '<br/>数量：' + params.value[1] + '<br/>占比：' + params.value[2];
            },
        },
        grid: {
            bottom: '10%'
        },
        dataset: [
            {
                dimensions: ['ipLocation', 'cnt', 'percent'],
                source: [
                    ['广东', 246, '10.85%'],
                    ['山东', 171, '7.54%'],
                    ['江苏', 145, '6.4%'],
                    ['北京', 134, '5.91%'],
                    ['河南', 118, '5.21%'],
                    ['安徽', 113, '4.98%'],
                    ['浙江', 106, '4.68%'],
                    ['四川', 101, '4.46%'],
                    ['湖南', 86, '3.79%'],
                    ['湖北', 81, '3.57%'],
                ]
            },
            {
                transform: {
                    type: 'sort',
                    config: { dimension: 'cnt', order: 'desc' }
                }
            }
        ],
        xAxis: {
            type: 'category',
            axisLabel: { interval: 0, rotate: 30 }
        },
        yAxis: {},
        series: {
            type: 'bar',
            encode: { x: 'name', y: 'score' },
            datasetIndex: 1,
            itemStyle: {
                color: '#cfa347'
            }
        }
    },
    "LBLChina": {
        tooltip: {
            trigger: 'item',
            formatter: function (params): string {
                return params.name + '<br/>数量：' + params.value[1] + '<br/>占比：' + params.value[2];
            },
        },
        grid: {
            bottom: '10%'
        },
        dataset: [
            {
                dimensions: ['ipLocation', 'cnt', 'percent'],
                source: [
                    ['广东', 246, '10.85%'],
                    ['山东', 171, '7.54%'],
                    ['江苏', 145, '6.4%'],
                    ['北京', 134, '5.91%'],
                    ['河南', 118, '5.21%'],
                    ['安徽', 113, '4.98%'],
                    ['浙江', 106, '4.68%'],
                    ['四川', 101, '4.46%'],
                    ['湖南', 86, '3.79%'],
                    ['湖北', 81, '3.57%'],
                ]
            },
            {
                transform: {
                    type: 'sort',
                    config: { dimension: 'cnt', order: 'desc' }
                }
            }
        ],
        xAxis: {
            type: 'category',
            axisLabel: { interval: 0, rotate: 30 }
        },
        yAxis: {},
        series: {
            type: 'bar',
            encode: { x: 'name', y: 'score' },
            datasetIndex: 1,
            itemStyle: {
                color: '#cfa347'
            }
        }
    },
}