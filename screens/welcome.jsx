import React, { useState } from 'react'
import { Alert, Image, Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Button } from '../components/button'
import { Header } from '../components/header';
import { Theme } from '../config/theme';
import { useNavigation } from '@react-navigation/native';


export const Welcome = () => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Home'/* 'SingUp' */);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Image style={styles.logo} source={require('../assets/logoreact.png')} />
      <View style={styles.texts}>
        <Text style={styles.subtitle}>Ven a "tomar" las mejores clases 😉</Text>
        <Button onPress={handlePress} >Vamos a TOMAR! clases</Button>
      </View>
    </View>
  );
};


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
  subtitle: {
    /* color: Theme.fuego[600], */
    fontSize: 18,
  },
  logo: {
    width: 350,
    height: 350,
  },
  
})