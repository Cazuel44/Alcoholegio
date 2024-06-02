// AQUI SE CONFIGURA REDUX
import {configureStore} from '@reduxjs/toolkit';
import  counterSlice  from '../features/counter/counterSlice';
import  shopSlice  from '../features/shop/shopSlice';
import { shopApi } from '../services/shopServices';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartSlice from '../features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice,
        shop: shopSlice,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware), 
});

setupListeners(store.dispatch)