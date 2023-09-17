import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

const SignUp = () => {

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
      />
      <TextInput  style={styles.input}
        placeholder="PassWord"
        autoCapitalize="none"
      />
      
      <TouchableOpacity style={styles.button}>
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