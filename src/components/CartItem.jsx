import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slice';
import toast from 'react-hot-toast';

const CartItem = ({ item }) => {
    // const  cart  = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed")
    }
    return (
        <div className=' flex flex-col md:flex md:flex-row gap-5 justify-center items-center  m-5 md:w-4/5 w-3/5 p-3 text-wrap '>
            <div className=''>
                <img src={item.image} alt='Not found' className=' max-h-40 max-w-40 '></img>
            </div>
            <div className='flex flex-col justify-between gap-7'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-l'>{item.title}</h1>
                    <p className='hidden sm:block text-xs  text-gray-400 '>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                    <p className='text-green-700 font-bold'>${item.price}</p>
                    </div>
                    <MdDeleteSweep
                        onClick={removeFromCart}
                        className='text-red-500 mt-1'
                    />

                </div>
            </div>
        </div>
    )
}

export default CartItem