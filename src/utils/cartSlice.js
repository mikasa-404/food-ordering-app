import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //find in items=>if already there increase quantity for that item
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.items.push(action.payload);
        action.payload.qty++;
      }
    },
    increaseQuantity: (state, action) => {
      const itemFound = state.items.find(
        (item) => item.id === action.payload.id
      );
      itemFound.qty++;
    },
    decreaseQuantity: (state, action) => {
      const itemFound = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemFound.qty == 1) itemFound.qty = 1;
      else itemFound.qty--;
    },

    // removeItem: (state, action) => {
    //   state.items.pop();
    // },
    clearCart: (state, action) => {
      state.items = [];
      state.totalItems = [];
    },
    getTotal: (state, action) => {
      const price=0;
      state.totalItems = [];
    },
  },
});

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
