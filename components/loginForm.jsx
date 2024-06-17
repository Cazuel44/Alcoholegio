import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, } from 'react-native';
import { Button } from './button'; // Asegúrate de que la ruta es correcta
import { useNavigation } from '@react-navigation/native';
import { useLoginMutation } from '../services/authServices';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [triggerLogin, result] = useLoginMutation();
  const [isLoading, setIsLoading] = useState(false);  
  const dispatch = useDispatch()

  const handleLogin = async () => {  // Agregado el async aquí
    try {
      setIsLoading(true);
      await triggerLogin({ email, password });  // Corregido el uso de await aquí
      /* console.log('Token:', result.data.token); */
    } catch (error) {
      console.error('Error en la solicitud de ingreso:', error);
      alert('Error, Correo o contraseña incorrectos');
    } finally {
      setIsLoading(false);
    }
  };

  const goToSingUp = () => {
    navigation.navigate('SingUp');
  };

  useEffect(() => {
    if (result.data) {
      const { email, localId, idToken: token } = result.data;
      dispatch(setUser({ email, localId, token }));
      /* insertSession({ email, localId, token }); */
    }
  }, [result.data]);


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