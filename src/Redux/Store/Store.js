import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducers/Reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});