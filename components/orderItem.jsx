import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { formatPrice } from '../utils/price'
import { formatDate } from '../utils/date'

export const OrderItem = ({ createdAt, totalPrice }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.orderText}>{formatDate(createdAt)}</Text>
        <Text style={styles.orderText}>{formatPrice(totalPrice)}</Text>
    </View>
  )
}


export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    orderText:{
        fontWeight: 'bold',
    }
})
