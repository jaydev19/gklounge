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
                <Hero onBookNow={() => window.location.assign('/booking')} />
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
        </Routes>
        <Footer />
        <SidebarCartWithNavigate />
      </div>
    </Router>
  );
};

export default App;