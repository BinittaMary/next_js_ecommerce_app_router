// cartSelectors.ts
import {  } from "../store/store";
import { CartItem } from "../types/cart"

export const selectCartItems = (state: RootState) =>
  state.cart.cartItems

export const selectTotalQty = (state: RootState) =>
  state.cart.cartItems.reduce(
    (total: number, item: CartItem) => total + item.qty,
    0
  )

export const selectTotalAmount = (state: RootState) =>
  state.cart.cartItems.reduce(
    (total: number, item: CartItem) =>
      total + item.qty * item.price,
    0
  )