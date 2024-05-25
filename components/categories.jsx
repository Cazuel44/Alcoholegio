import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import data from '../data/categorias.json';
import { Category } from './category';




export const Categories = () => {
  
  return (
    <View style={styles.container}>
      <FlatList data={data} horizontal renderItem={({ item }) => (<Category name={item} onPress={() => handlePress(item)} />)} keyExtractor={(item, index) => index.toString()} style={styles.flatList}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    /* flex: 1, */
    marginTop: 20,
    marginBottom: 20,
  },
  flatList: {
    maxHeight: 80, // Establece aquí la altura máxima que desees
    marginLeft: 16,
    marginRight: 16,
  },
});