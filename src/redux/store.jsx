import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";

export default configureStore({
  reducer: {
    shopCart: cartReducer,
  },
});
