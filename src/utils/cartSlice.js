import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      // vanilla(older) Redux => Don't mutate state, returning was mandetory
      //   const newState = [...state];
      //   newState.items.push(action.payload);
      //   return newState;

      //   Redux Toolkit uses immer behind the scenes
      //   We Have to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = {items:["Object"]}
    clearCart: (state) => {
      // RTK - either Mutate the existing state or return a new state
      // state.items.length = 0;
      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
