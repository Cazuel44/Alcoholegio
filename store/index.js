// AQUI SE CONFIGURA REDUX
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import shopSlice from '../features/shop/shopSlice';
import { shopApi } from '../services/shopServices';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartSlice from '../features/cart/cartSlice';
import { authApi } from '../services/authServices';
import authSlice from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        counter: counterSlice,
        cart: cartSlice,
        shop: shopSlice,
        [authApi.reducerPath]: authApi.reducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch)