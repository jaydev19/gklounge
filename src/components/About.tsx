import React from 'react';
import { CheckCircle, Award, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Stylists",
      description: "Certified professionals with years of experience"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Premium Products",
      description: "Only the finest hair care products and tools"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Service",
      description: "Tailored treatments for your unique style"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Relaxing Environment",
      description: "Comfortable and welcoming atmosphere"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About GK Lounge
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located in the heart of Vashi, Navi Mumbai, GK Lounge is your premier destination 
              for professional hair styling services. We believe that great hair is the foundation 
              of confidence, and our team of experienced stylists combines artistry with technical 
              expertise to create looks that reflect your personality and lifestyle.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since our establishment, we've been committed to providing exceptional service in a 
              relaxing, modern environment. Located conveniently in Sector 17, Vashi, we use only 
              premium products and stay current with the latest trends and techniques to ensure 
              you leave feeling confident and beautiful.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-amber-100 p-2 rounded-lg">
                    <div className="text-amber-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
                alt="GK Lounge salon interior"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3992644/pexels-photo-3992644.jpeg"
                alt="Professional hair styling at GK Lounge"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">Vashi</div>
              <div className="text-sm">Navi Mumbai</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;