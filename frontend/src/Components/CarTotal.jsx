// import React, { useContext } from 'react';
// import { ShopContext } from '../Context/ShopContext'; // Ensure correct case in path
// import Title from './Title';

// const CartTotal = () => {
//   const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

//   return (
//     <div className='w-full'>
//       <div className='text-2xl'>
//         <Title text1={'CART'} text2={'TOTALS'} />
//       </div>

//       <div className='flex flex-col gap-2 mt-2 text-sm'>
//         <div className='flex justify-between'>
//           <p>Subtotal</p>
//           <p>{currency} {getCartAmount()}</p> {/* ✅ NO .toFixed() here */}
//         </div>
//         <hr />
//         <div className='flex justify-between'>
//           <p>Shipping Fee</p>
//           <p>{currency} {delivery_fee}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartTotal;

import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}</p>
        </div>
        <hr />
        <div className='flex justify-between font-semibold'>
          <p>Total</p>
          <p>{currency} {getCartAmount() + delivery_fee}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

