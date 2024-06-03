import React from 'react'
import { View, Text } from 'react-native'
import { LoginForm } from '../components/loginForm'

export const Login = () => {
  return (
    <View>
        <View>
        <Text>Registrate para comenzar</Text>
        <LoginForm/>
        </View>
    </View>
  )
}
