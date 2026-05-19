"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from '../components/CartItem/CartItem';
import {  useSelector } from 'react-redux';
import { selectCartItems, selectTotalAmount, selectTotalQty } from '../selectors/CartSelectors';
import { CartItem as Item} from '../types/cart';



function Cart() {  
const cartData =useSelector(selectCartItems)  
const totalQty=useSelector(selectTotalQty); 
const totalAmount=useSelector(selectTotalAmount); 
   return (
    <div className='container-fluid mb-5'> 
      <div className='row mb-4'>
        <div className='col-sm-10 col-lg-10 bg-light'>
           <h3 className="fw-bold mb-5 mt-2 pt-1">Shopping Cart</h3>
           <hr/>  
           {(cartData.length>0)?
            
            cartData.map((ci : Item)=>{
              return <CartItem cartItem={ci} key={ci.id}/>
            })
            :
            <div><h4 className='text-danger'>No item added to cart!!!</h4></div>
          }
        </div>

        <div className='col-sm-2 bg-light  col-lg-2'>
          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
          <hr className="my-4"/>
          <div className="d-flex justify-content-between mb-4">
            <h6>Items</h6>
            <h6>{cartData.length}</h6>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <h6>Total Quantity</h6>
            <h6>{totalQty.toFixed(0)}</h6>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <h6>Total Amount</h6>
            <h6>₹ {totalAmount.toFixed(2)}</h6>
          </div>
          <hr className="my-4"/>
            
        </div>
      </div>  
    </div>
  )
}

export default Cart;