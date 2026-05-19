import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ProductCard/ProductCard.css';
import { Product } from '@/app/types/Products';
import Image from 'next/image';
import ProductDetailButton from '../ProductDetailButton/ProductDetailButton';
import ProductAddButton from '../ProductAddButton/ProductAddButton';

interface Props {
  product: Product;
}

function ProductCard(props : Props) {
        const prod=props.product;
        console.log('prod', prod);
        const shade = Math.round(prod.rating?.rate || 0);
        const unshade = 5 - shade;
        function createRating(count : number, fill : string) {
                const stars = [];
                for (let i = 0; i < count; i++) {
                    if (fill === 'star') {
                        stars.push(<i key={'s'+i} className="fas fa-star text-warning"></i>);
                    } else {
                        stars.push(<i key={'e'+i} className="far fa-star text-warning"></i>);
                    }
                }
                return stars; 
            }
                      
        return ( 
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4 ">
                <div className="card card-dtl ">
                    <Image src={prod.image} alt={"Product Image"} className="card-img-top card-image pt-2" width={100} height={100} />
                    <div className="card-body text-center ">
                        <h4 className="card-title fw-bold category text-capitalize">{prod.category}</h4>
                        <p className="card-text lh-1">{prod.title} </p>
                        <div className="text-center">
                            <span>
                                {createRating(shade,'star')}
                                {createRating(unshade,'empty-star')}
                            </span>
                        </div>
                        <div className='lh-5'> <span className='card-title text-dark fw-bold ms-1 '>₹ {prod.price} </span></div>
                        <div className='d-flex'>
                            <ProductAddButton product={prod}/>                         
                            <ProductDetailButton id={prod.id} />
                         </div>
                    </div>
                </div>
                </div>
        );
    }

export default ProductCard