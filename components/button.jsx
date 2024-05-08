import React from 'react'
import { Alert, Image, Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native'

export const Button = ({onPress, children}) => {
    
  return (
    <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#03800e',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 30,
        /* alignSelf: 'center'  */
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})