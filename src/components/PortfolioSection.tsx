import { useState } from 'react';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      description: "Complete kitchen makeover with modular cabinets and premium finishes",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      details: "This modern kitchen features sleek modular cabinets with soft-close mechanisms, granite countertops, and premium hardware. Complete transformation took 2 weeks with minimal disruption to daily life."
    },
    {
      id: 2,
      title: "Luxury Wardrobe Design",
      category: "bedroom",
      description: "Custom wardrobe with sliding doors and smart storage solutions",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      details: "Floor-to-ceiling wardrobe with mirror sliding doors, LED lighting, and customized compartments for optimal storage organization."
    },
    {
      id: 3,
      title: "Bathroom Door Installation",
      category: "bathroom",
      description: "PVC doors perfect for moisture-resistant bathroom applications",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
      details: "High-quality PVC doors designed specifically for bathroom environments with superior moisture resistance and durability."
    },
    {
      id: 4,
      title: "Living Room False Ceiling",
      category: "living",
      description: "Elegant false ceiling design with integrated lighting",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      details: "Contemporary false ceiling with recessed LED lighting, creating ambient atmosphere and hiding electrical wiring aesthetically."
    },
    {
      id: 5,
      title: "Office Interior Design",
      category: "office",
      description: "Complete office interior with modern paneling and furniture",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      details: "Professional office space with ergonomic furniture, acoustic wall panels, and efficient lighting for productive work environment."
    },
    {
      id: 6,
      title: "Bedroom Loft Storage",
      category: "bedroom",
      description: "Space-saving loft covers for maximum storage utility",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      details: "Innovative loft storage solution maximizing vertical space while maintaining easy access and aesthetic appeal."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'living', label: 'Living Room' },
    { id: 'office', label: 'Office' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleViewDetails = (item: typeof portfolioItems[0]) => {
    const message = `Hello! I'm interested in learning more about the "${item.title}" project. ${item.details}`;
    const whatsappMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919843155325?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-luxury-brown mb-4 md:mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8">
            Explore our completed projects showcasing quality craftsmanship and innovative design
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-luxury-gold text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-luxury-gold hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-luxury-brown/20 group-hover:bg-luxury-brown/40 transition-colors duration-300"></div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-luxury-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-luxury-gold text-xs md:text-sm font-medium uppercase tracking-wide">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </span>
                  <button 
                    onClick={() => handleViewDetails(item)}
                    className="text-luxury-brown hover:text-luxury-gold transition-colors duration-300 font-medium text-xs md:text-sm"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-12 md:mt-20 bg-white rounded-lg shadow-lg p-6 md:p-12">
          <div className="text-center">
            <div className="text-luxury-gold text-4xl md:text-5xl mb-4">"</div>
            <blockquote className="text-lg md:text-2xl text-gray-700 italic mb-4 md:mb-6 max-w-4xl mx-auto">
              Jayalakshmi Agency transformed our entire home beautifully. The quality of work and attention 
              to detail is exceptional. Mr. Parthiban and his team are truly professional and reliable.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm md:text-base">RS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-luxury-brown text-sm md:text-base">Rajesh Sharma</div>
                <div className="text-gray-600 text-xs md:text-sm">Homeowner, Ganapathy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
