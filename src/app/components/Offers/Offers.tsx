import { Offer } from '@/app/types/Products';
import React from 'react'
import OfferBox from '../OfferBox/OfferBox';

interface Props {
  offers: Offer[];
}

function Offers(props : Props) {
  return (
         <>
         {
            props.offers.map((p)=>{
            return <OfferBox offer={p} key={p.id} />
            })
         }          
         </>
  )
}

export default Offers