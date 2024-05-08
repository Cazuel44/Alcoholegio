import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const Header = () => {
    return (
      <View>
        <Text style={styles.header}>ALCOHOLEGIO <Text style={styles.emoji}>{/* 🍷 */}📖</Text></Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginHorizontal: 21,
        borderBottomWidth: 1, // Grosor del borde inferior
        borderBottomColor: 'black',
    },
    /* emoji: {
        fontSize: 40, // tamaño del el emoji
      
    }, */
});