import React from 'react'

import { View, Text } from 'react-native'
import { SignUpForm } from '../components/signUpForm'

export const SingUp = () => {
  return (
    <View>
        <View>
        <Text>Registrate para comenzar</Text>
        <SignUpForm/>
        </View>
    </View>
  )
}
