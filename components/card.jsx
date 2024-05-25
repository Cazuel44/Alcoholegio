import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Theme } from '../config/theme';

export const Card = ({ id, category, brand, model, price, image }) => {
  return (
    <View style = {styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style = {styles.props}>
        <Text style = {styles.texts}>{id}</Text>
        <Text style = {styles.texts}>{category}</Text>
        <Text style = {styles.texts}>{brand}</Text>
        <Text style = {styles.texts}>{model}</Text>
        <Text style = {styles.texts}>${price}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 2,
    borderColor: Theme.fuego[500],
    margin: 20,
    borderRadius: 10
  },
  image:{
    /* aspectRatio: 1, */
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#000000',
    margin: 10,
    minHeight: 300,
  },    
  props: {
    gap: 4,
    paddingHorizontal: 16,
    paddingVertical: 1,
  },
  texts:{
    fontSize: 15,
    fontWeight: 'bold'
  }
});
