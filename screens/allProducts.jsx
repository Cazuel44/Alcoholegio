import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Text, FlatList, TextInput, Pressable, ActivityIndicator } from 'react-native'
import { Card } from '../components/card';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import { setCategorySelected, setProductIdSelected } from '../features/shop/shopSlice';
import { useGetProductsQuery } from '../services/shopServices';
import { Theme } from '../config/theme';

export const AllProducts = () => {
  const dispatch = useDispatch();
  const { data: products = [], isLoading, error } = useGetProductsQuery();

  const navigation = useNavigation();
  const navigateToItemDetail = (productId, category, product) => {
    console.log('Selected Product ID:', productId);
    console.log('Selected Category:', category);
    dispatch(setProductIdSelected(productId));
    dispatch(setCategorySelected(category));
    navigation.navigate(ROUTE.ITEM_DETAIL, { product });
  };

  const [searchText, setSearchText] = useState('');

  const filteredProducts = (products || []).filter((item) =>
    item.model.toLowerCase().includes(searchText.toLowerCase()) ||
    item.category.toLowerCase().includes(searchText.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchText.toLowerCase())
  );


  if (isLoading) return <View style={styles.categoriesLoading}>
    <ActivityIndicator size="large" color={Theme.fuego[500]} />
    <Text>Cargando Categorias...</Text>
  </View>


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textinput} onChangeText={(text) => setSearchText(text)} value={searchText} placeholder="Buscar producto..." />
      </View>
      <FlatList contentContainerStyle={styles.list} data={filteredProducts} renderItem={({ item }) => { const { id, ...rest } = item; return <Pressable onPress={() => navigateToItemDetail(item.id, item.category, item)}><Card {...rest} /></Pressable>; }} keyExtractor={(item) => item.id.toString()} ListEmptyComponent={() => (<Text>No se encontraron productos</Text>)} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  list: {
    // se le puede dar stilos a la flatlist
  },
  categoriesLoading: {
    flexDirection: 'row',
    margin: 16,
    gap: 8,
    alignItems: 'center',
  },
  textinput: {
    border: Theme.fuego[400],
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 4,
    marginBottom: 4,
    borderWidth: 3,
    borderColor: Theme.fuego[500],
    width: '60%',
    padding: 4,
    borderRadius: 8,
  },
});

