import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { products, loading } = useContext(AppContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="mb-12 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row items-center">
        <div className="p-8 md:p-16 md:w-1/2">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">Tech Heim</h1>
          <p className="text-2xl text-gray-600 mb-8 italic">
            "Join the <span className="text-orange-500 font-bold">digital revolution</span>"
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
            Explore More
          </button>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800"
            alt="Hero Laptop"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Category Icons (Mockup based on image) */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
        {['Accessories', 'Camera', 'Laptop', 'Smart Phone', 'Gaming', 'Smart Watch'].map((cat) => (
          <div key={cat} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
            <div className="w-16 h-16 bg-gray-50 rounded-lg mb-2 flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <span className="text-xs font-medium text-gray-600">{cat}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 text-gray-800">New Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
