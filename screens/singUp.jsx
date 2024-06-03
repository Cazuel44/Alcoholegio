import React from 'react'

import { View, Text } from 'react-native'
import { SingUpForm } from '../components/singUpForm'

export const SingUp = () => {
  return (
    <View>
        <View>
        <Text>Registrate para comenzar</Text>
        <SingUpForm/>
        </View>
    </View>
  )
}
