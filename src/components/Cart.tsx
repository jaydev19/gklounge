import React, { useState, useEffect } from 'react';
import { Minus, Plus, Trash2, Calendar, CreditCard, Download, CheckCircle } from 'lucide-react';
import { CartItem } from '../App';
import { generateBill } from '../utils/billGenerator';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (serviceId: string, quantity: number) => void;
  onRemove: (serviceId: string) => void;
  totalPrice: number;
  onClearCart: () => void;
}

const RAZORPAY_KEY = 'rzp_test_1234567890'; // Replace with your Razorpay key
const GST_RATE = 0.18;

const Cart: React.FC<CartProps> = ({
  items,
  onUpdateQuantity,
  onRemove,
  totalPrice,
  onClearCart,
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  });
  const [orderId, setOrderId] = useState('');
  const [whatsappSent, setWhatsappSent] = useState(false);
  const [showPayNow, setShowPayNow] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // GST calculation
  const gstAmount = totalPrice * GST_RATE;
  const grandTotal = totalPrice + gstAmount;

  // Ensure Razorpay script is loaded before payment
  useEffect(() => {
    if (window.Razorpay) {
      setRazorpayLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRazorpayPayment = () => {
    if (!razorpayLoaded) {
      alert('Payment gateway is loading. Please wait a moment and try again.');
      return;
    }
    const options = {
      key: RAZORPAY_KEY,
      amount: Math.round(grandTotal * 100), // Amount in paise
      currency: 'INR',
      name: 'GK Lounge',
      description: 'Beauty Services Payment',
      image: '/logo.png',
      handler: function (response: any) {
        setPaymentSuccess(true);
        setOrderId(response.razorpay_payment_id);
        // Here you would typically verify the payment on your backend
        console.log('Payment successful:', response);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: 'GK Lounge, Chaibasa, Jharkhand',
      },
      theme: {
        color: '#9333ea',
      },
      modal: {
        ondismiss: function () {
          // Optionally handle modal close
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCheckout(false);
    setWhatsappSent(false);
    setShowPayNow(false);
    setTimeout(() => {
      setShowPayNow(false);
    }, 0);
  };

  const handleDownloadBill = () => {
    const billData = {
      orderId: orderId || `GK${Date.now()}`,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      appointmentDate: formData.date,
      appointmentTime: formData.time,
      items: items,
      totalAmount: grandTotal,
      paymentMethod: paymentSuccess ? 'Razorpay' : 'Pending',
      notes: formData.notes,
      gstAmount,
    };

    generateBill(billData);
  };

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent(
      `📟 *New Booking Request*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📞 *Phone:* ${formData.phone}\n` +
        `🗓 *Date:* ${formData.date}\n` +
        `⏰ *Time:* ${formData.time}\n` +
        `📝 *Notes:* ${formData.notes || 'N/A'}\n\n` +
        `🛍️ *Services:*\n` +
        items
          .map(
            (item) =>
              `- ${item.service.name} × ${item.quantity} = ₹{item.service.price * item.quantity}`
          )
          .join('\n') +
        `\n\nSubtotal: ₹{totalPrice.toFixed(2)}\nGST (18%): ₹{gstAmount.toFixed(2)}\n💰 *Total:* ₹{grandTotal.toFixed(2)}\n` +
        `🧾 *Order ID:* ${orderId || 'N/A'}`
    );

    const phoneNumber = '916299214255'; // Replace with your number (no +)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
    setWhatsappSent(true);
    setShowPayNow(true);
    // Don't clear cart yet, wait for payment
  };

  if (items.length === 0 && !showCheckout && !paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart</h1>
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <svg
              className="mx-auto h-24 w-24 text-gray-300 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Your cart is empty
            </h3>
            <p className="text-gray-500">Add services to start your booking.</p>
          </div>
        </div>
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
        <CheckCircle className="h-20 w-20 text-green-500 animate-bounce mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 max-w-xl mb-2">
          Your appointment has been booked successfully. We will contact you shortly to confirm the details.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Order ID: {orderId}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownloadBill}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <Download className="h-5 w-5" />
            <span>Download Bill</span>
          </button>
          <button
            onClick={() => {
              setPaymentSuccess(false);
              setShowCheckout(false);
              setShowPayNow(false);
              setWhatsappSent(false);
              onClearCart();
            }}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Book Another Service
          </button>
        </div>
      </div>
    );
  }

  // After WhatsApp, show confirmation and Pay Now
  if (showPayNow && whatsappSent && !paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
        <CheckCircle className="h-20 w-20 text-green-500 animate-bounce mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Booking Details Sent!
        </h1>
        <p className="text-gray-600 max-w-xl mb-6">
          Your booking details have been sent to WhatsApp. Please proceed to payment to confirm your appointment.
        </p>
        <button
          onClick={handleRazorpayPayment}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
          disabled={!razorpayLoaded}
        >
          <CreditCard className="h-5 w-5" />
          <span>Pay Now (₹{grandTotal.toFixed(2)})</span>
        </button>
        {!razorpayLoaded && (
          <p className="text-sm text-gray-500 mt-2">Loading payment gateway...</p>
        )}
      </div>
    );
  }

  if (showCheckout) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => setShowCheckout(false)}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Back to Cart
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Booking Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          time: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Any specific requests or allergies we should know about..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  disabled={whatsappSent}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A12 12 0 003.48 20.52l-1.32 4.84a1 1 0 001.24 1.24l4.84-1.32A12 12 0 0020.52 3.48zm-8.52 17.02a10 10 0 1110-10 10 10 0 01-10 10zm5.29-7.29l-2.54-2.54a1 1 0 00-1.41 0l-2.54 2.54a1 1 0 001.41 1.41l1.29-1.3V17a1 1 0 002 0v-3.17l1.29 1.3a1 1 0 001.41-1.41z" />
                  </svg>
                  <span>{whatsappSent ? "Sent to WhatsApp" : "Send Details to WhatsApp"}</span>
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.service.id}
                    className="flex justify-between items-center py-3 border-b border-gray-100"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {item.service.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <span className="font-semibold text-gray-900">
                      ₹{(item.service.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Subtotal</span>
                    <span className="text-lg font-semibold">₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">GST (18%)</span>
                    <span className="text-lg font-semibold">₹{gstAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-purple-600">₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Cart UI (before checkout)
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.service.id}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.service.image}
                    alt={item.service.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.service.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.service.description}
                    </p>
                    <p className="text-purple-600 font-semibold">
                      ₹{item.service.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.service.id, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.service.id, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onRemove(item.service.id)}
                      className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors ml-4"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Summary</h3>
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.service.id}
                  className="flex justify-between text-sm"
                >
                  <span>
                    {item.service.name} x{item.quantity}
                  </span>
                  <span>
                    ₹{(item.service.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Subtotal</span>
                <span className="text-lg font-semibold">₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">GST (18%)</span>
                <span className="text-lg font-semibold">₹{gstAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-purple-600">₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;