import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <img
        src={product.thumbnail || 'https://via.placeholder.com/300x200?text=No+Image'}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 truncate">{product.title}</h3>
        <p className="text-gray-500 text-sm h-10 overflow-hidden line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
            title="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
