import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LargeButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Click Me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 20, // Điều chỉnh chiều cao của nút
    paddingHorizontal: 40, // Điều chỉnh chiều rộng của nút
    borderRadius: 10, // Điều chỉnh độ cong góc của nút
    alignItems: 'center', // Căn giữa theo chiều ngang
  },
  buttonText: {
    color: 'white',
    fontSize: 20, // Điều chỉnh kích thước chữ
    fontWeight: 'bold', // Điều chỉnh độ đậm của chữ
  },
});

export default LargeButton;
