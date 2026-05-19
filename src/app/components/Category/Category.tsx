"use client";
import React from 'react';
import {Category as category} from '../../types/Products';
import CategoryBox from '../CategoryBox/CategoryBox';

interface Props {
  categories: category[];
}
function Category(props : Props) {
  return (
          <>
          {
            props.categories.map((p)=>{
              return <CategoryBox category={p} key={p.id}/>
            })
          }
          </>

  )
}

export default Category;