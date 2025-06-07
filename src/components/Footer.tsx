import React from 'react';
import { Scissors, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GK Lounge</h3>
                <p className="text-sm text-gray-400">Beauty Salon & Academy</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Discover beauty and transformation at GK Lounge, Chaibasa. Skilled professionals, premium care, and a trusted academy to shape future beauticians.
            </p>
            
          </div>

          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Hair Care</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Nails</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Makeup</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Skin Care</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Beauty Courses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5" />
                <span className="text-sm">Chaibasa, Jharkhand, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-sm">+91 98920 44786</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-sm">info@gklounge.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Hours</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-400" />
                <div className="text-sm">
                  <div>Mon - Fri: 10AM - 8PM</div>
                  <div>Sat: 10AM - 6PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GK Lounge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
