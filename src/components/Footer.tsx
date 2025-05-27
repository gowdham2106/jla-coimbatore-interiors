
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">👑</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">JLA</h3>
                <p className="text-luxury-cream text-sm">Jayalakshmi Agency</p>
              </div>
            </div>
            <p className="text-luxury-cream leading-relaxed">
              Premium interior solutions for doors, kitchens, wardrobes & complete home transformations in Coimbatore.
            </p>
            <div className="text-luxury-cream">
              <p className="font-semibold">Owner: R. Parthiban</p>
              <p className="text-sm">15+ Years of Excellence</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold">Our Services</h4>
            <ul className="space-y-2 text-luxury-cream">
              <li>PVC Doors</li>
              <li>Fibre Doors</li>
              <li>Loft Covers</li>
              <li>Wall Panelling</li>
              <li>Wardrobes</li>
              <li>Kitchen Cabinets</li>
              <li>False Ceiling</li>
              <li>Complete Interiors</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold">Contact Us</h4>
            <div className="space-y-3 text-luxury-cream">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:9843155325" className="hover:text-luxury-gold transition-colors">
                    9843155325 (Primary)
                  </a>
                  <br />
                  <a href="tel:9843255326" className="hover:text-luxury-gold transition-colors">
                    9843255326 (Shop)
                  </a>
                  <br />
                  <a href="tel:9789455325" className="hover:text-luxury-gold transition-colors">
                    9789455325 (Shop)
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  2/1 B, Anna Nagar<br />
                  Maniyakarampalayam Road<br />
                  Ganapathy, Coimbatore - 641006
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-luxury-gold">Service Areas</h4>
            <div className="grid grid-cols-2 gap-1 text-sm text-luxury-cream">
              <div>Ganapathy</div>
              <div>Anna Nagar</div>
              <div>Peelamedu</div>
              <div>Saravanampatti</div>
              <div>Vadavalli</div>
              <div>RS Puram</div>
              <div>Race Course</div>
              <div>Singanallur</div>
            </div>
            <p className="text-luxury-cream text-sm mt-4">
              Serving Coimbatore and surrounding areas
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-luxury-cream text-sm">
              © {currentYear} Jayalakshmi Agency. All rights reserved.
            </div>
            <div className="flex space-x-6 text-luxury-cream text-sm">
              <span>Quality Assured</span>
              <span>•</span>
              <span>Expert Installation</span>
              <span>•</span>
              <span>Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
