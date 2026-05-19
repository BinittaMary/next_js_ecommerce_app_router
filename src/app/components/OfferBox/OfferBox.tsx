import { Offer } from '@/app/types/Products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface Props {
  offer: Offer;
}

function OfferBox(props : Props) {
  return (
    <div>
        <Link href='/products'>
          <Image src={props.offer.url} alt="Offer Image" width={250} height={250}  style={{ display: "block" }} />
        </Link>
    </div>
  )
}

export default OfferBox;