import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Categories } from '../components/categories';
import { Header } from '../components/header';

export const ItemListCategories = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <Text style={styles.text}>Catalogo de productos </Text>
        <Categories />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c8ff03",
    
  },
  content: {
    flex: 1,
    padding: 20, // Añade espacio entre el Header y la lista de categorías
  },
  text: {
    color: '#0c6904',
    fontSize: 20,
    marginBottom: 10
  },
});


