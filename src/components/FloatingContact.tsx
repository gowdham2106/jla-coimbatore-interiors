
import { Phone } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="floating-contact animate-float">
      <Phone 
        className="w-6 h-6" 
        onClick={() => window.open('tel:9843155325')}
      />
    </div>
  );
};

export default FloatingContact;
