import React from 'react';
import { Scissors, Heart, Sparkles, Crown, Phone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      category: "Hair Care",
      icon: Scissors,
      color: "from-orange-400 to-orange-600",
      id: "haircare",
      services: [/* ... */]
    },
    {
      category: "Nails",
      icon: Sparkles,
      color: "from-gray-400 to-gray-600",
      id: "nails",
      services: [/* ... */]
    },
    {
      category: "Makeup",
      icon: Crown,
      color: "from-orange-500 to-orange-700",
      id: "makeup",
      services: [/* ... */]
    },
    {
      category: "Skin Care",
      icon: Heart,
      color: "from-gray-500 to-gray-700",
      id: "skincare",
      services: [/* ... */]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Explore our comprehensive range of beauty services, designed to enhance your natural beauty and boost your confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 font-medium"
                onClick={() => navigate('/booking')}
              >
                View All Services
              </button>
              <button
                className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-800 transition-all font-medium"
                onClick={() => navigate('/booking?category=makeup')}
              >
                Book Bridal Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Service Categories
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of beauty and wellness services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(`/booking?category=${category.id}`)}
                  className="group bg-gray-50 rounded-2xl p-8 hover:bg-orange-50 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 cursor-pointer block w-full"
                  style={{ border: 'none', background: 'none' }}
                >
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                      <IconComponent className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{category.category}</h3>
                    <p className="text-gray-600 mb-6">{category.services.length} Services Available</p>
                    <span className="text-orange-500 font-medium hover:text-orange-600 transition-colors flex items-center justify-center mx-auto">
                      View Services <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Bridal Section with Image on Right */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-orange-400 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-orange-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-orange-400 rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Exclusively <span className="text-orange-400">Bridal</span>
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-3xl">
                Make your wedding day unforgettable with our luxurious bridal services. At Naturals, we 
                rely on premium products and uphold the highest hygiene standards to ensure a 
                flawless, radiant look. Trust our expert team to provide you with exceptional care and 
                beauty on your special day.
              </p>
              <button
                className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 font-medium text-center inline-block"
                onClick={() => navigate('/booking?category=makeup')}
              >
                Book Bridal Package
              </button>
            </div>
            {/* Right: Image */}
            <div className="flex justify-center items-center">
              <img
                src="https://i.ibb.co/rKPcK6Ct/bridal-img.png"
                alt="Bridal Service"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110">
          <Phone className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Services;