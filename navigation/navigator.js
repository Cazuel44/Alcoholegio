import { NavigationContainer } from '@react-navigation/native';
import { ShopStack } from './shopStack.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartStack } from './cartStack.jsx';
import { ShopIcon } from '../icons/shopIcon.jsx';
import { CartIcon } from '../icons/cartIcon.jsx';
import { Theme } from '../config/theme.jsx';
import { OrdersStack } from './orderStack.jsx';
import { OrdersIcon } from '../icons/ordersIcon.jsx';
import { MyProfileStack } from './myProfileStack.jsx';
import { ProfileIcon } from '../icons/accountIcon.jsx';


const {Screen: TabScreen, Navigator: TabNavigator} = createBottomTabNavigator()

export const AppNavigator = () => (
  
  <TabNavigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Theme.fuego['950'], tabBarInactiveTintColor: Theme.fuego['600'], tabBarStyle: { backgroundColor: Theme.fuego['900']}, tabBarItemStyle: { backgroundColor: Theme.fuego['300']}}}>
  <TabScreen name='shopTab' component={ShopStack} options={{ title: 'Tienda', tabBarIcon: ({ color }) => <ShopIcon fill={color} />}}/>
  <TabScreen name='cartTab' component={CartStack} options={{ title: 'Carrito', tabBarIcon: ({ color }) => <CartIcon fill={color} />}}/>
  <TabScreen name='ordersTab' component={OrdersStack} options={{ title: 'Ordenes', tabBarIcon: ({ color }) => <OrdersIcon fill={color} />}}/>
  <TabScreen name='myProfile' component={MyProfileStack} options={{ title: 'Mi perfil', tabBarIcon: ({ color }) => <ProfileIcon fill={color} />}}/>
  </TabNavigator>
  
);

