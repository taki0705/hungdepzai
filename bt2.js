import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const Bt2=() => {
  const handleButtonPress = () => {
    Alert.alert('Hello');
  };
  return (
    <View style={styles.container}>
      <Button title="press me" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Bt2;