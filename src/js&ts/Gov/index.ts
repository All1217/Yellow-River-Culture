import * as echarts from 'echarts'
import { Links } from './sankeyLinks'
import { Data } from './sankeyData'

import rela1Img from '../../assets/images/views/夏商周1.png'
import rela2Img from '../../assets/images/views/春秋战国2.jpg'
import rela3Img from '../../assets/images/views/魏晋南北.jpg'
import rela4Img from '../../assets/images/views/隋唐.jpg'
import rela5Img from '../../assets/images/views/元.jpg'
import rela6Img from '../../assets/images/views/清.jpg'

/**
 * @description: 左边桑葚图
 */
export const sankey: echarts.EChartsOption = {
    // title: [{
    //     text: '建筑类型',
    //     textStyle: { fontSize: 12, color: '#D1872A' },
    //     top: 0,
    //     left: 0,
    // },
    // {
    //     text: '历史朝代',
    //     textStyle: { fontSize: 12, color: '#D1872A' },
    //     top: 'top',
    //     left: '21%',
    // },
    // {
    //     text: '黄河河段',
    //     textStyle: { fontSize: 12, color: '#D1872A' },
    //     top: 'top',
    //     left: '42%',
    // },
    // {
    //     text: '保存状况',
    //     textStyle: { fontSize: 12, color: '#D1872A' },
    //     top: 'top',
    //     left: '64%',
    // },
    // {
    //     text: '保护级别',
    //     textStyle: { fontSize: 12, color: '#D1872A' },
    //     top: 'top',
    //     left: '85%',
    // },
    // ],
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    animation: false,
    series: [
        {
            type: 'sankey',
            top: '10%',
            right: '12%',
            left: '3%',
            bottom: '3%',
            emphasis: {
                focus: 'adjacency'
            },
            data: Data,
            links: Links,
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
}
/**
 * @description: 右边关系图
 */
export const description = {
    'rela1': {
        title: '夏商周、春秋战国时期',
        text: '（1）夏朝&&水官：据先秦文献记载，夏朝已设有水官，负责水利事务。如商族的祖先冥在夏朝就担任过水官。&&（2）商代&&司工：为管理“百工”的工官，属于王廷中“小臣”一类的事务官。由于商代农业实行井田制，耕地有沟洫，形成田间灌溉排水系统，因此水利施工、修沟洫、浚畎浍等也属于“百工”的一种，从属“司工”管理。&&（3）西周、东周&&司空：西周始设置司空，管理土木工程建设和各种手工业，同时也负责水利事务。《周礼》等文献中有关于司空修蓄水、防洪、灌溉、排水工程的记载。&&春秋时期，各诸侯国中，鲁、晋、郑、陈都相沿设置司空官。宋国因避宋武公的名讳，改司空为司城，在楚国司空则为莫敖。&&地方水利由地方官员负责，如秦国李冰任职蜀郡太守，兼任地方水利官，修建都江堰工程。',
        href: 'https://baike.baidu.com/item/%E6%B0%B4%E5%AE%98/3885149',
        src: rela1Img
    },
    'rela2': {
        title: '秦汉时期',
        text: '（1）中央机构：&&都水长和都水丞（秦朝）：隶属九卿之一的"太常"或"少府"，负责包括黄河在内的全国水利。汉武帝时设"都水使者"统筹。&&河堤谒者（东汉）：汉承秦制，保留都水长、丞，在太常、少府、司农、水衡都尉等下设都水官。汉哀帝时罢都水官员和使者，设河堤谒者，专职黄河堤防的中央派遣官员，为后世黄河专官雏形。&&（2）地方机构：&&郡县设"水曹掾"或"河堤掾史"，负责辖区河防。地方政府中的都水官，由大司农管辖。',
        href: 'https://www.guoxuemi.com/guanzhi/4443ij/',
        src: rela2Img
    },
    'rela3': {
        title: '魏晋南北朝时期',
        text: '尚书台（省）分曹处理政务，逐渐成为全国最高的行政机关。&&（1）中央机构：&&水部曹（三国曹魏）：曹魏设二十三曹尚书郎中，其中处理水事的为水部曹，官称为尚书水部郎中、水部郎。&&都水台（西晋）：独立水利机构，长官为"都水使者"，下设河堤谒者、都水参军等专管黄河。&&都水使者（南北朝）：各国都设有都水使者等官职来管理水利事务。如北朝、北魏、北齐都设有都水使者及河堤谒者等官职。&&（2）地方机构：&&北朝在黄河流域州郡设"河防都督"，战时兼管军事与河务。（主战事）',
        href: 'https://www.guoxuemi.com/lishi/12153z/',
        src: rela3Img
    },
    'rela4': {
        title: '隋唐五代时期',
        text: '（1）中央机构：&&水部郎中（隋朝）：建立了尚书省管辖6部行政的体制，设工部尚书，水部为其所属4司之一，设水部郎中掌管水事。下设都水台，后改台为监，又改监为令，统舟楫、河渠两署令。 &&都水监（唐朝）：承隋朝制设都水监。都水监独立于六部之外，负责京畿渠堰陂池的维修、京畿用水管理、舟船运漕、渔捕等事务。同时，工部属下的水部也继续存在并掌管相关水利事务。&&水部司（唐朝）：工部尚书、侍郎掌“天下百工，屯田、山泽之政令”，水部郎中、员外郎掌“天下川渎、陂池”，“舟楫、灌溉之利，咸总而举之”。工部及所属水部（司）为行使政令的政务机构。&&河堤牙官、堤长、主簿（后唐）：战事频繁，黄河时常决溢成灾，治河机构略有加强，除设河堤使者之外，又设水部郎中、河堤牙官、堤长、主簿。&&（2）地方机构：&&唐代：&&“渠斗长制”&&设置“渠斗长”，明确渠长、斗门长的管理职权，对灌区实施水资源的严格管理，通过有效的分配、节约使用，以满足大规模农业灌溉的需要。&&沿河州县设"河堤使"，如唐代汴州（今开封）特设"河阴堤使"。&&公元722年六月，“博州（今聊城）黄河堤坏”，唐玄宗下令派博州刺史柳儒：“乘传旁午分理”，并令按察使萧嵩“总领其事”&&御史台派员巡查河工，如唐玄宗时派"巡察使"督察河防。',
        href: 'https://www.guoxuemi.com/lishi/12153z/',
        src: rela4Img
    },
    'rela5': {
        title: '两宋、辽金夏时期',
        text: '（1）中央机构：&&都水监、水部（北宋）：基本上采取唐的体制，设工部和水部为工部所属司。同时，也设置都水监来掌管内外河渠的修缮、疏导水势及水运等事务。&&都水监、工部侍郎（金代）：“河长制”。水利官制仿宋制，工部下设都水监，并在工部置侍郎一员、郎中一员，“掌修造工匠屯田山林川泽之禁，江河堤岸道路桥梁之事”。&&（2）地方机构：&&河堤使、河堤判官（北宋）：“河堤使制”。宋代沿黄河地方设置多种兼职、专职官员，各州长吏也兼管黄河。宋初太祖乾德五年（967年）“诏开封、大名府、郓、澶、滑、孟、濮、齐、淄、沧、棣、滨、德、博、怀、卫、郑等州长吏，并兼本州河堤使”。五年后，太祖规定开封等沿河17州府各置河堤判官一名，以本州通判兼任。&&都巡河官、散巡河官、埽兵：（金代）：宜宗兴定五年（1221年）另设都巡河官，掌巡视河道、修完堤堰、栽植榆柳等，规定在黄河每埽设立散巡河官一员，并设都巡河官六员，分管全河二十五埽。&&',
        href: 'https://m.thepaper.cn/baijiahao_24932170',
        src: rela5Img
    },
    'rela6': {
        title: '元明清时期',
        text: '（1）中央机构：&&大司农司、都水监（元代）：元朝统一中国后，水利事务由大司农司管辖。同时，在6部之外也设有都水监来管理相关事务。&&都水清吏司、河道总督（明代）：明朝废除尚书、中书、门下3省后，保留6部并设都水清吏司来管理水利事务。此外，还设有河道总督等官职来专门管理黄河、运河等河道事务。&&河道总督（清代）：清朝继承并发展了明朝的水利官制，设有河道总督来管理黄、运两河事务。&&（2）地方机构：&&营田司、河渠司（元代）：元代在宁夏设立专门灌溉管理机构，世祖至元六年（1264年），派郭守敬为宁夏河渠提举。二十六年（1289年）复立营田司于宁夏府，管理屯田水利。至武宗至大元年（1308年）八月，宁夏设立河渠司，秩五品、官二员，专管水利。&&总治河防使（元代）：贾鲁治河时特设，权责高于行省。&&按察副使、河道侍郎、都御史、都水分司（明代）：地方则每省按察司设副使一个，专管河道。景泰后河道有事专由都察院派都御史（或尚书兼都御史）、副都御史、佥都御史（或侍郎兼副都或佥都）主持治理。惟运河自通州至扬州分段，少则两段，多则六七段，各段设都水分司，以郎中、主事等为主管官员。&&各级河官（明代、清代）：分级设河道通判、州同、州判、县丞、主簿、巡检等官职来形成黄河、运河的管理系统。&&河兵（清代）：河道总督直属朝廷，六部、都察院协同稽查，雍正后设"河兵"巡逻。&&明清漕运及管河则有专业军队及武官系统，且清代的总督河道多以兵部尚书任职。',
        href: 'https://www.guoxuemi.com/lishi/39199q/',
        src: rela6Img
    },
}
export const rela1: echarts.EChartsOption = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: false,
            label: {
                show: true,
                color: '#18191c'
            },
            data: [
                {
                    name: '太守兼任水利官',
                    x: 250,
                    y: 250,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '稻人',
                    x: 750,
                    y: 250,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '司险',
                    x: 750,
                    y: 50,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '水官、司工、司空、河丞',
                    x: 500,
                    y: 150,
                    itemStyle: {
                        color: '#f7cbac'
                    }
                }
            ],
            links: [
                {
                    source: 0,
                    target: 3,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 1,
                    target: 3,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 2,
                    target: 3,
                    lineStyle: {
                        width: 5
                    }
                }
            ]
        }
    ]
}
export const rela2: echarts.EChartsOption = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: false,
            label: {
                show: true,
                color: '#18191c'
            },
            data: [
                {
                    name: '水曹掾',
                    x: 250,
                    y: 250,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '河堤掾史',
                    x: 750,
                    y: 250,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '郡监临时指挥',
                    x: 250,
                    y: 50,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '取水官',
                    x: 750,
                    y: 50,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '都水长、都水丞、河堤谒者',
                    x: 500,
                    y: 150,
                    itemStyle: {
                        color: '#f7cbac'
                    }
                }
            ],
            links: [
                {
                    source: 0,
                    target: 4,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 1,
                    target: 4,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 2,
                    target: 4,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 3,
                    target: 4,
                    lineStyle: {
                        width: 5
                    }
                }
            ]
        }
    ]
}
export const rela3: echarts.EChartsOption = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: false,
            label: {
                show: true,
                color: '#18191c'
            },
            data: [
                {
                    name: '河防都督',
                    x: 250,
                    y: 250,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '都水从事',
                    x: 750,
                    y: 250,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '都水参军',
                    x: 250,
                    y: 50,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '水曹',
                    x: 750,
                    y: 50,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '水部、都水台、都水使者',
                    x: 500,
                    y: 150,
                    itemStyle: {
                        color: '#f7cbac'
                    }
                }
            ],
            links: [
                {
                    source: 0,
                    target: 4,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 1,
                    target: 4,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 2,
                    target: 4,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 3,
                    target: 4,
                    lineStyle: {
                        width: 5
                    }
                }
            ]
        }
    ]
}
export const rela4: echarts.EChartsOption = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: false,
            label: {
                show: true,
                color: '#18191c'
            },
            data: [
                {
                    name: '河堤牙官',
                    x: 100,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '渠长',
                    x: 200,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '梁堰使',
                    x: 300,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '斗门长',
                    x: 400,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '堤长',
                    x: 100,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '营田使',
                    x: 200,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '主簿',
                    x: 300,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '水部、都水监、水部司',
                    x: 250,
                    y: 200,
                    itemStyle: {
                        color: '#f7cbac'
                    }
                }
            ],
            links: [
                {
                    source: 0,
                    target: 7,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 1,
                    target: 7,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 2,
                    target: 7,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 3,
                    target: 7,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 4,
                    target: 7,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 5,
                    target: 7,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 6,
                    target: 7,
                    lineStyle: {
                        width: 5
                    }
                },
            ]
        }
    ]
}
export const rela5: echarts.EChartsOption = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: false,
            label: {
                show: true,
                color: '#18191c'
            },
            data: [
                {
                    name: '长吏兼本州河堤使',
                    x: 100,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '通判兼任河堤判官',
                    x: 200,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '提刑司',
                    x: 300,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '常平司',
                    x: 400,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '提举三白渠公事',
                    x: 100,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '都/散巡河官',
                    x: 200,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '埽兵',
                    x: 300,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '归措三白渠公事',
                    x: 400,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '水部、都水监',
                    x: 250,
                    y: 200,
                    itemStyle: {
                        color: '#f7cbac'
                    }
                }
            ],
            links: [
                {
                    source: 0,
                    target: 8,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 1,
                    target: 8,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 2,
                    target: 8,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 3,
                    target: 8,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 4,
                    target: 8,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 5,
                    target: 8,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 6,
                    target: 8,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 7,
                    target: 8,
                    lineStyle: {
                        width: 5
                    }
                },
            ]
        }
    ]
}
export const rela6: echarts.EChartsOption = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: false,
            label: {
                show: true,
                color: '#18191c'
            },
            data: [
                {
                    name: '水利道',
                    x: 100,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '河渠司',
                    x: 200,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '营田司',
                    x: 300,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '都/副都/佥都御史主持',
                    x: 400,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '总治河防使',
                    x: 500,
                    y: 300,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '按察司副使',
                    x: 100,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '河兵与堡夫',
                    x: 200,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '管河县丞/主簿',
                    x: 300,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '水利州同/州判',
                    x: 400,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '水利同知/巡检',
                    x: 500,
                    y: 100,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '水利佥事',
                    x: 100,
                    y: 200,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '水利通判',
                    x: 500,
                    y: 200,
                    itemStyle: {
                        color: '#c5e0b3'
                    }
                },
                {
                    name: '大司农司、都水清吏司、河道总督、都水监',
                    x: 300,
                    y: 200,
                    itemStyle: {
                        color: '#f7cbac'
                    }
                }
            ],
            links: [
                {
                    source: 0,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 1,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 2,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 3,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 4,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 5,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 6,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 7,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 8,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 9,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 10,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
                {
                    source: 11,
                    target: 12,
                    lineStyle: {
                        width: 5
                    }
                },
            ]
        }
    ]
}