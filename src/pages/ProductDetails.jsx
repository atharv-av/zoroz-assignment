import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slice";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetchProductData();
  }, [id]);

  const fetchProductData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching product details:", error);
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    dispatch(add(product));
    toast.success("Item Added To Cart");
  };

  const handleRemoveFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item Removed");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl text-gray-700">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Image */}
          <div className="mb-8 lg:mb-0">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[400px] object-contain"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {product.title}
              </h1>
              <p className="mt-4 text-3xl font-bold text-green-600">
                ${product.price}
              </p>
            </div>

            <div className="py-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-semibold">Category:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {product.category}
                </span>
              </div>

              <div className="mt-6 flex items-center space-x-4">
                <span className="text-gray-700 font-semibold">Rating:</span>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-600">
                    {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
              </div>

              <div className="mt-8">
                {cart.some((p) => p.id === product.id) ? (
                  <button
                    onClick={handleRemoveFromCart}
                    className="w-full bg-red-600 text-white py-3 px-8 rounded-lg font-semibold
                    hover:bg-red-700 transition duration-300 ease-in-out"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-gray-900 text-white py-3 px-8 rounded-lg font-semibold
                    hover:bg-gray-800 transition duration-300 ease-in-out"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
