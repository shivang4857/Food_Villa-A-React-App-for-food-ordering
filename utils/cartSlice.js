import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },

    reducers:{
        addItems: (state ,action) => {   // the reducer have call function  i.e when we give add iteam action it will calll bacl function
            state.items.push(action.payload)
        } ,

        removeItems: (state ,action) => {
            state.items.pop();

        },

        clearCart : (state) => {
            state.items= [] ;
        },
    },
})

export const {addItems, removeItems ,clearCart} = cartSlice.actions;

export default cartSlice.reducer;