import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Theme } from '../config/theme'
import { formatPrice } from '../utils/price'


export const CartItem = ({ id, brand, image, model, quantity, price, onDelete }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.info}>
                <Text style={styles.text}>{brand}</Text>
                <Text style={styles.text}>{model}</Text>
                <Text style={styles.text}>Cantidad:{quantity}</Text>
                <Text style={styles.text}>{formatPrice(price)}</Text>
                <Pressable style={styles.delete} onPress={() => onDelete(id)}>
                    <Text style={styles.deleteText}>Eliminar</Text>
                </Pressable>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: Theme.fuego[300],
        gap: 16,
        margin: 16,
    },
    image: {
        width: 160,
        height: 120,
        marginLeft: 8,
    },
    info: {
        flex: 1,
        gap: 8
    },
    text: {
        fontSize: 18,
    },
    delete: {
        backgroundColor: '#000000',
        padding: 8,
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 8,
        width: 120,
        alignItems: 'center',
        
    },
    deleteText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff'
    }

})