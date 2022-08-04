import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
 console.log("heroBanner:",heroBanner)
  return (
    
    <div className='hero-banner-container'>
    <section>
      <p className="beats-solo">{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText}</h1>
      
      <img src={urlFor(heroBanner.image)} alt="headphone" className='hero-banner-image'/>

      <div>
        <Link href={`/product/${heroBanner.slug.current}`}>
          <button type="'button">{heroBanner.buttonText}</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default HeroBanner