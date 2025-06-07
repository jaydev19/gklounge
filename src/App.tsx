import React, { useState } from 'react';
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

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'booking' | 'cart'>('home');
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

  const handleCheckout = () => {
    setIsSidebarOpen(false);
    setCurrentView('cart');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'booking':
        return <Booking onAddToCart={addToCart} />;
      case 'cart':
        return (
          <Cart
            items={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
            totalPrice={getTotalPrice()} onClearCart={function (): void {
              throw new Error('Function not implemented.');
            } }          />
        );
      default:
        return (
          <>
            <Hero onBookNow={() => setCurrentView('booking')} />
            <Services />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentView={currentView}
        onNavigate={setCurrentView}
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsSidebarOpen(true)}
      />
      {renderCurrentView()}
      <Footer />
      
      <SidebarCart
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        totalPrice={getTotalPrice()}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;