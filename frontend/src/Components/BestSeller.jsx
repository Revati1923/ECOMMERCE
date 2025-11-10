import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext'; // assuming products come from context
import ProductItem from './ProductItem'; // your reusable product card
import Title from './Title'; // the component you're using for the section heading

const BestSeller = () => {
  const { products } = useContext(ShopContext); // ✅ Get products from context
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5)); // limit to 5 bestsellers
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-4'>
        {bestSeller.map(item => (
      <ProductItem
      key={item._id}
      _id={item._id}
      image={item.image}
      name={item.name}
       price={item.price}
   />
     ))}
      </div>
    </div>
  );
};

export default BestSeller;
