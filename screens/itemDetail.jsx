import React from 'react'
import { Text, View, StyleSheet, ScrollView, } from 'react-native'
/* import products from '../data/products.json'; */
import { Card } from '../components/card';
import { useFocusEffect, useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Button} from '../components/button';
import { Category } from '../components/category';
import { useSelector } from 'react-redux';


export const ItemDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  // Obtiene el estado de los productos desde el store de Redux
  const products = useSelector(state => state.shop.products);
  const category = useSelector(state => state.shop.categorySelected)

  // Encuentra el producto con el ID correspondiente
  const product = products.find(product => product.id === id);

  useFocusEffect(React.useCallback(() => {
    if (product && category) {
      navigation.setOptions({ title: category });
    }
  }, [navigation, product, category]));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardContainer}>
          {product ? <Card {...product} /> : <Text>Producto no encontrado</Text>}
          <View style={styles.buttonContainer}>
            <Button onPress={() => alert('Producto agregado al carrito')}>Agregar al carrito</Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      /* justifyContent: 'center', */
      padding: 16,
      
      backgroundColor: 'black',
    },
    cardContainer: {
      flex: 1, 
      backgroundColor: 'red',
      /* justifyContent: 'center', */
      /* alignSelf: 'center', */
      
    },  
    buttonContainer: {
      /* marginTop: 20, */
      width: '50%',
      marginBottom: 16,
      marginLeft: 16,
    },
    scrollViewContent: {
        felx: 1,
        /* justifyContent: 'center', */
        /* alignContent: 'center', */
        /* alignItems: 'center' */
        backgroundColor: 'green'
    },
});
