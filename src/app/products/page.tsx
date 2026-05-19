import React from 'react'
import FilterProducts from '../components/FilterProducts/FilterProducts';
import { getProducts } from '../services/ProductsServices';



async function  Products() {
  const products = await getProducts();
  console.log('fetch product', products);
  return (
    <div className="container-fluid bg-light py-4">
      <div className="row">
         <FilterProducts products={products}  />
      </div>
    </div>
  );
}


export default Products;