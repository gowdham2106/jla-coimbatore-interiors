
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-luxury-gold rounded-lg flex items-center justify-center">
              <div className="text-white font-bold text-lg md:text-xl">👑</div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-luxury-brown">JLA</h1>
              <p className="text-xs md:text-sm text-gray-600">Jayalakshmi Agency</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-luxury-brown transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-luxury-brown transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-luxury-brown transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-luxury-brown transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-luxury-brown transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Call Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-luxury-gold hover:bg-luxury-brown text-white"
              onClick={() => window.open('tel:9843155325')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-5 h-5 md:w-6 md:h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-luxury-brown transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-0.5 bg-luxury-brown transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-luxury-brown transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 md:mt-4 bg-white rounded-lg shadow-lg p-3 md:p-4">
            <nav className="flex flex-col space-y-2 md:space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-luxury-brown transition-colors py-2 text-sm md:text-base"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-luxury-brown transition-colors py-2 text-sm md:text-base"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-luxury-brown transition-colors py-2 text-sm md:text-base"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-luxury-brown transition-colors py-2 text-sm md:text-base"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-luxury-brown transition-colors py-2 text-sm md:text-base"
              >
                Contact
              </button>
              <Button 
                className="bg-luxury-gold hover:bg-luxury-brown text-white w-full mt-3 md:mt-4 text-sm md:text-base"
                onClick={() => window.open('tel:9843155325')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
