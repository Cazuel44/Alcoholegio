import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { ROUTE } from './routes'
import { Cart } from '../screens/cart'

const {Navigator: StackNavigator, Screen: StackScreen} = createNativeStackNavigator()

export const CartStack = () => {
  return (
    <StackNavigator screenOptions={{ headerShown: false}}>
        <StackScreen name={ROUTE.CART} component={Cart} options={{headerTitle: 'Carrito'}}/>
    </StackNavigator>
  )
};
