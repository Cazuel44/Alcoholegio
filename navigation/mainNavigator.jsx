import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { AuthStack } from './authStack'
import { AppNavigator } from './navigator'
import { useSelector } from 'react-redux'

export const MainNavigator = () => {
  /* const user = useSelector(state => state.auth.value.user) */
  const { localId } = useSelector(state => state.auth.value.user)
  /* console.log("User:", user); */

  
  return (
    <NavigationContainer>
      {/* <AppNavigator/> */}
      {/* {user ? <AppNavigator/> : <AuthStack/>} */}
      {localId ? <AppNavigator/> : <AuthStack/>}
    </NavigationContainer>
  )
}
