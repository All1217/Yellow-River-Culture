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

//引力气泡图
var chartdata = [
    {
        "id": "0",
        "name": "CCTV纪录",
        "time": "2025/1/9 20:30",
        "review": "【#专家学者力荐黄河之歌# 】探寻华夏文明之源，聆听黄河千年歌声！纪录片《黄河之歌》以一万年叙事轴线，展现了黄河与中华文明的不解之缘。获得多位业界、学界专家好评，一起来看看他们怎么说！#纪录片黄河之歌# ???",
        "media": "CCTV纪录",
        "pageNum": 1,
        "sum": 60,
        "size": 60
    },
    {
        "id": "1",
        "name": "东阿融媒",
        "time": "2023/9/9 13:11",
        "review": "【东阿黄河河务局牛店管理段：首创“治黄‘新’一线、铁‘军’护安澜” 】#大美山河奋进东阿# 该段打造的“治黄‘新’一线、铁‘军’护安澜”治黄漫画品牌，主要突出两个特点：一是牛店管理段治黄铁军特点。据悉，东阿黄河河务局牛店管理段是山东黄河河务局第一批“两化”建设试点单位，近年来，该段深 ???",
        "media": "东阿融媒",
        "pageNum": 1,
        "sum": 17,
        "size": 20
    },
    {
        "id": "2",
        "name": "中国之声",
        "time": "2023/8/23 12:19",
        "review": "【#黄河小浪底调水调沙有多壮观#】天然情况下，每年约有16亿吨泥沙进入黄河干流，其中约4亿吨泥沙淤积在黄河下游800多公里的河道，形成“地上悬河”。在小浪底水利枢纽，黄河水喷涌而出，泥沙在水面翻腾，上演现实版“黄河之水天上来”，蔚为壮观↓↓#江山壮丽# http://t.cn/A6OZqwy4 ???",
        "media": "中国之声",
        "pageNum": 1,
        "sum": 1,
        "size": 12
    },
    {
        "id": "3",
        "name": "中国国家地理",
        "time": "2023/4/8 13:59",
        "review": "#地理君小课堂#黄河水真的变清了！\n\n在人们的印象中，黄河一直以含沙量高著称。自高原山地飞驰而下，黄河裹挟大量泥沙，在入海口淤积造就了大片陆地。与此同时，黄河中游失去了大量的肥沃土地和水资源，下游及其相邻地区也频繁遭受洪水灾害。\n\n黄河水是“黄”还是“清”，从古至今一直备受关注。如今， ???",
        "media": "中国国家地理",
        "pageNum": 1,
        "sum": 10,
        "size": 15
    },
    {
        "id": "4",
        "name": "中国山东网",
        "time": "2023/4/19 14:54",
        "review": "#黄河已不是记忆中的模样#【#黄河岸边乡村美成画卷#】黄河，不一样了。黄河流域，不一样了。 记忆里的黄河，是“九曲黄河万里沙”，“一碗黄河水，半碗黄泥沙”。 黄河自古水患多，山东黄河流域也不例外。如今黄河安澜、家园秀美，黄河沿岸的乡村早已今非昔比。沿着黄河看乡村，大地如彩绘，乡村似画卷 ???",
        "media": "中国山东网",
        "pageNum": 1,
        "sum": 20,
        "size": 40
    },
    {
        "id": "7",
        "name": "人民日报",
        "time": "2024/4/15 15:34",
        "review": "【#黄河入海口遭外来入侵植物破坏#】互花米草是我国沿海滩涂危害最大的外来入侵植物，在我国沿海地区迅速扩张，破坏生态平衡，造成航道被淤、滩涂被占等。目前，我国互花米草治理取得阶段性成效。“绿色沙漠”消失了，如今成了生物栖息的乐园。根据监测，近几年，保护区鸟儿种类已有373种。 ???",
        "media": "人民视频",
        "pageNum": 1,
        "sum": 47,
        "size": 47
    },
    {
        "id": "8",
        "name": "人民日报",
        "time": "2023/7/8 20:01",
        "review": "【壮观！#黄河小浪底启动排沙模式#】7月7日，黄河小浪底水利枢纽排沙模式开启。从上游三门峡水利枢纽的来水，助力冲刷小浪底水库库尾，瞬间流量达2500立方米每秒。小浪底水坝上，4洞开闸，黄河水喷薄而出，如黄龙咆哮，气势磅礴。（小央视频） http://t.cn/A60PUVfe ???",
        "media": "闪电新闻",
        "pageNum": 1,
        "sum": 12,
        "size": 12
    },
    {
        "id": "9",
        "name": "人民视频",
        "time": "2024/10/22 13:30",
        "review": "【#黄河清流飞瀑映生态治理奇迹#】#从延安再出发# 今年5月，水利部发布的2023年《中国河流泥沙公报》显示，黄河干流2023年输沙量0.953亿吨，与多年平均值(1952-2020年)9.21亿吨相比，减少90%，与近10年平均值1.61亿吨相比，减少41%  #弘扬延安精神 奋进伟大时代# http://t.cn/A6nzxg1f ???",
        "media": "观察者网",
        "pageNum": 1,
        "sum": 12,
        "size": 12
    },
    {
        "id": "10",
        "name": "闪电新闻",
        "time": "2023/11/3 11:32",
        "review": "【#黑科技加持黄河守护人气质都变好了#】(山东) 在过去，黄河上流传着一个段子：“远看是要饭的，近看是掏炭的，一问是河务段的”[允悲]而现在可就不同了：3D建模、数字技术孪生平台，准确预判中上游来水情况；自动报警、智能识别，大大解放了黄河守护人的劳动力，他们的形象气质也好起来了~  ???",
        "media": "新华社",
        "pageNum": 1,
        "sum": 12,
        "size": 20
    },
    {
        "id": "11",
        "name": "观察者网",
        "time": "2023/12/2 23:01",
        "review": "#黄河要告别地上河了吗# 黄河，要告别“地上河”了？22年下切3.1米！ http://t.cn/A6lheOXm ???",
        "media": "央视财经",
        "pageNum": 1,
        "sum": 12,
        "size": 12
    },
    {
        "id": "12",
        "name": "新华社",
        "time": "2023/4/8 7:57",
        "review": "【#镜头记录黄河水颜色变化有多大#】 摄影师吕桂明十几年来拍摄壶口瀑布桃花汛照片，见证了黄河水颜色的变化。近年来，黄河流域实施退耕还林、经济林提质增效、湿地修复等一批重要生态保护修复工程，效果显著。（记者：原勋 赵阳 王学涛） http://t.cn/A6NL9dkz ???",
        "media": "央视网",
        "pageNum": 3,
        "sum": 10,
        "size": 10
    },
    {
        "id": "13",
        "name": "央视财经",
        "time": "2024/11/6 15:45",
        "review": "【#我国超六成水土流失面积得到有效控制##数读我国防沙治沙成绩单#↓】国务院关于防沙治沙工作情况的报告昨天（11月5日）提请全国人大常委会会议审议。报告显示，党的十八大以来，我国53%的可治理沙化土地得到有效治理，沙化土地面积净减少6500万亩，61%的水土流失面积得到有效控制，黄河流域植被覆盖 ???",
        "media": "央视新闻",
        "pageNum": 5,
        "sum": 50,
        "size": 50
    },
    {
        "id": "14",
        "name": "央视网",
        "time": "2023/9/12 13:15",
        "review": "【交出亮眼“成绩单”！#我国大江大河保护与治理成效显著#[打call]】#中国治水智慧交出耀眼绿色答卷# 在本次世界水资源大会上，以我国长江黄河为代表的重要河流，水土流失治理成效，交上一份耀眼的“绿色答卷”。今年8月，水利部发布的2022年度全国水土流失动态监测结果显示，2022年全国水土流失面积下 ???",
        "media": "央视网",
        "pageNum": 5,
        "sum": 12,
        "size": 16
    },
    {
        "id": "15",
        "name": "央视网",
        "time": "2023/4/22 10:00",
        "review": "【高燃！#百名大学生壶口献歌呼吁守护黄河#】正值第54个世界地球日之际，为唤起更多人对黄河塑料治理问题的关注，近日，来自延安大学鲁艺合唱团的学生们，在壶口瀑布旁唱响了一版特殊的《黄河大合唱》：他们不但将环保号召写进了歌词中，还通过实地参与清塑、设计大地艺术等方式，用新时代新青年的方式 ???",
        "media": "央视网",
        "pageNum": 5,
        "sum": 12,
        "size": 12
    },
    {
        "id": "21",
        "name": "央视新闻",
        "time": "2023/1/16 18:20",
        "review": "【#水文人手中的测深杆也是救命工具#[泪]】阿坝州唐克镇边，坐落着四川省内黄河流域唯一的水文站。流经的白河，对黄河水资源变化有重要影响。这里的#水文站长接棒父亲守护黄河30年#，用一组组数字记录黄河的点滴变化。由于白河河底都是细沙，工作时人很容易陷入，手中的测深杆，就成了他们保护自己的武 ???",
        "media": "央视新闻",
        "pageNum": 1,
        "sum": 6,
        "size": 46
    }
]
var color = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'];
var data = []
chartdata.map((item, index) => {
    if (item.size >= 10) {
        data.push(
            {
                id: item.id,
                name: item.name + '\n' + item.sum,
                value: item.sum,
                symbolSize: item.size * 2,
                draggable: true,
                label: {
                    show: item.size >= 20,
                    textStyle: {
                        fontSize: 12,
                        color: '#fff',
                    },
                },
                itemStyle: {
                    color: color[index]
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
        )
    }
})

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
                symbolSize: [50, 50],
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
                symbolSize: [85, 60],
                symbolOffset: [0, -80],
                z: 10,
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
        animationDurationUpdate: function (idx) {
            return idx * 100;
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params): string {
                return params.name + '<br/>' + '发文总数：' + params.value;
            },
        },
        animationEasingUpdate: 'bounceIn',
        cursor: 'pointer',
        series: [
            {
                type: 'graph',
                layout: 'force',
                cursor: 'pointer',
                force: {
                    repulsion: 100,
                    edgeLength: 150,
                },
                label: {
                    show: true
                },
                roam: true,
                data,
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
                    { value: 390, name: 'positive' },
                    { value: 110, name: 'negative' },
                    { value: 80, name: 'happy' },
                    { value: 10, name: 'anger' },
                    { value: 60, name: 'disgust' },
                    { value: 1, name: 'fear' },
                    { value: 40, name: 'sadness' },
                    { value: 10, name: 'surprise' },
                    { value: 300, name: 'good' },
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
                    { value: 410, name: 'positive' },
                    { value: 90, name: 'negative' },
                    { value: 30, name: 'happy' },
                    { value: 1, name: 'anger' },
                    { value: 40, name: 'disgust' },
                    { value: 40, name: 'fear' },
                    { value: 10, name: 'sadness' },
                    { value: 10, name: 'surprise' },
                    { value: 370, name: 'good' },
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