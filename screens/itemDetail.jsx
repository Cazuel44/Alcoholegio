import React from 'react'
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, } from 'react-native'
import { Card } from '../components/card';
import { useFocusEffect, useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';


export const ItemDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {product } = route.params;
  const category = useSelector(state => state.shop.categorySelected)
  const dispatch = useDispatch();
  const { goBack, setOptions } = useNavigation()

  const handleAddToCart = () => {
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


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardContainer}>
          {product ? <Card image={product.image} category={product.category} brand={product.brand} model={product.model} price={product.price}/* {...product} */ /> : <Text>Producto no encontrado</Text>}
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
    padding: 16,
  },
  cardContainer: {
    flex: 1,
  },
  buttonContainer: {
    width: '50%',
    marginBottom: 16,
    marginLeft: 16,
  },
  scrollViewContent: {
    felx: 1,
  },
  categoriesLoading: {
    flexDirection: 'row',
    margin: 16,
    gap: 8,
    alignItems: 'center',
  },
});


