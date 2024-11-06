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
  
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const output = await res.json();
      console.log(output);
      setProductData(output);
    }
    catch (error) {
      console.log("data fetch nahi ho paa raha ");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="max-w-[1440px] mx-auto px-4 pt-10">
      {/* Category Images Section */}
      <div className='flex flex-wrap justify-center items-center gap-4 my-12'>
        <img src={womenImage} className='w-40 h-auto object-contain' alt='Women Category'/>
        <img src={menImage} className='w-40 h-auto object-contain' alt='Men Category'/>
        <img src={kidsImage} className='w-40 h-auto object-contain' alt='Kids Category'/>
        <img src={homeImage} className='w-40 h-auto object-contain' alt='Home Category'/>
        <img src={techImage} className='w-40 h-auto object-contain' alt='Tech Category'/>
      </div>

      {/* Banner Image */}
      <div className='w-full mb-12'>
        <img 
          src={bgImage} 
          alt='Banner' 
          className='w-full h-auto object-cover'
        />
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="min-h-[70vh] flex justify-center items-center">
          <Spinner/>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
          {productData.map((item) => (
            <div key={item.id} className="flex justify-center">
              <Product item={item}/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home