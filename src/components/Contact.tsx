import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const hours = [
    { day: 'Monday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Visit Us Today</h2>
          <p className="text-xl text-gray-300">
            Ready for your transformation? Get in touch to book your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <p className="text-gray-300">
              Shop No. 4, Ground Floor<br />
              Shree Ganesh CHS, Plot No. 48<br />
              Sector 17, Vashi<br />
              Navi Mumbai, Maharashtra 400703
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-300 mb-2">
              Phone: +91 98920 44786
            </p>
            <p className="text-gray-300">
              Email: info@gklounge.com
            </p>
          </div>

          <div className="text-center">
            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hours</h3>
            <div className="space-y-2">
              {hours.map((schedule, index) => (
                <div key={index} className="text-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-sm">{schedule.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-800 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
              <p className="text-gray-300 mb-6">
                Call us directly or visit our salon in Vashi, Navi Mumbai to secure your preferred time slot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919892044786"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:info@gklounge.com"
                  className="border border-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
            <div className="bg-gray-700 rounded-xl p-6">
              <h4 className="font-semibold mb-4">Find Us</h4>
              <p className="text-gray-300 text-sm mb-4">
                Located in the heart of Vashi, Navi Mumbai. Easy access from Vashi Railway Station and major bus routes.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold">IG</span>
                </div>
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold">FB</span>
                </div>
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold">TW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;