import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ROUTE } from './routes'
import { SingUp } from '../screens/singUp';
import { Login } from '../screens/login';


const {Navigator: StackNavigator, Screen: StackScreen} = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <StackNavigator /* screenOptions={{ headerShown: false}} */>
        <StackScreen name={ROUTE.LOGIN} component={Login} />
        <StackScreen name={ROUTE.SING_UP} component={SingUp} />
    </StackNavigator>
  )
};