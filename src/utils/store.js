import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const cartMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  saveState(storeAPI.getState().cart);
  return result;
};

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});

export default store;
