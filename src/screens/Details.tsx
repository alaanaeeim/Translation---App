import React from 'react';
import {Dimensions, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {translate} from '../translation';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
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
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

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
});
