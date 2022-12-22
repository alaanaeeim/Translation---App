import React from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  I18nManager,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {translate, translationGetters} from '../translation';
import RNRestart from 'react-native-restart';

const Home = ({navigation}: any) => {
  const setDefaultLang = async () => {
    const language: any = await AsyncStorage.getItem('lang');
    const selectedLanguage = JSON.parse(language) === 'ar' ? 'en' : 'ar';
    AsyncStorage.setItem('lang', JSON.stringify(selectedLanguage)).then(() => {
      if (selectedLanguage === 'ar') {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
      } else {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
      }
      i18n.translations = {
        [selectedLanguage]: translationGetters[selectedLanguage](),
      };
      i18n.locale = selectedLanguage;
      setTimeout(() => {
        RNRestart.Restart();
      }, 500);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.langContainer}>
          <TouchableOpacity onPress={() => setDefaultLang()}>
            <Text style={styles.lang}>
              {i18n.locale === 'en' ? 'Ar' : 'En'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mobileCapacity}>
          <View style={styles.specContainer}>
            <View style={styles.fPart}>
              <Text style={styles.spec}>{translate('color')}</Text>
            </View>
            <View style={[styles.separator]} />
            <View style={styles.sPart}>
              <Text style={styles.spec}>{translate('colorValue')}</Text>
            </View>
          </View>

          <View style={styles.specContainer}>
            <View style={styles.fPart}>
              <Text style={styles.spec}>{translate('storage')}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.sPart}>
              <Text style={styles.spec}>128 GB</Text>
            </View>
          </View>

          <View style={styles.specContainer}>
            <View style={styles.fPart}>
              <Text style={styles.spec}>{translate('ram')}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.sPart}>
              <Text style={styles.spec}>8 Ram</Text>
            </View>
          </View>

          <View style={styles.specContainer}>
            <View style={styles.fPart}>
              <Text style={styles.spec}>{translate('camera')}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.sPart}>
              <Text style={styles.spec}>16 Pixel</Text>
            </View>
          </View>

          <View style={styles.specContainer}>
            <View style={styles.fPart}>
              <Text style={styles.spec}>{translate('screenSize')}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.sPart}>
              <Text style={styles.spec}>5-inch</Text>
            </View>
          </View>

          <View style={styles.specContainer}>
            <View style={styles.fPart}>
              <Text style={styles.spec}>{translate('battery')}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.sPart}>
              <Text style={styles.spec}>5000 mAh</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.navigate}
          onPress={() => navigation.navigate('DetailsScreen')}>
          <Text style={styles.lang}>{translate('DetailsScreen')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  langContainer: {
    backgroundColor: '#002D6D',
    width: width * 0.1,
    height: height * 0.045,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    borderRadius: 100,
  },
  lang: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  spec: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  mobileCapacity: {},
  specContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#002D6D',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: height * 0.05,
  },
  separator: {
    height: height * 0.05,
    width: 8,
    backgroundColor: 'red',
  },
  fPart: {
    width: width * 0.45,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sPart: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navigate: {
    backgroundColor: '#002D6D',
    marginTop: 20,
    width: width * 0.45,
    height: height * 0.04,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
