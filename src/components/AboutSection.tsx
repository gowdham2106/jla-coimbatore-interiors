
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-brown mb-6">
              About Jayalakshmi Agency
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming homes across Coimbatore with premium interior solutions since 2008
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-luxury-brown">
                Your Trusted Interior Partner
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Founded by R. Parthiban, Jayalakshmi Agency has been the premier choice for interior solutions 
                in Coimbatore for over 15 years. We specialize in creating beautiful, functional spaces that 
                reflect your personal style and meet your practical needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From modern PVC doors to complete kitchen transformations, our expert team brings years of 
                experience and attention to detail to every project. We pride ourselves on quality craftsmanship, 
                timely delivery, and exceptional customer service.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-luxury-gold">15+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-luxury-gold">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-luxury-brown mb-4">Our Commitment</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">✓</span>
                    <span className="text-gray-700">Premium quality materials and finishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">✓</span>
                    <span className="text-gray-700">Expert craftsmanship and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">✓</span>
                    <span className="text-gray-700">Timely project completion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">✓</span>
                    <span className="text-gray-700">Competitive pricing with transparency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">✓</span>
                    <span className="text-gray-700">Comprehensive after-sales support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-luxury-brown text-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
                <p className="text-luxury-cream">
                  With deep roots in Coimbatore and a thorough understanding of local preferences, 
                  we deliver personalized interior solutions that perfectly blend functionality with aesthetic appeal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
