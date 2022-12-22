import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translationGetters} from './src/translation/languages';
import RNRestart from 'react-native-restart';
import {name as appName} from './app.json';
import {I18nManager} from 'react-native';
import {AppRegistry} from 'react-native';
import './src/translation/index';
import i18n from 'i18n-js';
import App from './App';

const RootApp = () => {
  const [loadFiles, setLoadFiles] = useState(false);
  const ReadLocaleKey = async () => {
    const value = await AsyncStorage.getItem('lang');
    if (value) {
      return JSON.parse(value);
    } else {
      await AsyncStorage.setItem('lang', JSON.stringify('en'));
      return 'en';
    }
  };

  const PrepareLanguage = async () => {
    ReadLocaleKey()
      .then(locale => {
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
      })
      .finally(() => {
        setLoadFiles(true);
      });
  };

  useEffect(() => {
    PrepareLanguage();
  }, [loadFiles]);

  return <App />;
};

AppRegistry.registerComponent(appName, () => RootApp);
