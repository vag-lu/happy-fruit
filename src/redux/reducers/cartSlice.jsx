import { createSlice } from "@reduxjs/toolkit";
import { removeFromArray } from "../../utils/utilFunctions";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    add: (state, action) => {
      let existingItem = state.cart.find(
        (intemInCart) => intemInCart.id === action.payload.id
      );
      if (existingItem) {
        let newCart = removeFromArray(state.cart, existingItem);
        newCart.push(action.payload);
        state.cart = newCart;
      } else {
        state.cart.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.cart = removeFromArray(state.cart, action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
