import { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ShoppingCart, Heart, Star, ChevronLeft, Minus, Plus } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  const averageRating = product.rating || 4.5;
  const discount = product.discountPercentage || 0;
  const originalPrice = discount > 0 ? (product.price / (1 - discount / 100)).toFixed(2) : product.price;

  return (
    <div className="bg-white min-h-screen py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-1 mb-6 sm:mb-8 text-sm sm:text-base">
          <ChevronLeft size={20} />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Product Image */}
          <div>
            <div className="bg-gray-100 rounded-lg p-8 mb-6">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            {product.images && product.images.length > 0 && (
              <div className="flex gap-4">
                {product.images.slice(0, 4).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${product.title} ${idx + 1}`}
                    className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-200 hover:border-blue-600 transition"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            {/* Title and Rating */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600">({averageRating} stars)</span>
              <span className="text-green-600 font-semibold">In Stock</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                {discount > 0 && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${originalPrice}</span>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {Math.round(discount)}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Product Info */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-semibold text-gray-900">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Brand:</span>
                <span className="font-semibold text-gray-900">{product.brand || 'Premium Brand'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">SKU:</span>
                <span className="font-semibold text-gray-900">{product.sku || 'N/A'}</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-700 font-semibold">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 transition"
                >
                  <Minus size={20} />
                </button>
                <span className="px-6 py-2 font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 transition"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart size={24} />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-6 py-4 rounded-lg font-semibold transition-colors border-2 ${
                  isWishlisted
                    ? 'bg-red-100 border-red-600 text-red-600'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-red-600'
                }`}
              >
                <Heart size={24} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
              <div className="flex gap-3">
                <span className="text-2xl">📦</span>
                <div>
                  <p className="font-semibold text-gray-900">Free Shipping over 100$</p>
                  <p className="text-sm text-gray-600">Orders over $100 get free shipping</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <p className="font-semibold text-gray-900">Easy Return</p>
                  <p className="text-sm text-gray-600">30 days money back guarantee</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold text-gray-900">24/7 Customer Support</p>
                  <p className="text-sm text-gray-600">We are here to help you anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.slice(0, 3).map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src={p.thumbnail} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2">{p.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">${p.price}</span>
                    <button
                      onClick={() => addToCart(p)}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
