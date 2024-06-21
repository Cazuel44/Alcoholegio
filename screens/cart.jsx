import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CartItem } from '../components/cartItem';
import { formatPrice } from '../utils/price';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../features/cart/cartSlice';
import { usePostOrderMutation } from '../services/shopServices';
import { Button } from '../components/button';
import { useNavigation } from '@react-navigation/native';

export const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.value.user);
  const cart = useSelector(state => state.cart.value.items)
  const totalPrice = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  const [triggerPost, result] = usePostOrderMutation()
  const cartIsEmpty = cart.length === 0
  const { goBack, setOptions } = useNavigation()

  const handleDelete = (id) => {
    dispatch(removeItem({ id }));
  };

  const confirmOrder = () => {
    if (user) {
      console.log('Confirmando compra, detalles:');
      triggerPost({ items: cart, total: totalPrice, user, fecha: new Date().toISOString() });
      goBack()
    } else {
      console.log('User not logged in');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={{ gap: 32 }} data={cart} renderItem={({ item }) => (<CartItem {...item} onDelete={handleDelete} />)} ListEmptyComponent={<Text style={styles.totalText}>No hay productos en el carrito</Text>} />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>{formatPrice(totalPrice)}</Text>
      </View>
      {cartIsEmpty ? null : (
        <View style={styles.payButon}>
          <Button onPress={confirmOrder}>Confirmar compra</Button>
        </View>
      )}

    </View>
  )
};


export const styles = StyleSheet.create({

  container: {
    height: '100%',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  totalText: {
    fontSize: 20,
  },
  payButon: {
    alignItems: 'center',
    marginBottom: 16,
  },

})

