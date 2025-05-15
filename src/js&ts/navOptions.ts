interface NavOption {
    textColor: string
    textColorHight: string
    bgc: string
    itemBgc: string
    itemBgcHight: string
    barBgc: string
    btnColor: string
    btnColorHight: string
}
interface Index {
    'home': NavOption
    'thirdPage': NavOption
    'secondPage': NavOption
    'sunView': NavOption
    'GovView': NavOption
}
export const navOptions: Index = {
    'home': {
        textColor: '#fff',
        textColorHight: '',
        bgc: '#61666d',
        itemBgc: '#8a8a8a',
        itemBgcHight: '#949494',
        barBgc: '#fff',
        btnColor: '#fff',
        btnColorHight: '#fff'
    },
    'secondPage': {
        textColor: '#fff',
        textColorHight: '',
        bgc: '#61666d',
        itemBgc: '#8a8a8a',
        itemBgcHight: '#949494',
        barBgc: '#fff',
        btnColor: '#fff',
        btnColorHight: '#fff'
    },
    'thirdPage': {
        textColor: '#371642',
        textColorHight: '#371642',
        bgc: '#fff',
        itemBgc: '#f5f5f5',
        itemBgcHight: '#f9f9f9',
        barBgc: '#f72c5b',
        btnColor: '#371642',
        btnColorHight: '#371642'
    },
    'sunView': {
        textColor: '#fff',
        textColorHight: '',
        bgc: '#61666d',
        itemBgc: '#8a8a8a',
        itemBgcHight: '#949494',
        barBgc: '#fff',
        btnColor: '#fff',
        btnColorHight: '#fff'
    },
    'GovView': {
        textColor: '#371642',
        textColorHight: '#371642',
        bgc: '#fff',
        itemBgc: '#f5f5f5',
        itemBgcHight: '#f9f9f9',
        barBgc: '#f72c5b',
        btnColor: '#371642',
        btnColorHight: '#371642'
    },
}