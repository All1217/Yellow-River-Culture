import { defineStore } from 'pinia';
import { navOptions } from '@/js&ts/navOptions'

export const useStore = defineStore('colorControl', {
  state: () => ({
    title: '',
    curRouteName: '',
  }),
  actions: {
    setNavOption(str: string) {
      const root = document.documentElement;
      root.style.setProperty('--textColor', navOptions[str].textColor);
      root.style.setProperty('--textColorHight', navOptions[str].textColorHight);
      root.style.setProperty('--bgc', navOptions[str].bgc);
      root.style.setProperty('--itemBgc', navOptions[str].itemBgc);
      root.style.setProperty('--itemBgcHight', navOptions[str].itemBgcHight);
      root.style.setProperty('--barBgc', navOptions[str].barBgc);
      root.style.setProperty('--btnColor', navOptions[str].btnColor);
      root.style.setProperty('--btnColorHight', navOptions[str].btnColorHight);
    }
  },
});