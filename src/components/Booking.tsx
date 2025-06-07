import React, { useState } from 'react';
import { Plus, Clock, Star } from 'lucide-react';
import { Service } from '../App';

interface BookingProps {
  onAddToCart: (service: Service) => void;
}

const Booking: React.FC<BookingProps> = ({ onAddToCart }) => {
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const services: Service[] = [
    { id: '1', name: 'Cysteine Hair Treatment', description: 'Smooth, shiny hair with cysteine treatment.', price: 1500, duration: '2 hrs', category: 'haircare', image: 'https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg' },
    { id: '2', name: "Kids Hair Cut", description: "Haircut tailored for kids.", price: 100, duration: "20 min", category: "haircare", image: "https://images.pexels.com/photos/3993394/pexels-photo-3993394.jpeg" },
    { id: '3', name: 'Hair Straightening', description: 'Straight, sleek hair with professional treatment.', price: 1200, duration: '2 hrs', category: 'haircare', image: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg' },
    { id: '4', name: 'Hair Smoothening', description: 'Frizz-free, smooth hair.', price: 1300, duration: '2 hrs', category: 'haircare', image: 'https://images.pexels.com/photos/3992675/pexels-photo-3992675.jpeg' },
    { id: '5', name: 'Hair Rebonding', description: 'Hair rebonding for silky finish.', price: 1400, duration: '2.5 hrs', category: 'haircare', image: 'https://images.pexels.com/photos/2171083/pexels-photo-2171083.jpeg' },
    { id: '6', name: 'Hair Extension', description: 'Add volume and length with extensions.', price: 2000, duration: '1.5 hrs', category: 'haircare', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
    { id: '7', name: 'Hair Spa', description: 'Relaxing and nourishing hair spa.', price: 500, duration: '45 min', category: 'haircare', image: 'https://images.pexels.com/photos/853433/pexels-photo-853433.jpeg' },
    { id: '8', name: 'Hair Oil Massage With Steam', description: 'Relaxing oil massage with steam therapy.', price: 300, duration: '30 min', category: 'haircare', image: 'https://images.pexels.com/photos/3993249/pexels-photo-3993249.jpeg' },
    { id: '9', name: 'Hair Styling', description: 'Hair styling for any occasion.', price: 400, duration: '30 min', category: 'haircare', image: 'https://images.pexels.com/photos/853409/pexels-photo-853409.jpeg' },
    { id: '10', name: 'Manicure', description: 'Hand grooming and nail shaping.', price: 350, duration: '40 min', category: 'nails', image: 'https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg' },
    { id: '11', name: 'Artificial Nail Extension', description: 'Get beautiful extended nails.', price: 800, duration: '1 hr', category: 'nails', image: 'https://images.pexels.com/photos/8386645/pexels-photo-8386645.jpeg' },
    { id: '12', name: 'Pedicure', description: 'Foot care and grooming service.', price: 400, duration: '45 min', category: 'nails', image: 'https://images.pexels.com/photos/3736390/pexels-photo-3736390.jpeg' },
    { id: '13', name: 'Nail Buffing', description: 'Smooth, shiny nails with buffing.', price: 200, duration: '20 min', category: 'nails', image: 'https://images.pexels.com/photos/3993426/pexels-photo-3993426.jpeg' },
    { id: '14', name: 'Nail Extension', description: 'Custom nail extension services.', price: 900, duration: '1 hr', category: 'nails', image: 'https://images.pexels.com/photos/7676766/pexels-photo-7676766.jpeg' },
    { id: '15', name: 'Party Makeup', description: 'Get ready for parties with professional makeup.', price: 1500, duration: '1 hr', category: 'makeup', image: 'https://images.pexels.com/photos/3992897/pexels-photo-3992897.jpeg' },
    { id: '16', name: 'Bridal package', description: 'Complete bridal makeup and care.', price: 6000, duration: '3 hrs', category: 'makeup', image: 'https://images.pexels.com/photos/1291738/pexels-photo-1291738.jpeg' },
    { id: '17', name: 'Basic Makeup', description: 'Simple and elegant basic makeup.', price: 800, duration: '45 min', category: 'makeup', image: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg' },
    { id: '18', name: 'Bridal Makeup', description: 'Special bridal makeup session.', price: 5000, duration: '2.5 hrs', category: 'makeup', image: 'https://images.pexels.com/photos/1520843/pexels-photo-1520843.jpeg' },
    { id: '19', name: 'Facial', description: 'Cleansing and rejuvenating facial.', price: 600, duration: '1 hr', category: 'skincare', image: 'https://images.pexels.com/photos/3993443/pexels-photo-3993443.jpeg' },
    { id: '20', name: 'Skin Treatment', description: 'Custom skin treatment services.', price: 1000, duration: '1 hr', category: 'skincare', image: 'https://images.pexels.com/photos/3993442/pexels-photo-3993442.jpeg' },
    { id: '21', name: 'Waxing', description: 'Full body and partial waxing services.', price: 400, duration: '30 min', category: 'hairremoval', image: 'https://images.pexels.com/photos/3993441/pexels-photo-3993441.jpeg' }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'haircare', name: 'Hair Care' },
    { id: 'nails', name: 'Nails' },
    { id: 'makeup', name: 'Makeup' },
    { id: 'skincare', name: 'Skin Care' },
    { id: 'hairremoval', name: 'Hair Removal' }
  ];

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Service</h1>
          <p className="text-xl text-gray-600">
            Choose from a wide range of beauty and grooming services
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
                    {service.duration}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-amber-600">
                    ₹{service.price}
                  </span>
                </div>
                <button
                  onClick={() => onAddToCart(service)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
