import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Pressable, StyleSheet, Text, View,  } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Welcome } from './screens/welcome'
import {Home} from './screens/home'
import { ItemListCategories } from './screens/itemListCategories';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Welcome/> */}
      <Home/> 
      {/* <ItemListCategories/> */}
    </SafeAreaView>
    
  );
}

