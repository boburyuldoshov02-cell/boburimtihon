import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Star } from 'lucide-react';

const HomePage = () => {
  const { products, loading } = useContext(AppContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Kategoriyalar
  const categories = [
    { name: 'Accessories', icon: '🎧' },
    { name: 'Camera', icon: '📷' },
    { name: 'Laptop', icon: '💻' },
    { name: 'Smart Phone', icon: '📱' },
    { name: 'Gaming', icon: '🎮' },
    { name: 'Smart Watch', icon: '⌚' },
  ];

  const newProducts = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 mb-8 sm:mb-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Tech Heim</h1>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              <span className="text-orange-400">Join the</span> digital revolution
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold transition-colors text-sm sm:text-base">
              Explore Now
            </button>
          </div>
          <div className="hidden sm:block w-full md:w-auto">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop"
              alt="Laptop"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-lg transform md:rotate-12 shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center"
            >
              <div className="text-2xl sm:text-3xl mb-2">{cat.icon}</div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Carousel */}
      <div className="bg-blue-600 py-6 sm:py-8 mb-8 sm:mb-12 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 sm:gap-4 pb-4">
            {newProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-36 sm:w-48 bg-white rounded-lg p-3 sm:p-4 shadow-lg"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-32 sm:h-40 object-cover rounded-lg mb-2"
                />
                <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">{product.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* New Products */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">New Products</h2>
            <a href="#" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base">
              View all <ChevronRight size={20} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <div className="bg-white rounded-lg p-6 flex items-center justify-center">
              <span className="text-gray-400 text-center">More products</span>
            </div>
          </div>
        </section>

        {/* Promo Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* iPhone Banner */}
          <div className="bg-gradient-to-r from-gray-700 to-teal-400 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm text-teal-100 mb-2">iPhone 15 Series</p>
              <h3 className="text-2xl font-bold mb-2">It feels good to be the first</h3>
              <p className="text-sm text-gray-100 mb-4 max-w-xs">
                Get latest 5G enabled smartphone experience with the best deal.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Register Now
              </button>
            </div>
          </div>

          {/* PS5 Banner */}
          <div className="bg-gradient-to-r from-blue-700 to-orange-400 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Play Station 5</h3>
              <p className="text-sm text-gray-100 mb-4">
                Digital Edition - 2 TB
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Best Sellers */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Best Sellers</h2>
            <a href="#" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base">
              View all <ChevronRight size={20} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <div className="bg-white rounded-lg p-6 flex items-center justify-center">
              <span className="text-gray-400 text-center">More products</span>
            </div>
          </div>
        </section>

        {/* Top Brands */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Top Brands</h2>
          <div className="bg-white rounded-lg p-6 sm:p-12 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 items-center justify-items-center">
              {['Apple', 'Sony', 'Samsung', 'Canon', 'Huawei', 'Lenovo'].map((brand, idx) => (
                <div key={idx} className="text-2xl font-bold text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Watch Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-800 to-orange-500 rounded-lg p-12 text-white flex justify-between items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">SMART WATCH</h3>
              <p className="text-gray-200 mb-6">Various designs and brands</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Explore
              </button>
            </div>
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
              alt="Smart Watch"
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Blog Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Blogs</h2>
            <a href="#" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base">
              View all <ChevronRight size={20} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Meta Platforms plans to release first',
                desc: 'The parent company of Facebook Meta has released a new AR/VR device.',
                image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6f0?w=300&h=200&fit=crop'
              },
              {
                title: '5 Things You Probably Didn\'t Know About Headphones',
                desc: 'Apple has been known for high-quality audio products and today...',
                image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=200&fit=crop'
              },
              {
                title: 'Analyzing the August 17th Bitcoin Price Drop',
                desc: 'Bitcoin is known for its volatile price movement, but the recent...',
                image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=200&fit=crop'
              }
            ].map((blog, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{blog.title}</h3>
                  <p className="text-sm text-gray-600">{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Policy</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">📍 123 Main Street, Anytown USA</p>
              <p className="text-gray-400 text-sm">📧 hello@techheim.com</p>
              <div className="flex gap-4 mt-4">
                {['f', 't', 'ig', 'in'].map((icon, idx) => (
                  <a key={idx} href="#" className="text-gray-400 hover:text-white transition">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <hr className="border-gray-700 mb-8" />
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <p>© 2024 Tech Heim. All rights reserved.</p>
            <p>Made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
