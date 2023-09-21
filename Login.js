  import React, { useState } from 'react';
  import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
      try {
        
        const userDataString = await AsyncStorage.getItem('userData');
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          if (userData.email === email && userData.password === password) {
            // Đăng nhập thành công
            navigation.replace('PoupularCategories');
            return;
          }
        }

        // Đăng nhập không thành công
        console.error('Đăng nhập không thành công');
      } catch (error) {
        console.error('Lỗi khi đăng nhập: ', error);
      }
    };
    return (
      <View style={styles.container}>
        <Text  style={styles.title}>Sign In</Text>
      
        <TextInput  style={styles.input}
          placeholder="Email or Facebook"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.btn1}>
          <Button color='#5EA33A'style={styles.buttonText} title='  Login In' onPress={handleLogin}/>
          </View>
          <Text style={styles.txt} >OR</Text>

          <View style={styles.btn2}>
          <Button style={styles.buttonText} title='Facebook Login' />
          </View>
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
      textAlign:'left',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 100,
      marginRight:250,
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
    btn1:{
      width:270,
      borderRadius:999,
      overflow:'hidden',
      marginTop:70,
      backgroundColor: '#5EA33A',
      
    },
    txt:{
        marginTop:30,
    },
    btn2:{
      width:270,
      borderRadius:999,
      overflow:'hidden',
      backgroundColor:'blue',
      marginTop:30,

    }
  });

  export default Login;