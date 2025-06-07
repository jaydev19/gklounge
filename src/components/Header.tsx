import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Scissors, Home, Calendar, Phone, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handler for Contact button
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on home, just scroll
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home, then scroll after navigation
      navigate('/', { replace: false });
      // Wait for navigation and then scroll
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay to ensure DOM is updated
    }
  };

  // Handler for Home button
  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handler for Book Now button
  const handleBookNowClick = () => {
    if (location.pathname !== '/booking') {
      navigate('/booking');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleHomeClick}
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
              onClick={handleHomeClick}
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-amber-600 hover:bg-gray-50"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </button>
            <button
              onClick={handleBookNowClick}
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:text-amber-600 hover:bg-gray-50"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Now</span>
            </button>
            <button
              onClick={handleContactClick}
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </button>
          </nav>

          <button
            onClick={onCartClick}
            className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors"
            aria-label="View Cart"
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

export default Header;