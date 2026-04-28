import { Mail, Globe, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tech Heim</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for all things technology. Join the digital revolution today.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2"><MapPin size={16} /> 123 Main Street, Anytown, USA</p>
              <p className="flex items-center gap-2"><Phone size={16} /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-2"><Mail size={16} /> TechHeimSupport@gmail.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="E-mail Address"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:border-blue-500"
              />
              <Mail className="absolute right-3 top-2.5 text-gray-500" size={18} />
            </div>
            <div className="flex gap-4 mt-6">
              <Globe className="text-gray-400 hover:text-blue-500 cursor-pointer" size={20} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2023 Tech Heim. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Cookie Settings</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms and Conditions</a>
            <a href="#" className="hover:text-white">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
