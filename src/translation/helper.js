import AsyncStorage from '@react-native-async-storage/async-storage';
import {I18nManager} from 'react-native';
import {translationGetters} from './languages';
import i18n from 'i18n-js';
import RNRestart from 'react-native-restart';

const ReadLocaleKey = async () => {
  const value = await AsyncStorage.getItem('lang');
  if (value) {
    return JSON.parse(value);
  }
  return null;
};

export const PrepareLanguage = async () => {
  ReadLocaleKey().then(value => {
    const locale = value === 'ar' ? 'ar' : 'en';
    if (
      (locale === 'ar' && !I18nManager.isRTL) ||
      (locale !== 'ar' && I18nManager.isRTL)
    ) {
      console.log('from first condition');
      if (locale === 'ar') {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
      } else {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
      }
      i18n.translations = {[locale]: translationGetters[locale]()};
      i18n.locale = locale;
      RNRestart.Restart();
    } else {
      i18n.translations = {[locale]: translationGetters[locale]()};
      i18n.locale = locale;
    }
  });
};
