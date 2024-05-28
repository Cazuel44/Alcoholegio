import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import cartData from '../data/cart.json'
import { CartItem } from '../components/cartItem';
import { formatPrice } from '../utils/price';
import { Counter } from '../components/counter';

export const Cart = () => {

  const [cart, setCart] = useState(cartData)
  
  const totalPrice = cart.reduce((acc, {price, quantity}) => {return acc + price * quantity}, 0)

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
        <FlatList contentContainerStyle={{gap: 32}} data={cart} renderItem={({item})=> (<CartItem {...item} onDelete={handleDelete}/>)} ListEmptyComponent={<Text>No hay productos en el carrito</Text>}/>
        <View style={styles.total}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalText}>{formatPrice(totalPrice)}</Text>
        </View>
        <Counter/>
    </View>
  )
};

export const styles = StyleSheet.create({

  container:{
    height: '100%',
    /* margin: 16, */
  },
  total:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    /* backgroundColor: 'red' */
  },
  totalText:{
    fontSize: 20,
  }
    
})

