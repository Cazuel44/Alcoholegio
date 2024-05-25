import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '../components/header';
import {Button} from '../components/button';
import { Theme } from '../config/theme';
import { Categories } from '../components/categories';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {

  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('AllProducts');
  };

  return (
    <View style={styles.safeArea}>
      
      <Header/>
      <Text style={styles.text}>Revisa nuestro catalogo de productos que tenemos para ti! </Text>
      <Categories />
      <View style={styles.butonbox}> 
        <Button onPress={handlePress} >Productos</Button>
        <Text style={styles.text}>10% de dcto. Si eres estudiante de enologia! </Text>
        <Button>Promos vuelta a clases</Button>
        <Text style={styles.text}>Comienza tus clases como un campeon💪 </Text>
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    /* backgroundColor: Theme.fuego[50], */
      
  },
  text:{
    /* color: "#000000", */
    marginTop: 20,
    fontSize: 15,
    fontWeight: '500', 
    marginHorizontal: 16,
  },
  butonbox:{
    alignSelf: "flex-start",   
    marginHorizontal: 16, 
  }
});

export default Home; // esta exportacion no es necesaria si ya se exporta al inicio, pero en algunos proyectos se utuliza 