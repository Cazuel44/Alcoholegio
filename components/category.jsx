import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Theme } from '../config/theme';

export const Category = ({ name, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      {
        opacity: pressed ? 0.5 : 1,
      },
      styles.pressableContainer
    ]}>
      <View style={styles.categoryContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  categoryContainer: {
    width: 170,
    marginHorizontal: 5,
    marginBottom: 20,
    borderRadius: 85,
    overflow: 'hidden', 
    backgroundColor: '#000000'
  },
  name: {
    fontSize: 25,
    fontStyle: "italic",
    marginBottom: 10,
    backgroundColor: Theme.fuego[400],
    borderRadius: 85, 
    padding: 10,
    textAlign: 'center', 
  }
});
