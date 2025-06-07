import React, { useState } from 'react';
import { Minus, Plus, Trash2, Calendar, CreditCard, CheckCircle } from 'lucide-react';
import { CartItem } from '../App';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (serviceId: string, quantity: number) => void;
  onRemove: (serviceId: string) => void;
  totalPrice: number;
  onClearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemove, totalPrice, onClearCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `📟 *New Booking Request*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🗓 *Date:* ${formData.date}\n` +
      `⏰ *Time:* ${formData.time}\n` +
      `📝 *Notes:* ${formData.notes || 'N/A'}\n\n` +
      `🛍️ *Services:*\n` +
      items.map(item =>
        `- ${item.service.name} × ${item.quantity} = ₹${item.service.price * item.quantity}`
      ).join('\n') +
      `\n\n💰 *Total:* ₹${totalPrice.toFixed(2)}`
    );

    const phoneNumber = '916299214255'; // Replace with your number (no +)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
    setShowCheckout(false);
    setBookingConfirmed(true);
    onClearCart();
  };

  if (bookingConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center p-8">
        <CheckCircle className="h-16 w-16 text-green-500 animate-bounce mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600 max-w-md">
          We've sent your booking details to our WhatsApp. Our team will reach out to you shortly.
        </p>
        <button
          onClick={() => setBookingConfirmed(false)}
          className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition"
        >
          Back to Services
        </button>
      </div>
    );
  }

  if (items.length === 0 && !showCheckout) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart</h1>
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <svg className="mx-auto h-24 w-24 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Your cart is empty</h3>
            <p className="text-gray-500">Add services to start your booking.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Cart</h1>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {items.map(item => (
            <div key={item.service.id} className="flex items-center justify-between border-b px-6 py-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.service.name}</h3>
                <p className="text-sm text-gray-500">₹{item.service.price} × {item.quantity} = ₹{item.service.price * item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button onClick={() => onUpdateQuantity(item.service.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                  <Minus className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                </button>
                <span className="text-gray-700 font-medium">{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.service.id, item.quantity + 1)}>
                  <Plus className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                </button>
                <button onClick={() => onRemove(item.service.id)}>
                  <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
                </button>
              </div>
            </div>
          ))}

          <div className="px-6 py-4 flex justify-between items-center border-t bg-gray-100">
            <span className="text-lg font-semibold">Total: ₹{totalPrice.toFixed(2)}</span>
            <button
              onClick={() => setShowCheckout(true)}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition"
            >
              <CreditCard className="inline-block w-5 h-5 mr-2" /> Proceed to Checkout
            </button>
          </div>
        </div>

        {showCheckout && (
          <form onSubmit={handleSubmit} className="mt-10 bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-amber-500" /> Booking Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Name" required className="border border-gray-300 rounded-lg px-4 py-2 w-full" onChange={handleInputChange} />
              <input type="email" name="email" placeholder="Email" required className="border border-gray-300 rounded-lg px-4 py-2 w-full" onChange={handleInputChange} />
              <input type="tel" name="phone" placeholder="Phone" required className="border border-gray-300 rounded-lg px-4 py-2 w-full" onChange={handleInputChange} />
              <input type="date" name="date" required className="border border-gray-300 rounded-lg px-4 py-2 w-full" onChange={handleInputChange} />
              <input type="time" name="time" required className="border border-gray-300 rounded-lg px-4 py-2 w-full" onChange={handleInputChange} />
              <textarea name="notes" placeholder="Notes (optional)" className="border border-gray-300 rounded-lg px-4 py-2 w-full md:col-span-2" onChange={handleInputChange}></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Submit Booking on WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Cart;
