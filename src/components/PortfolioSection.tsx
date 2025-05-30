
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Eye, ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

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
    { id: 'kitchen', label: 'Kitchen', color: 'bg-orange-500' },
    { id: 'bedroom', label: 'Bedroom', color: 'bg-purple-500' },
    { id: 'bathroom', label: 'Bathroom', color: 'bg-blue-500' },
    { id: 'living', label: 'Living Room', color: 'bg-green-500' },
    { id: 'office', label: 'Office', color: 'bg-indigo-500' }
  ];

  const currentProject = portfolioItems[currentPage];
  const currentCategory = categories.find(cat => cat.id === currentProject.category);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const handleViewDetails = (item: typeof portfolioItems[0]) => {
    navigate(`/project/${item.id}`);
  };

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our completed projects showcasing quality craftsmanship and innovative design
          </p>
        </div>

        {/* Main Project Display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-10">
            <button
              onClick={prevPage}
              className="bg-luxury-gold/80 hover:bg-luxury-gold text-white p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-10">
            <button
              onClick={nextPage}
              className="bg-luxury-gold/80 hover:bg-luxury-gold text-white p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Project Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="grid md:grid-cols-2">
              {/* Image Section - Smaller Fixed Height */}
              <div className="relative overflow-hidden group h-[300px] md:h-[400px]">
                <img 
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${currentCategory?.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                  {currentCategory?.label}
                </div>

                {/* Project Number */}
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentPage + 1} / {portfolioItems.length}
                </div>
              </div>

              {/* Content Section - Matching Smaller Height */}
              <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center h-[300px] md:h-[400px]">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                      {currentProject.title}
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/10">
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                      {currentProject.details}
                    </p>
                  </div>

                  <button 
                    onClick={() => handleViewDetails(currentProject)}
                    className="bg-luxury-gold hover:bg-luxury-brown text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 group w-fit"
                  >
                    <Eye size={20} />
                    <span>View Gallery</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'bg-luxury-gold scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 md:mt-24 bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10">
          <div className="text-center">
            <div className="text-luxury-gold text-4xl md:text-5xl mb-4">"</div>
            <blockquote className="text-lg md:text-2xl text-white italic mb-4 md:mb-6 max-w-4xl mx-auto">
              Jayalakshmi Agency transformed our entire home beautifully. The quality of work and attention 
              to detail is exceptional. Mr. Parthiban and his team are truly professional and reliable.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm md:text-base">RS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-white text-sm md:text-base">Rajesh Sharma</div>
                <div className="text-gray-300 text-xs md:text-sm">Homeowner, Ganapathy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
