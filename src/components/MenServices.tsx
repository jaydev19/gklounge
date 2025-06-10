import React from 'react';
import { ArrowLeft, Calendar, Clock, Star } from 'lucide-react';
import { Service as BaseService } from '../App';

interface MenServicesProps {
  onAddToCart: (service: BaseService) => void;
  onNavigate: (view: 'home' | 'booking') => void;
}

// Extend Service to include gender for local use
interface Service extends BaseService {
  gender?: string;
}

const MenServices: React.FC<MenServicesProps> = ({ onAddToCart, onNavigate }) => {
  const menServices: Service[] = [
    {
      id: 'men-1',
      name: "Classic Men's Haircut",
      description: 'Professional haircut with styling and finishing',
      price: 25,
      duration: '30 min',
      category: 'cutting',
      gender: 'men',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg'
    },
    {
      id: 'men-2',
      name: 'Beard Trim & Styling',
      description: 'Expert beard trimming and styling service',
      price: 15,
      duration: '20 min',
      category: 'grooming',
      gender: 'men',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg'
    },
    {
      id: 'men-3',
      name: 'Hair Wash & Styling',
      description: 'Complete hair wash with professional styling',
      price: 20,
      duration: '25 min',
      category: 'styling',
      gender: 'men',
      image: 'https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg'
    },
    {
      id: 'men-4',
      name: 'Scalp Treatment',
      description: 'Rejuvenating scalp massage and treatment',
      price: 30,
      duration: '40 min',
      category: 'treatment',
      gender: 'men',
      image: 'https://images.pexels.com/photos/3992511/pexels-photo-3992511.jpeg'
    },
    {
      id: 'men-5',
      name: 'Hair Color for Men',
      description: 'Professional hair coloring service for men',
      price: 50,
      duration: '60 min',
      category: 'color',
      gender: 'men',
      image: 'https://images.pexels.com/photos/1570808/pexels-photo-1570808.jpeg'
    },
    {
      id: 'men-6',
      name: 'Complete Grooming Package',
      description: 'Haircut, beard trim, and styling combo',
      price: 45,
      duration: '60 min',
      category: 'package',
      gender: 'men',
      image: 'https://images.pexels.com/photos/1570809/pexels-photo-1570809.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-blue-200 hover:text-white mb-8 transition-colors"
            type="button"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Men&apos;s Grooming</h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional grooming services designed for the modern gentleman. 
                Experience precision cuts, expert styling, and premium care.
              </p>
              <button
                onClick={() => onNavigate('booking')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2"
                type="button"
              >
                <Calendar className="h-5 w-5" />
                <span>View all services</span>
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg"
                alt="Men's grooming services"
                className="rounded-2xl shadow-2xl w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Men&apos;s Services</h2>
            <p className="text-xl text-gray-600">
              Choose from our range of professional grooming services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menServices.map(service => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.9</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{service.price}
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart(service)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors mt-auto"
                    type="button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenServices;