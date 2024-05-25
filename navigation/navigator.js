import { NavigationContainer } from '@react-navigation/native';
import { ShopStack } from './shopStack.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartStack } from './cartStack.jsx';
import { ShopIcon } from '../icons/shopIcon.jsx';
import { CartIcon } from '../icons/cartIcon.jsx';



const {Screen: TabScreen, Navigator: TabNavigator} = createBottomTabNavigator()

export const Navigator = () => (
  <NavigationContainer >
    <TabNavigator screenOptions={{ headerShown: false }}>
    <TabScreen name='shop' component={ShopStack} options={{tabBarIcon: ({ color }) => <ShopIcon fill={color} />}}/>
    <TabScreen name='cart' component={CartStack} options={{tabBarIcon: ({ color }) => <CartIcon fill={color} />}}/>
      
    </TabNavigator>
  </NavigationContainer>
);

