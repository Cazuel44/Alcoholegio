import React from 'react';
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
/* import data from '../data/categorias.json'; */
import { Category } from './category';
import {ROUTE} from '../navigation/routes'
import { useNavigation } from '@react-navigation/native';
/* import { setCategorySelected } from '../features/shop/shopSlice'; */
/* import { useDispatch, useSelector } from 'react-redux'; */
import { useGetCategoriesQuery } from '../services/shopServices'
import { Theme } from '../config/theme';




export const Categories = (/* {onPress} */) => {
  const {navigate} = useNavigation()
  const {data: categories, isLoading, error} = useGetCategoriesQuery()
  console.log(categories);
  /* const categories = useSelector((state)=> state.shop.categories) */
  /* const dispatch = useDispatch() */

  const handlePress = (item) => {
    /* dispatch(setCategorySelected(brand)) */ //REVISAR SI SE FILTRA POR MARCA O BORRAR EL DISPATCH
    navigate(ROUTE.ALL_PRODUCTS /* (brand) */)
  };

  if (isLoading/* true */) return <View style={styles.categoriesLoading}>
    <ActivityIndicator size="large" color={Theme.fuego[500]} />
    <Text>Cargando Categorias...</Text>
  </View>
  
  return (
    <View style={styles.container}>
      <FlatList data={categories || []} horizontal renderItem={({ item }) => (<Category name={item} onPress={() => handlePress(item)} />)} keyExtractor={(item, index) => index.toString()} style={styles.flatList}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    /* flex: 1, */
    marginTop: 20,
    marginBottom: 20,
  },
  categoriesLoading:{
    flexDirection: 'row',
    margin: 16,
    gap: 8,
    alignItems: 'center',
  },
  flatList: {
    maxHeight: 80, // Establece aquí la altura máxima que desees
    marginLeft: 16,
    marginRight: 16,
  },
});