"use client";
import React from 'react'
import { useSelector } from 'react-redux';
import { CartItem as Item} from '../../types/cart';
import Link from 'next/link';

interface RootState {
  cart: {
    cartItems: Item[];
    totalQty: number;
    totalAmount: number;
  };
}

function CartCountHeader() {
  const cartItems= useSelector((state : RootState)=>state.cart.cartItems)  
  return (
        <Link className="nav-link d-flex flex-column" href='/cart'>
        <span className="fw-bold text-warning">{cartItems.length}</span>
        <span className="d-flex justify-content-between align-items-center">
            <i className="fas fa-shopping-cart "></i>
            <span className="fw-normal me-3 ms-1"> Cart</span>
        </span>            
        </Link>
  )
}

export default CartCountHeader