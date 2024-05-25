import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllProducts } from '../screens/allProducts';
import { Home } from '../screens/home';

import { ItemDetail } from '../screens/itemDetail';
import { Welcome } from '../screens/welcome';

import { ROUTE } from './routes';
import { Cart } from '../screens/cart';


const { Navigator: StackNavigator, Screen: StackScreen } = createNativeStackNavigator();


export const ShopStack = () => (
    <StackNavigator screenOptions={{ headerShown: false }}>
        <StackScreen name={ROUTE.WELCOME} component={Welcome} />
        <StackScreen name={ROUTE.HOME} component={Home} />
        <StackScreen name={ROUTE.ALL_PRODUCTS} component={AllProducts} />
        <StackScreen name={ROUTE.ITEM_DETAIL} component={ItemDetail} />
        <StackScreen name={ROUTE.CART} component={Cart} />

    </StackNavigator>
);