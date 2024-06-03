import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, } from 'react-native';
import { Button } from './button'; // Asegúrate de que la ruta es correcta
import { useNavigation } from '@react-navigation/native';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (validateEmail(email)) {
      console.log('Email:', email);
      console.log('Password:', password);
      // Aquí puedes agregar la lógica para manejar el inicio de sesión, por ejemplo, llamar a una API
    } else {
      alert('Por favor, ingresa un correo electrónico válido.');
    }
  };

  const goToSingUp = () => {
    navigation.navigate('SingUp');
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
      <Button onPress={handleLogin}>Ingresar!</Button>
      <View style={styles.footer}>
        <Text>¿No tienes cuenta?</Text>
        <Button onPress={goToSingUp}>Regístrate</Button>
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
  footer: {
    marginTop: 16,
    alignItems: 'center',
  },
});