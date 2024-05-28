import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import orderData from '../data/orders.json'
import { OrderItem } from '../components/orderItem'
import { Theme } from '../config/theme'

export const Orders = () => {
  return (
    <View style={styles.container}>
        <FlatList contentContainerStyle={styles.list} data={orderData} renderItem={({item})=> <OrderItem {...item}/>} ListEmptyComponent={<Text>No hay ordenes</Text>}/>
    </View>
  )
}

export const styles = StyleSheet.create({
    container:{
        backgroundColor: Theme.fuego[500],
        /* minHeight: '100%' */
    },
    list:{
        gap:32,
        /* paddingTop: 32, */
    }
})
