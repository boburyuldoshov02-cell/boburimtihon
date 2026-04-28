import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
