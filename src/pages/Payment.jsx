import React, { useState } from 'react';
import { CreditCard, Calendar, Lock } from 'lucide-react';

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-16 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className="font-semibold">Payment Successful!</div>
          <div className="text-sm">Your payment has been processed successfully.</div>
        </div>
      )}

      {/* Payment Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment Details
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Card Number */}
          <div className="space-y-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                required
                maxLength={19}
              />
              <CreditCard className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Expiry and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                  maxLength={5}
                />
                <Calendar className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="cvv"
                  placeholder="123"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                  maxLength={3}
                />
                <Lock className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Cardholder Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Cardholder Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors
              ${loading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Pay Now'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;