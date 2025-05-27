import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-[50vh] md:min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Transform Your Space with
            <span className="block text-luxury-gold">Premium Interiors</span>
          </h1>
          
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-luxury-cream max-w-3xl mx-auto">
            Expert interior solutions for doors, kitchens, wardrobes & complete home transformations in Coimbatore
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-luxury-gold hover:bg-white hover:text-luxury-brown text-white font-semibold px-8 py-4 text-lg transition-all duration-300 min-w-[200px]"
              onClick={() => window.open('tel:9843155325')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-luxury-brown font-semibold px-8 py-4 text-lg min-w-[200px]"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
          </div>
          
          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury-gold">25+</div>
              <div className="text-sm md:text-base text-luxury-cream">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury-gold">500+</div>
              <div className="text-sm md:text-base text-luxury-cream">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury-gold">100%</div>
              <div className="text-sm md:text-base text-luxury-cream">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-luxury-gold">24/7</div>
              <div className="text-sm md:text-base text-luxury-cream">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-luxury-gold/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-luxury-gold/30 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;
