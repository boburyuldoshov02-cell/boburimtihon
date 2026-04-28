import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Trash2, ShoppingBag, Plus, Minus, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(AppContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = (parseFloat(total) + parseFloat(tax)).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={48} className="text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Link to="/" className="flex items-center gap-2 text-blue-600 hover:underline mb-6 sm:mb-8 text-sm sm:text-base">
          <ChevronLeft size={20} />
          Continue Shopping
        </Link>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Shopping Cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-gray-700">
                  <div className="col-span-2">Product</div>
                  <div>Price</div>
                  <div>Qty</div>
                  <div className="text-right">Total</div>
                </div>
              </div>

              <ul className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <li key={item.id} className="p-6 hover:bg-gray-50 transition">
                    <div className="grid grid-cols-5 gap-4 items-center">
                      {/* Product Info */}
                      <div className="col-span-2 flex gap-4">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-gray-900 font-semibold">${item.price.toFixed(2)}</div>

                      {/* Quantity */}
                      <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-3 font-semibold text-gray-700 w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Total and Remove */}
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition p-2"
                          title="Remove from cart"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:sticky lg:top-24">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (10%)</span>
                  <span className="font-semibold">${tax}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between">
                  <span className="text-lg font-bold text-gray-900">Grand Total</span>
                  <span className="text-2xl font-bold text-gray-900">${grandTotal}</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors mb-3">
                Proceed to Checkout
              </button>

              <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 rounded-lg transition-colors">
                Continue Shopping
              </button>

              {/* Info Box */}
              <div className="bg-blue-50 rounded-lg p-4 mt-6 text-sm text-gray-700">
                <p className="mb-2">
                  <span className="font-semibold">✓ Free Shipping</span> on orders over $100
                </p>
                <p>
                  <span className="font-semibold">✓ 30-day</span> money back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
