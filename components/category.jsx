import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Theme } from '../config/theme';


export const Category = ({ name, onPress }) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: 170,
    marginHorizontal: 5,
    marginBottom: 20,
    borderRadius: 85, // la mitad del ancho y la altura para hacerlo redondo
    overflow: 'hidden', // para asegurar que el contenido no se desborde
    backgroundColor: '#000000'
  },
  name: {
    fontSize: 25,
    fontStyle: "italic",
    marginBottom: 10,
    backgroundColor: Theme.fuego[400],
    borderRadius: 85, // redondear el borde del texto
    padding: 10,
    textAlign: 'center', // centrar el texto
  }
});


/*
export const Category = ({ name, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.categoryContainer}>
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};
*/