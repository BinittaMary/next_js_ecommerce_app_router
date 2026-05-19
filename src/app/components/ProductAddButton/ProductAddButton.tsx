"use client";
import { addCartItem } from '@/app/slices/CartSlice';
import { Product } from '@/app/types/products';
import React from 'react'
import { useDispatch } from 'react-redux';

interface Props{
    product :Product;
}

function ProductAddButton(props : Props) {
  const dispatch= useDispatch();

  return (
        <button className='btn btn-outline-danger mt-2 me-2 ' onClick={()=>{
            dispatch(addCartItem({...props.product,qty:1}));             
            }}>Add To Cart
        </button> 
        
  )
}

export default ProductAddButton;