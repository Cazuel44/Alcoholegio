import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Text, FlatList, TextInput, Pressable, ActivityIndicator } from 'react-native'
import { Categories } from '../components/categories';
import { Header } from '../components/header';
/* import products from '../data/products.json'; */
import { Card } from '../components/card';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import { setCategorySelected, setProductIdSelected } from '../features/shop/shopSlice';
import { useGetProductsQuery } from '../services/shopServices';
import { Theme } from '../config/theme';

export const AllProducts = () => {
  const dispatch = useDispatch();
  /* const products = useSelector(state=> state.shop.products) */
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  

  const navigation = useNavigation();
  const navigateToItemDetail = (productId, category, product) => {
    console.log('Selected Product ID:', productId);
    console.log('Selected Category:', category);
    dispatch(setProductIdSelected(productId));
    dispatch(setCategorySelected(category));
    navigation.navigate(ROUTE.ITEM_DETAIL, { /* id: productId */product });
  };
  
  const [searchText, setSearchText] = useState('');

  const filteredProducts = /* products */(products || []).filter((item) =>
    item.model.toLowerCase().includes(searchText.toLowerCase()) ||
    item.category.toLowerCase().includes(searchText.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchText.toLowerCase())
  );
  let message;
  if (filteredProducts.length === 0) {
    message = <Text>No se encontraron productos</Text>;
  } else {
    message = null;
  }

  if (isLoading/* true */) return <View style={styles.categoriesLoading}>
    <ActivityIndicator size="large" color={Theme.fuego[500]} />
    <Text>Cargando Categorias...</Text>
  </View>
  

  return (
    <View style={styles.container}>
      <Text>Todos los productos</Text>
      <TextInput style={styles.input} onChangeText={(text) => setSearchText(text)} value={searchText} placeholder="Buscar producto..." />
      <FlatList contentContainerStyle={styles.list} data={filteredProducts} renderItem={({ item }) => { const { id, ...rest } = item; return <Pressable onPress={() => navigateToItemDetail(item.id, item.category, item)}><Card {...rest} /></Pressable>; }} keyExtractor={(item) => item.id.toString()} />
      {message}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#ff0000', */
  },
  list: {

    // se le puede dar stilos a la flatlist
  },
  categoriesLoading:{
    flexDirection: 'row',
    margin: 16,
    gap: 8,
    alignItems: 'center',
  },


});


//!!!REVISAR FLATLIST AL PRESIONAR UN ITEM MUESTRA OTRO 


/* <FlatList data={products} renderItem={({item})=> <Card category={item.category} brand={item.brand} model={item.model} price={item.price} image={item.image}/>}/> */

/*export const AllProducts = () => {

  

  const [searchText, setSearchText] = useState('');

  const filteredProducts = products.filter((item) =>
    item.model.toLowerCase().includes(searchText.toLowerCase()) ||
    item.category.toLowerCase().includes(searchText.toLowerCase()) ||
    item.brand.toLowerCase().includes(searchText.toLowerCase())
  );
  let message;
  if (filteredProducts.length === 0) {
    message = <Text>No se encontraron productos</Text>;
  } else {
    message = null; 
  }

  return (
    <View style={styles.container}>
        <Text>Todos los productos</Text>
        <TextInput style={styles.input} onChangeText={(text) => setSearchText(text)} value={searchText} placeholder="Buscar producto..." />
        <FlatList data={filteredProducts} renderItem={({ item }) => { const { id, ...rest } = item; return <Card {...rest} />;}}  keyExtractor={(item) => item.id.toString()} />
        {message}
    </View>
  );
};*/


/* muestra solo producto filtrado
export const AllProducts = ({ route }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const { category } = route.params || {};

  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(item =>
        item.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (searchText) {
      filtered = filtered.filter(item =>
        item.model.toLowerCase().includes(searchText.toLowerCase()) ||
        item.category.toLowerCase().includes(searchText.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [category, searchText]);

  return (
    <View style={styles.container}>
      <Text>Todos los productos</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="Buscar producto..."
      />
      {filteredProducts.length === 0 ? (
        <Text>No se encontraron productos</Text>
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={({ item }) => (
            <Card {...item} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};
*/ 