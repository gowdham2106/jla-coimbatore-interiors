
const ServicesSection = () => {
  const services = [
    {
      title: "PVC Doors",
      description: "Water-resistant PVC doors perfect for bathrooms and moisture-prone areas",
      features: ["Moisture Resistant", "Easy Maintenance", "Durable Finish", "Modern Designs"]
    },
    {
      title: "Fibre Doors",
      description: "Premium fibre doors for bedrooms and bathrooms with superior finish",
      features: ["High Durability", "Elegant Finish", "Termite Proof", "Cost Effective"]
    },
    {
      title: "Loft Covers",
      description: "Smart space optimization solutions for maximum storage utility",
      features: ["Space Optimization", "Custom Designs", "Easy Access", "Strong Support"]
    },
    {
      title: "Wall Panelling",
      description: "Decorative and functional wall treatments for enhanced aesthetics",
      features: ["Design Variety", "Easy Installation", "Acoustic Benefits", "Modern Look"]
    },
    {
      title: "Wardrobes",
      description: "Custom storage solutions designed to maximize space and organization",
      features: ["Custom Designs", "Space Efficient", "Quality Hardware", "Sliding Options"]
    },
    {
      title: "Kitchen Cabinets",
      description: "Modern kitchen installations with premium finishes and smart storage",
      features: ["Modular Design", "Premium Finish", "Smart Storage", "Easy Maintenance"]
    },
    {
      title: "False Ceiling",
      description: "Architectural ceiling designs that transform your space completely",
      features: ["Design Variety", "Lighting Integration", "Thermal Insulation", "Modern Appeal"]
    },
    {
      title: "Complete Interiors",
      description: "End-to-end interior solutions for your entire home or office",
      features: ["Full Service", "Project Management", "Design Consultation", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-brown mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive interior solutions tailored to transform your space with quality and style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full flex flex-col">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-semibold text-luxury-brown mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="text-luxury-gold mr-2 text-xs">●</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Serving Coimbatore and surrounding areas with premium interior solutions
          </p>
          <button 
            className="bg-luxury-gold hover:bg-luxury-brown text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            onClick={() => window.open('tel:9843155325')}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
