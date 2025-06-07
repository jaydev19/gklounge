import React from 'react';
import { Calendar, Star, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  return (
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
  );
};

export default Hero;