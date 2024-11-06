import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const cart=useSelector((state)=>state.cart);
  return (
    <div className=''>
      <nav className='bg-slate-900 sm:flex sm:justify-between sm:items-center h-10 w-full rounded-md fixed top-0 z-10 '>
        <NavLink to='/'>
          <div className='max-w-[95px] max-h-[65px] sm:ml-[100px] hidden sm:inline-flex'>
            <img src='https://fbcd.co/images/products/71a0cf367add375691cb38e3b9603d56_resize.png' alt='Not found'
              className='' />
          </div>
        </NavLink>


        <div className='flex justify-between w-full sm:w-0 sm:mr-[200px] gap-5 '>
          <NavLink to='/'>
            <p className='text-white text-xl ml-10 sm:mt-0 mt-1 sm:ml-0 text-center font-medium'>Home</p>
          </NavLink>

          <NavLink to='/cart'>
            <div className='relative'>
              <FaCartShopping size={25} className='text-white mt-2 sm:mt-[3px] mr-10 sm:mr-0' />
              {
                cart.length > 0 &&
                <span
                  className="absolute -top-1 right-10 sm:-right-1 bg-green-600 text-xs w-5 h-5 flex
              justify-center items-center animate-bounce rounded-full text-white"
                >{cart.length}</span>
              }
            </div>
          </NavLink>

        </div>




      </nav>

    </div>
  )
}

export default Navbar