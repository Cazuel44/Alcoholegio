import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, } from 'react-native';
import { Button } from './button'; // Asegúrate de que la ruta es correcta
import { useNavigation } from '@react-navigation/native';

export const SingUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(/* 'Home' */'Login');
  };

  const handleSingUp = () => {
    if (validateEmail(email)) {
      if (password !== repeatPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Repeat Password:', repeatPassword);
      // Aquí puedes agregar la lógica para manejar el inicio de sesión, por ejemplo, llamar a una API
    } else {
      alert('Por favor, ingresa un correo electrónico válido.');
    }
  };
  const validateEmail = (email) => {
    console.log('Validando email:', email);
    return email.includes('@');
  };



  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Text style={styles.label}>Repeat password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirma tu contraseña"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button onPress={handleSingUp}>Ingresar!</Button>
      <View>
        <Text>Ya estas registrado?</Text>
        <Button onPress={goToLogin}>Ingresa con tu cuenta</Button>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});