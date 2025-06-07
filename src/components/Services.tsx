import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      category: "Hair Care",
      services: [
        { name: "Cysteine Hair Treatment", description: "Advanced hair smoothing and strengthening treatment", price: 2500, duration: "2 hours", image: "https://images.pexels.com/photos/3993056/pexels-photo-3993056.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Kids Hair Cut", description: "Professional haircut for children", price: 300, duration: "30 min", image: "https://images.pexels.com/photos/3992739/pexels-photo-3992739.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Hair Straightening", description: "Smooth and straighten your hair", price: 3000, duration: "3 hours", image: "https://images.pexels.com/photos/3992540/pexels-photo-3992540.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Hair Smoothening", description: "Get silky smooth hair with our treatment", price: 2800, duration: "2.5 hours", image: "https://images.pexels.com/photos/3992547/pexels-photo-3992547.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Hair Rebonding", description: "Straighten hair permanently", price: 3500, duration: "3 hours", image: "https://images.pexels.com/photos/3992543/pexels-photo-3992543.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Hair Extension", description: "Add length and volume to your hair", price: 5000, duration: "4 hours", image: "https://images.pexels.com/photos/3992541/pexels-photo-3992541.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Hair Spa", description: "Relaxing and nourishing hair spa", price: 800, duration: "1 hour", image: "https://images.pexels.com/photos/3992511/pexels-photo-3992511.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Hair Oil Massage With Steam", description: "Deep conditioning oil massage with steam", price: 700, duration: "45 min", image: "https://images.pexels.com/photos/3992528/pexels-photo-3992528.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Hair Styling", description: "Stylish haircuts and grooming", price: 600, duration: "45 min", image: "https://images.pexels.com/photos/3992600/pexels-photo-3992600.jpeg?auto=compress&cs=tinysrgb&w=600" },
      ]
    },
    {
      category: "Nails",
      services: [
        { name: "Manicure", description: "Classic manicure for healthy nails", price: 500, duration: "45 min", image: "https://images.pexels.com/photos/3992411/pexels-photo-3992411.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Artificial Nail Extension", description: "Beautiful and durable nail extensions", price: 1200, duration: "1.5 hours", image: "https://images.pexels.com/photos/3992432/pexels-photo-3992432.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Pedicure", description: "Revitalizing pedicure service", price: 600, duration: "1 hour", image: "https://images.pexels.com/photos/3992445/pexels-photo-3992445.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Nail Buffing", description: "Shine and smoothen your nails", price: 400, duration: "30 min", image: "https://images.pexels.com/photos/3992443/pexels-photo-3992443.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Nail Extension", description: "Extend your nails with beautiful designs", price: 1300, duration: "1.5 hours", image: "https://images.pexels.com/photos/3992433/pexels-photo-3992433.jpeg?auto=compress&cs=tinysrgb&w=600" },
      ]
    },
    {
      category: "Makeup",
      services: [
        { name: "Party Makeup", description: "Glamorous makeup for special occasions", price: 2000, duration: "1 hour", image: "https://images.pexels.com/photos/3992475/pexels-photo-3992475.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Bridal Package", description: "Complete bridal makeup and styling", price: 10000, duration: "3 hours", image: "https://images.pexels.com/photos/3992485/pexels-photo-3992485.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Basic Makeup", description: "Simple and elegant makeup look", price: 1500, duration: "45 min", image: "https://images.pexels.com/photos/3992495/pexels-photo-3992495.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Bridal Makeup", description: "Specialized makeup for brides", price: 9000, duration: "3 hours", image: "https://images.pexels.com/photos/3992497/pexels-photo-3992497.jpeg?auto=compress&cs=tinysrgb&w=600" },
      ]
    },
    {
      category: "Skin Care",
      services: [
        { name: "Facial", description: "Rejuvenating facial treatments", price: 1000, duration: "1 hour", image: "https://images.pexels.com/photos/3992555/pexels-photo-3992555.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Skin Treatment", description: "Advanced skin care solutions", price: 1500, duration: "1.5 hours", image: "https://images.pexels.com/photos/3992565/pexels-photo-3992565.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Hair Removal", description: "Waxing and other hair removal services", price: 700, duration: "45 min", image: "https://images.pexels.com/photos/3992581/pexels-photo-3992581.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Waxing", description: "Smooth waxing treatments", price: 800, duration: "45 min", image: "https://images.pexels.com/photos/3992580/pexels-photo-3992580.jpeg?auto=compress&cs=tinysrgb&w=600" },
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of beauty services, designed to enhance your natural beauty and boost your confidence.
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
                      <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-amber-600 font-bold text-lg">₹{service.price}</span>
                        <span className="text-gray-500">{service.duration}</span>
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
