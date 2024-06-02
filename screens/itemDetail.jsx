import React from 'react'
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, } from 'react-native'
/* import products from '../data/products.json'; */
import { Card } from '../components/card';
import { useFocusEffect, useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/button';
import { Category } from '../components/category';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductByIdQuery } from '../services/shopServices';

import { Theme } from '../config/theme';
import { addItem } from '../features/cart/cartSlice';


export const ItemDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { /* id */product } = route.params;
  const category = useSelector(state => state.shop.categorySelected)
  const dispatch = useDispatch();
  const { goBack, setOptions } = useNavigation()

  // Obtiene el estado de los productos desde el store de Redux
  /* const products = useSelector(state => state.shop.products); */

  // usa el hook useGetProductByIdQuery para obtener los datos del producto de la db por id
  /* const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  console.log('Product data:', product);
 */
  // Encuentra el producto con el ID correspondiente
  /*  const product = products.find(product => product.id === id); */

  // Función para manejar el clic en el botón "Agregar al carrito"
  const handleAddToCart = () => {
    // Despacha la acción para agregar el producto al carrito
    if (product) {
      dispatch(addItem(product));
      alert('Producto agregado al carrito');
      console.log(product)
      goBack()
    }
  };

  useFocusEffect(React.useCallback(() => {
    if (product && category) {
      navigation.setOptions({ title: category });
    }
  }, [navigation, product, category]));

  /* if (isLoading) return <View style={styles.categoriesLoading}>
    <ActivityIndicator size="large" color={Theme.fuego[500]} />
    <Text>Cargando Categorias...</Text>
  </View> */

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardContainer}>
          {product ? <Card {...product} /> : <Text>Producto no encontrado</Text>}
          <View style={styles.buttonContainer}>
            <Button onPress={handleAddToCart}>Agregar al carrito</Button>
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
  categoriesLoading: {
    flexDirection: 'row',
    margin: 16,
    gap: 8,
    alignItems: 'center',
  },
});


