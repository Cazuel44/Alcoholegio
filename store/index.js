// AQUI SE CONFIGURA REDUX
import {configureStore} from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
})