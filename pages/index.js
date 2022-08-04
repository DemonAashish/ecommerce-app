import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner
        product={products[0]}
        heroBanner={bannerData.length && bannerData[0]}
      />

      <div className="products-heading">
        <h2>HELOOOOOOOOOOOOO</h2>
        <p> hellolfkjldas jdl dajf dkjfai k kdfj</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerbanner={bannerData && bannerData[0]} />
    </>
  );
};

//fetching data
export const getServerSideProps = async () => {
  // fetching products dat
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerquery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerquery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
