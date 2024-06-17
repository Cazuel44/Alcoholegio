import React, { useState } from 'react'
/* import { SafeAreaView } from 'react-native-safe-area-context' */
import { Alert, Image, Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import {Button} from '../components/button'
import { Header } from '../components/header';
import { Theme } from '../config/theme';
import { useNavigation } from '@react-navigation/native';


export const Welcome = () => {
  
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home'/* 'SingUp' */), alert('¡Amonos compadre!');
  };

  return (
    <View style={styles.container}>
      {/* Fondo personalizado por arreglar!!! */}
      <View style={styles.background}>
        <View style={styles.boxground1} />
        <View style={styles.boxground2} />
        <Header/>
        <Image style={styles.logo} source={require('../assets/logoreact.png')} />
        <View style={styles.texts}>
          
          <Text style={styles.subtitle}>Ven a "tomar" las mejores clases 😉</Text>
          <Button onPress={handlePress} >Vamos a TOMAR! clases</Button>
        </View>
        
      </View>
    </View>
  );
};

/* estilos  del componente */
const styles = StyleSheet.create({
  
  texts: {
    alignItems: 'center',
    gap: 4,
  },
  container: {
    flex: 1, // ocupa todo el espacio de la pantalla 
    alignItems: 'center', // centra el contenido (horizontal)
    justifyContent: 'center', // centra el contenido (vertical)
    paddingHorizontal: 16, 
  },
  background: {
    /* position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(213, 238, 207, 0.5)', // Color de fondo transparente con opacidad
    alignItems: 'center',
    justifyContent: 'center', */
  },
  
  subtitle: {
    /* color: Theme.fuego[600], */
    fontSize: 18,
  },
  logo:{
    
    width: 350,
    height: 350,
  },
  boxground1:{
    backgroundColor: '#0000',
  },
  boxground2:{
    backgroundColor: '#0000',
  }
  
})