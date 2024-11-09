import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import logo from '../logo.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full py-4 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation */}
        <div className="flex items-center space-x-6">
          <a 
            href="/" 
            className={`text-sm hover:text-gray-600 ${
              location.pathname === '/' ? 'font-bold border-b-2 border-black' : ''
            }`}
          >
            Home
          </a>
          <a href="#" className="text-sm hover:text-gray-600">
            Products
          </a>
          <a href="#" className="text-sm hover:text-gray-600">
            Categories
          </a>
          <a href="#" className="text-sm hover:text-gray-600">
            Sale
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center flex-1">
          <img
            src={logo}
            alt="brofa"
            className="h-14 w-auto"
          />
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <span className="text-sm text-gray-700">Search</span>
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingBag className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
