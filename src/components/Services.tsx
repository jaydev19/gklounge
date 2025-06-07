import React from 'react';
import { Clock, Star } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      category: "Hair Cutting & Styling",
      services: [
        {
          name: "Classic Cut & Style",
          description: "Professional haircut with styling and finishing",
          price: 45,
          duration: "45 min",
          image: "https://images.pexels.com/photos/3993056/pexels-photo-3993056.jpeg"
        },
        {
          name: "Premium Cut & Blowdry",
          description: "Precision cut with luxury blowdry and styling",
          price: 65,
          duration: "60 min",
          image: "https://images.pexels.com/photos/3992739/pexels-photo-3992739.jpeg"
        }
      ]
    },
    {
      category: "Color Services",
      services: [
        {
          name: "Full Color",
          description: "Complete hair color transformation with premium products",
          price: 120,
          duration: "2.5 hours",
          image: "https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg"
        },
        {
          name: "Highlights",
          description: "Professional highlighting with custom color placement",
          price: 95,
          duration: "2 hours",
          image: "https://images.pexels.com/photos/3992675/pexels-photo-3992675.jpeg"
        }
      ]
    },
    {
      category: "Treatments",
      services: [
        {
          name: "Deep Conditioning",
          description: "Intensive moisture treatment for healthy hair",
          price: 35,
          duration: "30 min",
          image: "https://images.pexels.com/photos/3993427/pexels-photo-3993427.jpeg"
        },
        {
          name: "Scalp Treatment",
          description: "Rejuvenating scalp massage and treatment",
          price: 40,
          duration: "45 min",
          image: "https://images.pexels.com/photos/3992511/pexels-photo-3992511.jpeg"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of professional hair services, 
            designed to enhance your natural beauty and boost your confidence.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
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
                        <h4 className="text-xl font-semibold text-gray-900">
                          {service.name}
                        </h4>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-amber-400 fill-current" />
                          <span className="text-sm text-gray-600">4.9</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-amber-600">
                            ${service.price}
                          </span>
                          <div className="flex items-center text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="text-sm">{service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;