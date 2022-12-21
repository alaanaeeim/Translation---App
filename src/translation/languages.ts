import i18n from 'i18n-js';

export const translationGetters = {
  ar: () => require('./lang/ar.json'),
  en: () => require('./lang/en.json'),
};

export const translate = (key: any, config?: any) => i18n.t(key, config);
export const formatNum = (key: any, config?: any) => i18n.toNumber(key, config);
