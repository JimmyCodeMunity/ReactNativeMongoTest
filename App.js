// App.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState(''); 'axios';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    axios
      .post('http://192.168.2.108:3000/register', { name, email, password })
      .then(response => {
        Alert.alert('Success', response.data.message);
      })
      .catch(error => {
        Alert.alert('Error', error.response.data.error);
      });
  };

  const handleLogin = () => {
    axios
      .post('http://192.168.2.108:3000/login', { email, password })
      .then(response => {
        Alert.alert('Success', response.data.message);
      })
      .catch(error => {
        Alert.alert('Error', error.response.data.error);
      });
  };

  

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Name" onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button style={styles.btn} title="Register" onPress={handleRegister} />
      <Button style={styles.btn} title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },

  input:{
    borderWidth:1,
    borderColor:'lightblue',
    borderRadius:12,
    width:'80%',
    height:40,
    marginBottom:20,
  }
})

export default App;
