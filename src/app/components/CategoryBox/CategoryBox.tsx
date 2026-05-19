import React from 'react';
import './CategoryBox.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Category } from '@/app/types/products';
import Image from 'next/image';

interface Props {
  category: Category;
}
function CategoryBox(props: Props) {
  return (
        
        <div className="category-box">
           <Image alt='Category Image' src={props.category.url}  className="category-box-image" width={100} height={100} unoptimized/>
        </div>
  )
}


export default CategoryBox
