import React from 'react';
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Category } from './category';
import { ROUTE } from '../navigation/routes'
import { useNavigation } from '@react-navigation/native';
import { useGetCategoriesQuery } from '../services/shopServices'
import { Theme } from '../config/theme';


export const Categories = () => {
  const { navigate } = useNavigation()
  const { data: categories, isLoading, error } = useGetCategoriesQuery()
  console.log(categories);

  const handlePress = (item) => {
    navigate(ROUTE.ALL_PRODUCTS)
  };

  if (isLoading/* true */) return <View style={styles.categoriesLoading}>
    <ActivityIndicator size="large" color={Theme.fuego[500]} />
    <Text>Cargando Categorias...</Text>
  </View>

  return (
    <View style={styles.container}>
      <FlatList data={categories || []} horizontal={false} renderItem={({ item }) => (<Category name={item} onPress={() => handlePress(item)} />)} keyExtractor={(item, index) => index.toString()} style={styles.flatList} showsVerticalScrollIndicator={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  categoriesLoading: {
    flexDirection: 'row',
    margin: 16,
    gap: 8,
    alignItems: 'center',
  },
  flatList: {
    marginLeft: 16,
    marginRight: 16,
  },
});