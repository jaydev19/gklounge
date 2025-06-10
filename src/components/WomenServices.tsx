import React from 'react';
import { ArrowLeft, Calendar, Clock, Star } from 'lucide-react';
import { Service as BaseService } from '../App';

interface WomenServicesProps {
  onAddToCart: (service: BaseService) => void;
  onNavigate: (view: 'home' | 'booking') => void;
}

// Extend Service locally if needed
interface Service extends BaseService {
  gender?: string;
}

const WomenServices: React.FC<WomenServicesProps> = ({ onAddToCart, onNavigate }) => {
  const womenServices: Service[] = [
    {
      id: 'women-1',
      name: 'Hair Cut & Style',
      description: 'Professional haircut with styling and finishing',
      price: 35,
      duration: '45 min',
      category: 'cutting',
      gender: 'women',
      image: 'https://images.pexels.com/photos/3993056/pexels-photo-3993056.jpeg'
    },
    {
      id: 'women-2',
      name: 'Hair Color & Highlights',
      description: 'Complete hair coloring with professional highlights',
      price: 80,
      duration: '2 hours',
      category: 'color',
      gender: 'women',
      image: 'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg'
    },
    {
      id: 'women-3',
      name: 'Bridal Makeup Package',
      description: 'Complete bridal makeup with hair styling',
      price: 150,
      duration: '3 hours',
      category: 'makeup',
      gender: 'women',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg'
    },
    {
      id: 'women-4',
      name: 'Party Makeup',
      description: 'Glamorous party makeup for special occasions',
      price: 60,
      duration: '60 min',
      category: 'makeup',
      gender: 'women',
      image: 'https://images.pexels.com/photos/1721556/pexels-photo-1721556.jpeg'
    },
    {
      id: 'women-5',
      name: 'Facial Treatment',
      description: 'Deep cleansing facial for glowing skin',
      price: 45,
      duration: '60 min',
      category: 'skincare',
      gender: 'women',
      image: 'https://images.pexels.com/photos/3993427/pexels-photo-3993427.jpeg'
    },
    {
      id: 'women-6',
      name: 'Manicure & Pedicure',
      description: 'Complete nail care with polish application',
      price: 40,
      duration: '75 min',
      category: 'nails',
      gender: 'women',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg'
    },
    {
      id: 'women-7',
      name: 'Hair Treatment',
      description: 'Deep conditioning and keratin treatment',
      price: 70,
      duration: '90 min',
      category: 'treatment',
      gender: 'women',
      image: 'https://images.pexels.com/photos/3992741/pexels-photo-3992741.jpeg'
    },
    {
      id: 'women-8',
      name: 'Artificial Nail Extension',
      description: 'Professional nail extensions with design',
      price: 55,
      duration: '90 min',
      category: 'nails',
      gender: 'women',
      image: 'https://images.pexels.com/photos/3997378/pexels-photo-3997378.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-pink-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Women&apos;s Beauty</h1>
              <p className="text-xl text-pink-100 mb-8">
                Complete beauty solutions for the modern woman. From hair styling to makeup artistry, 
                we enhance your natural beauty with expert care.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('booking')}
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2"
              >
                <Calendar className="h-5 w-5" />
                <span>View all services</span>
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg"
                alt="Women's beauty services"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Women&apos;s Services</h2>
            <p className="text-xl text-gray-600">
              Discover our comprehensive range of beauty services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {womenServices.map(service => (
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
                    <span className="text-2xl font-bold text-pink-600">
                      ₹{service.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onAddToCart(service)}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition-colors mt-auto"
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

export default WomenServices;