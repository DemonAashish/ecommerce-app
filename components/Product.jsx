import React from 'react'
import Link from "next/link"
import {urlFor} from '../lib/client'

const Product = ({product}) => {
  // console.log("PODUCT p",product)
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>

        <div className="product-tag">
          <img src={urlFor(product.image && product.image[0])} alt={product.name}
          height={250}
          width= {250}
          
          className="product-image"
          />
          <p className='product-name'>{product.name}</p>
          <p className='product-price'>Rs.{product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product