import { StatusBar } from 'expo-status-bar';
import { Alert, Image, Pressable, StyleSheet, Text, View,  } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Welcome } from './screens/welcome'
import {Home} from './screens/home'

import { AllProducts} from './screens/allProducts'
import { ItemDetail } from './screens/itemDetail';
import { Navigator } from './navigation/navigator';
import { Provider } from 'react-redux';
import { store } from './store';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        {/* <Welcome/> */}
        {/* <Home/> */} 
        {/* <AllProducts/> */}
        {/* <ItemDetail/> */}
        <Navigator/>
      </SafeAreaView>
    </Provider>
    
    
  );
}

