import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Cart from './components/Cart';
import SidebarCart from './components/SidebarCart';
import Footer from './components/Footer';
import MenServices from './components/MenServices';
import WomenServices from './components/WomenServices';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  image: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addToCart = (service: Service) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.service.id === service.id);
      if (existingItem) {
        const updatedItems = prev.map(item =>
          item.service.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setIsSidebarOpen(true);
        return updatedItems;
      }
      setIsSidebarOpen(true);
      return [...prev, { service, quantity: 1 }];
    });
  };

  const removeFromCart = (serviceId: string) => {
    setCartItems(prev => prev.filter(item => item.service.id !== serviceId));
  };

  const updateQuantity = (serviceId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(serviceId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.service.id === serviceId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.service.price * item.quantity), 0);
  };

  const handleCheckout = (navigate: (path: string) => void) => {
    setIsSidebarOpen(false);
    navigate('/cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Helper component to use navigate in non-component functions
  const SidebarCartWithNavigate = () => {
    const navigate = useNavigate();
    return (
      <SidebarCart
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        totalPrice={getTotalPrice()}
        onCheckout={() => handleCheckout(navigate)}
      />
    );
  };

  // Navigation helpers for MenServices and WomenServices
  const MenServicesWithNav = () => {
    const navigate = useNavigate();
    return (
      <MenServices
        onAddToCart={addToCart}
        onNavigate={(view: 'home' | 'booking') => {
          if (view === 'home') navigate('/');
          else if (view === 'booking') navigate('/booking');
        }}
      />
    );
  };

  const WomenServicesWithNav = () => {
    const navigate = useNavigate();
    return (
      <WomenServices
        onAddToCart={addToCart}
        onNavigate={(view: 'home' | 'booking') => {
          if (view === 'home') navigate('/');
          else if (view === 'booking') navigate('/booking');
        }}
      />
    );
  };

  // WhatsApp floating button handler
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (no +)
    const phoneNumber = '916299214255';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header
          cartItemCount={getTotalItems()}
          onCartClick={() => setIsSidebarOpen(true)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Contact />
              </>
            }
          />
          <Route
            path="/booking"
            element={
              <Booking onAddToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
                totalPrice={getTotalPrice()}
                onClearCart={handleClearCart}
              />
            }
          />
          <Route
            path="/services/men"
            element={<MenServicesWithNav />}
          />
          <Route
            path="/services/women"
            element={<WomenServicesWithNav />}
          />
        </Routes>
        <Footer />
        <SidebarCartWithNavigate />

        {/* Floating WhatsApp Button: round by default, expands on hover */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleWhatsAppClick}
            className="group flex items-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 font-semibold text-base px-4 py-4"
            aria-label="Chat with us on WhatsApp"
            style={{ boxShadow: '0 4px 24px 0 rgba(37, 211, 102, 0.3)' }}
          >
            {/* WhatsApp SVG Logo */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-200"
            >
              <path
                d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41L3.2 28.8l6.59-1.72c1.87 1.02 3.98 1.56 6.21 1.56h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm6.98 18.23c-.29.81-1.44 1.56-2.36 1.77-.63.14-1.44.2-4.14-.89-3.47-1.37-5.7-4.75-5.88-4.97-.17-.22-1.4-1.86-1.4-3.56 0-1.7.89-2.54 1.2-2.89.29-.33.63-.41.84-.41.21 0 .42.01.6.01.19 0 .45-.07.7.53.27.65.92 2.25 1 2.42.08.17.13.37.03.59-.09.22-.13.36-.26.56-.13.2-.28.44-.4.59-.13.15-.27.31-.12.6.15.29.67 1.1 1.44 1.78 1.01.9 1.87 1.18 2.16 1.31.29.13.46.11.63-.07.17-.18.72-.84.91-1.13.19-.29.38-.24.63-.14.25.1 1.6.76 1.87.9.27.14.45.21.52.33.07.12.07.7-.22 1.51z"
                fill="white"
              />
            </svg>
            {/* Animated label, hidden by default, visible on hover */}
            <span
              className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:pl-3 group-hover:pr-2 group-hover:opacity-100 opacity-0 transition-all duration-300 whitespace-nowrap"
              style={{ fontWeight: 500 }}
            >
              Chat with us
            </span>
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;