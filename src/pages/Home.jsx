import React, { useEffect, useState } from 'react'
import bgImage from '../images/home image.png'
import womenImage from '../images/women.png'
import menImage from '../images/men.png'
import kidsImage from '../images/kids.png'
import homeImage from '../images/home.png'
import techImage from '../images/tech.png'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  
  const [loading,setLoading]=useState(false);
  const [productData,setProductData]=useState([]);

  const fetchData = async () =>{
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const output = await res.json();
      console.log(output);
      setProductData(output);

    }
    catch (error){
      console.log("data fetch nahi ho paa raha ");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>

      <div className='flex justify-center items-center my-12 w-full '>
        <img src={womenImage} className='w-1/6 h-auto max-w-xs m-2' alt='Not found'/>
        <img src={menImage} className='w-1/6 h-auto max-w-xs m-2' alt='Not found'/>
        <img src={kidsImage} className='w-1/6 h-auto max-w-xs m-2' alt='Not found'/>
        <img src={homeImage} className='w-1/6 h-auto max-w-xs m-2' alt='Not found'/>
        <img src={techImage} className='w-1/6 h-auto max-w-xs m-2' alt='Not found'/>
      </div>

       <div className='mt-10'>
        <img src={bgImage} alt='Not found'/>
       </div>

       {
        loading ? (
          <Spinner/>
        ):
        (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 max-w-6xl p-1 mx-auto space-y-10 space-x-5 mr-5 min-h-[70vh]">
            {
              productData.map((item)=>{
                return(<Product key={item.id} item={item}/>)
              })
            }
          </div>

        )

       }

    </div>
  )
}

export default Home