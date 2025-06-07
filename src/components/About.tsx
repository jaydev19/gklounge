import React from 'react';
import { CheckCircle, Award, Users, Heart } from 'lucide-react';
import loungeImage from '../path/to/lounge.png';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Beauticians",
      description: "Skilled professionals dedicated to enhancing your beauty."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Premium Products",
      description: "Top-quality beauty and skincare products used."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Service",
      description: "Tailored beauty treatments to suit individual needs."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Relaxing Environment",
      description: "Soothing, modern setup for a rejuvenating experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text + Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-amber-500">GK Lounge</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in 2017, GK Lounge is a renowned beauty salon and academy in Chaibasa, Jharkhand. We offer a wide range of beauty services — from haircuts and makeup to facials — all designed to help you look and feel your best.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our skilled team is passionate about transformation, and our academy empowers future beauticians with world-class training and opportunities.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <div className="flex-shrink-0 bg-amber-100 text-amber-600 p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-semibold text-gray-900 mb-1">
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

          {/* Single Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="https://i.ibb.co/BVCYCftx/images-1-1.png"
              alt="GK Lounge Salon"
              className="rounded-2xl shadow-xl w-full h-auto object-cover max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;