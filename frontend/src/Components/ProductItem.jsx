
// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import {Link} from 'react-router-dom'

// const ProductItem = ({_id,image,name,price}) => {
//     const{currency}=useContext(ShopContext);

//   return (
//     <Link to={`/product/${_id}`} className='text-gray-700 cursor-pointer'>
//         <div className='overflow-hidden'>
//             <img  className='hover:scale-110 transition ease-in-out' src={image[0]} alt=""/>
//         </div>
//         <p className='pt-3 pb-1 text-sm'>{name}</p>
//         <p className='text-sm font-medium'>{currency}{price}</p>
      
//     </Link>
//   )
// }

// export default ProductItem

import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ _id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer block">
      <div className="overflow-hidden rounded-lg border">
        <img
          src={image && image[0] ? image[0] : ''}
          alt={name}
          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm truncate">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
