"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

interface Props{
    id : number;
}

function ProductDetailButton(props : Props) {
    const router = useRouter();
    // console.log('Product ID',props.id);
  return (
    <button className='btn btn-outline-success mt-2' onClick={()=> {
       router.push(`/products/${props.id}`); 
    }}>See in Detail
    </button> 
  )
}

export default ProductDetailButton