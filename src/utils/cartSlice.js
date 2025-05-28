import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            //state.items.pop();
            state.items = state.items.filter((item) => item.card.info.id !== action.payload.card.info.id);
        },
        clearCart: (state) => {
            console.log(current(state));
            // state.items.length = 0; or return {items: []} - Redux Toolkit says either mutate the existing state or return a new state
            state.items.length = 0; // state=[]
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;