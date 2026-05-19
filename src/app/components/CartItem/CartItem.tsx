import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartItem as Item} from '@/app/types/cart';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addCartItem, deleteCartItem } from '@/app/slices/CartSlice';

interface Props{
  cartItem : Item; 
}

function CartItem(props:Props) {
    const dispatch= useDispatch();
    const cartItem =props.cartItem;
   
  return (
    <div>
          <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
                <Image src={cartItem.images[0]} alt="Product Image" className="img-fluid rounded-3 cart-image " width={100} height={100} style={{ width: "100%" }}/>
            </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                   <h6 className="text-muted">{cartItem.title}</h6>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 ">
                      <h6 className="mb-0">₹ {cartItem.price} </h6>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2  d-flex align-items-center">
                      <i className="fa-regular fa-plus me-2" onClick={()=>{
                         dispatch(addCartItem(cartItem));             
                      }}></i>
                      <h6 className="mb-0 fs-5  me-2">{cartItem.qty} </h6>
                      <i className="fa-solid fa-minus"  onClick={()=>{
                         dispatch(deleteCartItem(cartItem)); 
                      }}></i>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2">
                     <h6 className="mb-0">₹ {cartItem.price*cartItem.qty} </h6> 
                </div>
          </div>
        <hr/>
    </div>
  )
}

export default CartItem;