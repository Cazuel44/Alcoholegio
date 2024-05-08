import React from 'react';
import { FlatList, View, Text } from 'react-native';
import data from '../data/categorias.json';
import { Category } from './category';



export const Categories = () => {
  return (
    <View>
      <FlatList data={data} renderItem={({item}) => <Category name={item}/>}/>  
    </View>

  )
}
