import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CartItem, CartState} from '../types/cart';



const initialState: CartState ={
    cartItems : []
}

const CartSlice=createSlice({
    name :'cart',
    initialState,
    reducers :{
    addCartItem : (state ,action:PayloadAction<CartItem>)=>{
        const product= state.cartItems.find((item) => item.id===action.payload.id);
        if(product)
            {
            product.qty=product.qty+1;
            }
        else 
            {
            state.cartItems.push({...action.payload,qty :1});
            }     
             
   },
   deleteCartItem : (state ,action:PayloadAction<CartItem>)=>{
        const product= state.cartItems.find((item) => item.id===action.payload.id);
        if(product)
            {
            product.qty=product.qty-1;
            if(product.qty===0){
              state.cartItems = state.cartItems.filter(
              (item) => item.id !== action.payload.id
              );
            }
            }
        else 
            {
            state.cartItems.push({...action.payload,qty :1});
            }     
             
   }, 
    }
});

export const {addCartItem,deleteCartItem} = CartSlice.actions

export default CartSlice.reducer;
