import React from 'react';
import { Scissors, ShoppingBag, Home, Calendar, Phone } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'booking' | 'cart';
  onNavigate: (view: 'home' | 'booking' | 'cart') => void;
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, cartItemCount, onCartClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-amber-500 p-2 rounded-lg">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">GK Lounge</h1>
              <p className="text-xs text-gray-500">Premium Hair Studio</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'home'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => onNavigate('booking')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'booking'
                  ? 'text-amber-600 bg-amber-50'
                  : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Book Now</span>
            </button>
            <a
              href="#contact"
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </nav>

          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
          >
            <ShoppingBag className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header