import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = async () => {
    try {
       
      const userData = {
        email,
        password,
      };

      // Lưu thông tin đăng ký vào AsyncStorage
      await AsyncStorage.setItem('userData', JSON.stringify(userData));

      // Điều hướng người dùng đến màn hình đăng nhập sau khi đăng ký thành công
      navigation.replace('Login');
    } catch (error) {
      console.error('Lỗi khi đăng ký: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text   style={styles.title}>Create new Account</Text>
    
      <TextInput  style={styles.input}
        placeholder="Fullname"  
        autoCapitalize="none"

      />
      <TextInput
        style={styles.input}
        placeholder="PhoneNumber"
        secureTextEntry
      />
      <TextInput  style={styles.input}
        placeholder="Email Adress"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput  style={styles.input}
        placeholder="PassWord"
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
      <Text style={styles.buttonText}>SignUp</Text>
    </TouchableOpacity>
       
       


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    width:'100%',
    textAlign:'left',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
    color:'#5EA33A',
  },
  input: {
    width: 350,
    height: 55,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 999,
    paddingHorizontal: 50,
    marginBottom: 10,
  },
  buttonText: {
    height:100,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'orange',
    width:300,
    paddingVertical: 20, 
    paddingHorizontal: 40, 
    borderRadius: 999,
    alignItems: 'center', 
    marginTop:50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20, 
    fontWeight: 'bold', 
  },
 

  
});

export default SignUp;