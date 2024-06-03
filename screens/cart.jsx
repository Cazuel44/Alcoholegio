import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
/* import cartData from '../data/cart.json' */
import { CartItem } from '../components/cartItem';
import { formatPrice } from '../utils/price';
import { Counter } from '../components/counter';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';
import { usePostOrderMutation } from '../services/shopServices';
import { Button } from '../components/button';

export const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.cart.value.user)
  /* const [cart, setCart] = useState(cartData) */

  const cart = useSelector(state => state.cart.value.items)
  const totalPrice = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
  const [triggerPost, result] = usePostOrderMutation()
  const cartIsEmpty = cart.length === 0

  const handleDelete = (id) => {
    /* setCart(cart.filter((item) => item.id !== id)); */
    /* useDispatch(removeItem(id)); */
    dispatch(removeItem({ id }));
  };

  const confirmOrder = () => {
    console.log('Confirming order with the following details:');
    triggerPost({ items: cart, total: totalPrice, user });
  };

  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={{ gap: 32 }} data={cart} renderItem={({ item }) => (<CartItem {...item} onDelete={handleDelete} />)} ListEmptyComponent={<Text>No hay productos en el carrito</Text>} />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>{formatPrice(totalPrice)}</Text>
      </View>
      {cartIsEmpty ? null : (
        <View style={styles.payButon}>
          <Button onPress={confirmOrder}>Confirmar compra</Button>
        </View>
      )}
      <Counter />
    </View>
  )
};

//VERIFICAR LOGICA DE TOTAL DEL CARTSLICE CON EL CARTSCREEN


export const styles = StyleSheet.create({

  container: {
    height: '100%',
    /* margin: 16, */
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    /* backgroundColor: 'red' */
  },
  totalText: {
    fontSize: 20,
  },
  payButon: {
    alignItems: 'center'
  },

})

