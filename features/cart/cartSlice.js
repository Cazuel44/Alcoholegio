import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
       value:{
        user: 'userLoged',
        updatedAt: new Date().toLocaleString(),
        total: 0,
        items: []
       },
    },
    reducers: {
        addItem: (state, action)=>{
            const item = action.payload;
            // Verificar si el producto existe en el carrito
            const itemInCart = state.value.items.findIndex(itemInCart => itemInCart.id === item.id);
            if(itemInCart !== -1){
                // Si el producto ya está en el carrito, aumentar la cantidad
                state.value.items[itemInCart].quantity++;
            } else{
                // Si el producto no está en el carrito, añadirlo con cantidad 1
                state.value.items.push({ ...item, quantity: 1 });
            }
            // Actualizar el total sumando el precio del producto por su cantidad
            state.value.total = state.value.items.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);
            state.value.updatedAt = new Date().toLocaleString(); // Actualizar la fecha y hora
        },
        removeItem:(state, action)=> {
            const item = action.payload;
            const itemInCart = state.value.items.findIndex(itemInCart => itemInCart.id === item.id);
            if (itemInCart !== -1) {
                // Si la cantidad es mayor que 1, disminuir la cantidad
                if (state.value.items[itemInCart].quantity > 1) {
                    state.value.items[itemInCart].quantity -= 1;
                } else {
                    // Si la cantidad es 1, eliminar el artículo del carrito
                    state.value.items.splice(itemInCart, 1);
                }
                // Actualizar el total restando el precio del producto
                state.value.total = state.value.items.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);
                state.value.updatedAt = new Date().toLocaleString(); // Actualizar la fecha y hora
            }    
        },
    },
});

export const {addItem, removeItem} = cartSlice.actions

export default cartSlice.reducer