import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const StorySlider = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} loop={false}>
      <View style={styles.slide1}>
        <Text style={styles.text}>Story 1</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Story 2</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>Story 3</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default StorySlider;
