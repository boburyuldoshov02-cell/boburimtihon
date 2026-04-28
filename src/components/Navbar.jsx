import { Link } from 'react-router-dom';
import { ShoppingBag, User, Heart, Search, Menu, X } from 'lucide-react';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { cart } = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              TH
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-800 hidden sm:inline">Tech Heim</span>
            <span className="text-lg font-bold text-gray-800 sm:hidden">TH</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm">Home</Link>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium text-sm">Products</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium text-sm">Blog</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium text-sm">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm">Contact Us</a>
            <Link to="/admin" className="text-gray-700 hover:text-blue-600 font-medium text-sm">Admin</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-gray-600 hover:text-blue-600 hidden sm:block">
              <Heart size={22} />
            </button>
            <button className="text-gray-600 hover:text-blue-600 hidden sm:block">
              <Search size={22} />
            </button>
            <button className="text-gray-600 hover:text-blue-600 hidden sm:block">
              <User size={22} />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingBag size={20} className="text-gray-600 hover:text-blue-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-gray-100">
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Blog</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
              <Link to="/admin" className="text-gray-700 hover:text-blue-600 font-medium text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Admin</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
