import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { SignUpForm } from '../components/signUpForm'

export const SingUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Registrate para comenzar</Text>
        <SignUpForm />
      </View>
    </View>
  )
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  form: {
    margin: 16,
  },
  title: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18
  }
})