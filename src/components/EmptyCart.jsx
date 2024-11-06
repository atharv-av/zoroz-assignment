import React from 'react'
import { NavLink } from 'react-router-dom'

const EmptyCart = () => {
    return (
        
            <div className='border-2 border-gray-400 rounded-md '>
                
                <div className=' flex flex-col justify-center items-center gap-4 m-5 '>
                    <img
                        src='https://www.smartdrugsx.com/assets/img/empty-cart1.png'
                        alt='Not found'
                        className='w-48'
                    ></img>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className=' text-xl font-semibold'>Empty Cart</h1>
                        <p className='text-gray-400 text-md'>Looks like you haven't made </p>
                        <p className='text-gray-400 text-md'>your choice yet... </p>
                    </div>

                    <NavLink to='/'>
                        <button className='bg-green-700 text-black rounded-md p-1 font-semibold w-48 '>Shop Now</button>
                    </NavLink>

                    <div className='flex flex-col items-center justify-center '>
                        <p className='text-green-500 text-sm font-light'>Check What we've got for you</p>
                        <p className='text-gray-400 text-sm'>and get it swished!</p>
                    </div>
                </div>
            </div>
        
    )
}

export default EmptyCart