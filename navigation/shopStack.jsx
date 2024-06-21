import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllProducts } from '../screens/allProducts';
import { Home } from '../screens/home';
import { ItemDetail } from '../screens/itemDetail';
import { Welcome } from '../screens/welcome';
import { ROUTE } from './routes';
import { LogoutIcon } from '../icons/logOutIcon';


const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();


export const ShopStack = () => (
    <StackNavigator screenOptions={{ headerRight: () => <LogoutIcon /> }}>
        <StackScreen name={ROUTE.WELCOME} component={Welcome} options={{ headerTitle: 'Bienvenido' }} />
        <StackScreen name={ROUTE.HOME} component={Home} options={{ headerTitle: 'Inicio' }} />
        <StackScreen name={ROUTE.ALL_PRODUCTS} component={AllProducts} options={{ headerTitle: 'Todos los productos' }} />
        <StackScreen name={ROUTE.ITEM_DETAIL} component={ItemDetail} />
    </StackNavigator>
);