import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

const selectorCartReducer = (state): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectorCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectorCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
