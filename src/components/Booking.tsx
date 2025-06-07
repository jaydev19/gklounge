import React, { useState } from 'react';
import { Plus, Clock, Star } from 'lucide-react';
import { Service } from '../App';

interface BookingProps {
  onAddToCart: (service: Service) => void;
}

const Booking: React.FC<BookingProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const services: Service[] = [
    {
      id: '1',
      name: 'Classic Cut & Style',
      description: 'Professional haircut with styling and finishing',
      price: 45,
      duration: '45 min',
      category: 'cutting',
      image: 'https://images.pexels.com/photos/3993056/pexels-photo-3993056.jpeg'
    },
    {
      id: '2',
      name: 'Premium Cut & Blowdry',
      description: 'Precision cut with luxury blowdry and styling',
      price: 65,
      duration: '60 min',
      category: 'cutting',
      image: 'https://images.pexels.com/photos/3992739/pexels-photo-3992739.jpeg'
    },
    {
      id: '3',
      name: 'Full Color',
      description: 'Complete hair color transformation with premium products',
      price: 120,
      duration: '2.5 hours',
      category: 'color',
      image: 'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg'
    },
    {
      id: '4',
      name: 'Highlights',
      description: 'Professional highlighting with custom color placement',
      price: 95,
      duration: '2 hours',
      category: 'color',
      image: 'https://images.pexels.com/photos/3992675/pexels-photo-3992675.jpeg'
    },
    {
      id: '5',
      name: 'Balayage',
      description: 'Hand-painted highlights for natural-looking dimension',
      price: 110,
      duration: '2.5 hours',
      category: 'color',
      image: 'https://images.pexels.com/photos/3992648/pexels-photo-3992648.jpeg'
    },
    {
      id: '6',
      name: 'Deep Conditioning',
      description: 'Intensive moisture treatment for healthy hair',
      price: 35,
      duration: '30 min',
      category: 'treatment',
      image: 'https://images.pexels.com/photos/3993427/pexels-photo-3993427.jpeg'
    },
    {
      id: '7',
      name: 'Scalp Treatment',
      description: 'Rejuvenating scalp massage and treatment',
      price: 40,
      duration: '45 min',
      category: 'treatment',
      image: 'https://images.pexels.com/photos/3992511/pexels-photo-3992511.jpeg'
    },
    {
      id: '8',
      name: 'Keratin Treatment',
      description: 'Smoothing treatment for frizz-free, manageable hair',
      price: 150,
      duration: '3 hours',
      category: 'treatment',
      image: 'https://images.pexels.com/photos/3992741/pexels-photo-3992741.jpeg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cutting', name: 'Cut & Style' },
    { id: 'color', name: 'Color Services' },
    { id: 'treatment', name: 'Treatments' }
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
            Choose from our range of professional hair services
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-10">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm text-gray-600">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <span className="text-2xl font-bold text-amber-600">
                    ${service.price}
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