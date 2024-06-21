import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { AuthStack } from './authStack'
import { AppNavigator } from './navigator'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession } from '../db'
import { setUser } from '../features/auth/authSlice'

export const MainNavigator = () => {
  const { localId } = useSelector(state => state.auth.value.user)
  const dispatch = useDispatch()  
  
  useEffect(() => {
    const getSession = async () => {
      const session = await fetchSession()
      if (session) dispatch(setUser(session))
    }
    getSession()
  }, [dispatch])

  return (
    <NavigationContainer>
      {localId ? <AppNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}
