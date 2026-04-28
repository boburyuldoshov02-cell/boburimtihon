import { Link } from 'react-router-dom';
import { ShoppingBag, User, Home } from 'lucide-react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { cart } = useContext(AppContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <ShoppingBag />
          <span>MyStore</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
            <Home size={20} />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-1 text-gray-600 hover:text-blue-600 relative">
            <ShoppingBag size={20} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/admin" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
            <User size={20} />
            <span className="hidden sm:inline">Admin</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
