"use client";
import { Product } from '../../types/products'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from "../../store/store";

interface Probs{
    products : Product[];
}

function FilterProducts(probs : Probs) {
    let filteredList:Product[]=[];
    const searchKeyword=useSelector((state : RootState)=>state.search.searchKey);
    console.log('searchKeyword',searchKeyword);
  if (probs.products.length>0)
  {
   filteredList = probs.products.filter(
    (p : Product)=>p.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
 }   
  return (
    <>
    {filteredList.map((p: Product) => (
        <ProductCard product={p} key={p.id} />
    ))}
    </>
  )
}

export default FilterProducts