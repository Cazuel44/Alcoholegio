import React from 'react'
import { Alert, Image, Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Theme } from '../config/theme';


export const Button = ({ onPress, children }) => {

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.fuego[300],
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 30,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
})