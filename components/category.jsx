import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const Category = ({name}) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  categoryContainer:{
    /* backgroundColor: '#000000', */
    width: 170,
    marginHorizontal: 5
    
  },
  name:{
    color: '#ffffff',
    fontSize: 25,
    fontStyle: "italic",
    marginBottom: 10,
    backgroundColor: '#000000',
    borderRadius:30,
    padding: 10
  }
})
