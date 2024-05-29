import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
/* import data from '../data/categorias.json'; */
import { Category } from './category';
import { useDispatch, useSelector } from 'react-redux';
import {ROUTE} from '../navigation/routes'
import { useNavigation } from '@react-navigation/native';
import { setCategorySelected } from '../features/shop/shopSlice';




export const Categories = (/* {onPress} */) => {
  const {navigate} = useNavigation()
  const categories = useSelector((state)=> state.shop.categories)
  /* const dispatch = useDispatch() */

  const handlePress = (item) => {
    /* dispatch(setCategorySelected(brand)) */ //REVISAR SI SE FILTRA POR MARCA O BORRAR EL DISPATCH
    navigate(ROUTE.ALL_PRODUCTS /* (brand) */)
  };
  
  return (
    <View style={styles.container}>
      <FlatList data={categories} horizontal renderItem={({ item }) => (<Category name={item} onPress={() => handlePress(item)} />)} keyExtractor={(item, index) => index.toString()} style={styles.flatList}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    /* flex: 1, */
    marginTop: 20,
    marginBottom: 20,
  },
  flatList: {
    maxHeight: 80, // Establece aquí la altura máxima que desees
    marginLeft: 16,
    marginRight: 16,
  },
});