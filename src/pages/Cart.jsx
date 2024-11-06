import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmptyCart';


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0));
  }, [cart])

  return (
    <div className='flex'>
      <div className='mt-12 mx-7  flex justify-center items-center'>
        {
          cart.length !== 0 ?
            (
              <div className='flex flex-col md:flex md:flex-row justify-betweem items-start w-full h-full mx-3  '>
                <div className=' w-full items-center md:w-3/4 flex flex-col gap-5 my-3 mx-3  '>
                  {
                    cart.map((item, index) => {
                      return (<CartItem key={item.id} item={item} index={index} />)
                    })
                  }
                </div>
                <div className=' hidden md:flex flex-col bg-slate-100 rounded m-3 w-1/4 h-72 justify-between  '>
                  <div className='flex flex-col gap-5 mx-3'>
                    <h1 className='font-semibold text-lg text-gray-600'>Order Summary</h1>
                    <p className='flex justify-between text-sm text-gray-400'>Total Items <span>{cart.length}</span></p>
                    <p className='flex justify-between text-sm text-gray-400'>Shipping <span>FREE!</span></p>
                  </div>
                  <div>
                    {/* <input
                  placeholder='Enter Coupon Code'
                  type='text'
                  ></input> */}
                  </div>
                  <div className='mt-6'>
                    <p className='flex justify-between text-gray-500 text-md mx-3 font-semibold'>Total <span className='font-bold text-green-600'>${Math.floor(totalAmount)}</span></p>
                  </div>
                  <button className='bg-green-600 text-black text-md text-center font-semibold m-3 rounded-md '>Checkout</button>
                </div>
                <footer className='bg-slate-100 flex justify-between items-center md:hidden w-full rounded-md mx-3 my-3'>
                  
                    <h1 className='font-semibold text-md text-gray-600 mx-3 '>Order Summary</h1>
                    <button className='bg-green-600 text-black text-sm text-center p-1 font-semibold m-3 rounded-full '>Checkout</button>
                    <p className='text-gray-500 text-sm font-semibold flex gap-1 mx-3'>Total: <span className='font-bold text-green-600 text-md'>${Math.floor(totalAmount)}</span></p>
                </footer>
              </div>
            ) :
            (
              <div className='flex justify-center w-[95vw] my-4 mr-7'>
                <EmptyCart/>
              </div>
            )
        }

      </div>

    </div>
  )
}

export default Cart