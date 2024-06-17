import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, } from 'react-native';
import { Button } from './button'; // Asegúrate de que la ruta es correcta
import { useNavigation } from '@react-navigation/native';
import { useSignUpMutation,  } from '../services/authServices';
import { signupSchema } from '../validations/signUpSchema';


//!!!!!!!!!!!!!VERIFICAR MOSTRAR ERRORES EN LOS INPUTS
export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigation = useNavigation();
  const [triggerSignUp, result] = useSignUpMutation();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const [errorRepeatPassword, setErrorRepeatPassword] = useState();


  const goToLogin = () => {
    navigation.navigate(/* 'Home' */'Login');
  };

  const handleSignUp = async () => {

    try {
      signupSchema.validate({
        email,
        password,
        repeatPassword,
      })
      // Aquí se realiza la solicitud de registro
      const response = await triggerSignUp({ email, password }).unwrap();
      console.log('Sign Up successful:', response);
      // Navegar a la pantalla de inicio de sesión después de registrarse exitosamente
      navigation.navigate('Login');
    } catch (error) {
      // Aquí se manejan los errores
      console.error('Error during sign up:', error);
      /* alert('Hubo un problema al registrarse. Inténtalo de nuevo.'); */
      switch (error.path) {
        case 'email':
          setErrorEmail(error.message)
          
          break;
        case 'password':
          setErrorPassword(error.message)
          
          break;
        case 'repeatPassword':
          setErrorRepeatPassword(error.message)
          
          break;  
        default:
          break;
      }
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Example@mail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        error={errorEmail}
      />
      {/* {errorEmail ? <Text style={styles.error}>{errorEmail}</Text> : null} */}
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="******"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        error={errorPassword}
      />
      <Text style={styles.label}>Repeat password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirma tu contraseña"
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry
        autoCapitalize="none"
        error={errorRepeatPassword}
      />
      <Button onPress={handleSignUp}>Ingresar!</Button>
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