import React from 'react';
import { Calendar, Star, Award, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  // Handler for navigating to men/women services
  const onNavigate = (type: 'men' | 'women') => {
    navigate(`/services/${type}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
            alt="GK Lounge modern salon interior"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(17,24,39,0.85) 0%, rgba(17,24,39,0.7) 40%, rgba(17,24,39,0.0) 80%)'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Transform Your 
                <span className="text-amber-400 block">Style Today</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover premium beauty and grooming services at GK Lounge in Chaibasa, Jharkhand.
                Skilled professionals and top-notch care for your best look.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={handleBookNow}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Appointment</span>
                </button>
                <a
                  href="tel:+918210176204"
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Call +91 82101 76204
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold">Chaibasa</div>
                  <div className="text-sm text-gray-400">Jharkhand</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Visit Us Today</h3>
                <p className="text-lg mb-6 text-amber-100">
                  Ward No. 20, G.E.L Church Complex, Opp. Chaibasa Bus Stand
                </p>
                <div className="space-y-3 text-amber-100">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>10AM - 8PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10AM - 6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Men & Women Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Experience</h2>
            <p className="text-xl text-gray-600">
              Specialized services tailored for men and women
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Men's Services */}
            <div 
              onClick={() => onNavigate('men')}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg"
                  alt="Men's grooming services"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-3">Men's Grooming</h3>
                <p className="text-gray-200 mb-4">
                  Professional haircuts, beard styling, and grooming services designed for the modern man
                </p>
                <div className="flex items-center text-white group-hover:text-pink-400 transition-colors">
                  <span className="font-semibold">Explore Services</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Women's Services */}
            <div 
              onClick={() => onNavigate('women')}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src="https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg"
                  alt="Women's beauty services"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-3">Women's Beauty</h3>
                <p className="text-gray-200 mb-4">
                  Complete beauty solutions including hair styling, makeup, facials, and nail care
                </p>
                <div className="flex items-center text-white group-hover:text-pink-400 transition-colors">
                  <span className="font-semibold">Explore Services</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;