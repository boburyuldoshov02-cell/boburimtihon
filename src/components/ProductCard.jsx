import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const averageRating = product.rating || 4.5;
  const discount = product.discountPercentage || 0;

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100 h-48">
          <img
            src={product.thumbnail || 'https://via.placeholder.com/300x200?text=No+Image'}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
              -{Math.round(discount)}%
            </div>
          )}
          <button 
            className="absolute top-3 left-3 bg-white hover:bg-red-100 text-red-500 p-2 rounded-full transition-colors"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Heart size={18} fill="currentColor" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2 text-sm">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">({averageRating})</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-xs mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Price and Button */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-lg font-bold text-gray-900">${product.price}</p>
              {discount > 0 && (
                <p className="text-xs text-gray-500 line-through">
                  ${(product.price / (1 - discount / 100)).toFixed(2)}
                </p>
              )}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
              title="Add to cart"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
