import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            user: null,
            updatedAt: new Date().toLocaleString(),
            total: 0,
            items: []
        },
    },
    reducers: {
        setUser: (state, action) => {
            state.value.user = action.payload;
        },
        addItem: (state, action) => {
            const item = action.payload;
            
            const itemInCart = state.value.items.findIndex(itemInCart => itemInCart.id === item.id);
            if (itemInCart !== -1) {
                state.value.items[itemInCart].quantity++;
            } else {
                state.value.items.push({ ...item, quantity: 1 });
            }
            state.value.total = state.value.items.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);
            state.value.updatedAt = new Date().toLocaleString();
        },
        removeItem: (state, action) => {
            const item = action.payload;
            const itemInCart = state.value.items.findIndex(itemInCart => itemInCart.id === item.id);
            if (itemInCart !== -1) {
                if (state.value.items[itemInCart].quantity > 1) {
                    state.value.items[itemInCart].quantity -= 1;
                } else {
                    state.value.items.splice(itemInCart, 1);
                }
                state.value.total = state.value.items.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);
                state.value.updatedAt = new Date().toLocaleString();
            }
        },
        clearCart: (state) => {
            state.value.items = [];
            state.value.total = 0;
            state.value.updatedAt = new Date().toLocaleString();
        },
    },
});

export const { addItem, removeItem, setUser, clearCart } = cartSlice.actions

export default cartSlice.reducer