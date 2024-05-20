import { createSlice } from "@reduxjs/toolkit";
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { items: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { items: [] };
  }
};
const cartSlice = createSlice({
  name: "cart",
  initialState:loadState(),
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
    removeItem:(state, action)=>{
        const index= state.items.findIndex(
            (item) => item.id === action.payload.id
        );
        if (index > -1) { // only splice array when item is found
            state.items.splice(index, 1); // 2nd parameter means remove one item only
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
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
