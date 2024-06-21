import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; // Importar SafeAreaView de la misma línea
import { Provider } from 'react-redux';
import { store } from './store';
import { Navigator } from './navigation/navigator';
import { MainNavigator } from './navigation/mainNavigator';
import { init } from './db';

init()
  .then(() => console.log('Database initialized'))
  .catch(err => console.error('Database initialization failed', err))

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <MainNavigator />
          {/* <Navigator/> */}
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}