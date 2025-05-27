
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm interested in your interior services.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919843155325?text=${whatsappMessage}`, '_blank');
  };

  const services = [
    'PVC Doors',
    'Fibre Doors', 
    'Loft Covers',
    'Wall Panelling',
    'Wardrobes',
    'Kitchen Cabinets',
    'False Ceiling',
    'Complete Interior Works'
  ];

  return (
    <section id="contact" className="py-20 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-brown mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Contact us for a free consultation and quote
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-luxury-brown mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-luxury-brown">Phone Numbers</h4>
                      <div className="space-y-1 mt-2">
                        <a 
                          href="tel:9843155325" 
                          className="block text-gray-700 hover:text-luxury-gold transition-colors"
                        >
                          📱 9843155325 (Primary)
                        </a>
                        <a 
                          href="tel:9843255326" 
                          className="block text-gray-700 hover:text-luxury-gold transition-colors"
                        >
                          🏪 9843255326 (Shop)
                        </a>
                        <a 
                          href="tel:9789455325" 
                          className="block text-gray-700 hover:text-luxury-gold transition-colors"
                        >
                          🏪 9789455325 (Shop)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-luxury-brown">Address</h4>
                      <p className="text-gray-700 mt-2 leading-relaxed">
                        2/1 B, Anna Nagar<br />
                        Maniyakarampalayam Road<br />
                        Ganapathy, Coimbatore - 641006
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0">👤</div>
                    <div>
                      <h4 className="font-semibold text-luxury-brown">Owner</h4>
                      <p className="text-gray-700 mt-2">R. Parthiban</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-8 space-y-3">
                  <Button 
                    className="w-full bg-luxury-gold hover:bg-luxury-brown text-white"
                    onClick={() => window.open('tel:9843155325')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now - 9843155325
                  </Button>
                  
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => window.open('https://wa.me/919843155325?text=Hello! I would like to inquire about your interior services.', '_blank')}
                  >
                    💬 WhatsApp Chat
                  </Button>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-luxury-brown text-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                <p className="text-luxury-cream mb-4">
                  We proudly serve Coimbatore and surrounding areas:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Ganapathy</div>
                  <div>• Anna Nagar</div>
                  <div>• Peelamedu</div>
                  <div>• Saravanampatti</div>
                  <div>• Vadavalli</div>
                  <div>• RS Puram</div>
                  <div>• Race Course</div>
                  <div>• Singanallur</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-luxury-brown mb-6">
                Get Free Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold transition-colors"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-luxury-gold hover:bg-luxury-brown text-white font-semibold py-3 text-lg"
                >
                  Send WhatsApp Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
