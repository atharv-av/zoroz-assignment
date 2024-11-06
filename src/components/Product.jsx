import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slice';
import toast from 'react-hot-toast';

const Product = ({ item }) => {

  // const [cart, setCart] = useState([])
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    console.log("cart ka data :", cart)
    toast.success("Item Added To Cart")
  }

  const removeFromCart = () => {
    dispatch(remove(item.id));
    console.log("cart ka data after removing :", cart);
    toast.error("Item Removed");
  }


  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-105 transition duration-300 ease-in gap-1 p-3 mt-10 ml-5 rounded-xl outline">
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1"
        >{item.title}</h1>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left"
        >{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className="h-[180px]">
        <img src={item.image} alt='Not found' className='w-full h-full' />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>

        <div>
          {
            cart.some((p) => p.id === item.id) ?
              (
                <button
                  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
              text-[8px] p-1 px-1 uppercase
              hover:bg-gray-700
              hover:text-white transiton duration-300 ease-in"
                  onClick={removeFromCart}>
                  Remove Item
                </button>
              ) :
              (
                <button
                  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
              text-[8px] p-1 px-1 uppercase
              hover:bg-gray-700
              hover:text-white transiton duration-300 ease-in"
                  onClick={addToCart}
                >Add To Cart</button>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default Product