import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Square = ({ name, color }) => {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Square name="Square 1" color="blue" />
        <Square name="Square 2" color="green" />
        <Square name="Square 3" color="pink" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  square: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default App;
