import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ROUTE } from './routes'
import { Orders } from '../screens/orders'

const {Navigator: StackNavigator, Screen: StackScreen} = createNativeStackNavigator()

export const OrdersStack = () => {
  return (
    <StackNavigator>
        <StackScreen name={ROUTE.CART} component={Orders} options={{headerTitle: 'Ordenes'}}/>
    </StackNavigator>
  )
};