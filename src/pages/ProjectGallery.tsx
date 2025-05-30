
import { useParams, useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProjectGallery = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Project-specific image galleries
  const projectGalleries = {
    '1': { // Modern Kitchen Transformation
      title: "Modern Kitchen Transformation",
      images: [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
        "https://images.unsplash.com/photo-1556909075-f3584a6a8867",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
        "https://images.unsplash.com/photo-1556909075-f3584a6a8867"
      ]
    },
    '2': { // Luxury Wardrobe Design
      title: "Luxury Wardrobe Design",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
      ]
    },
    '3': { // Bathroom Door Installation
      title: "Bathroom Door Installation",
      images: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
        "https://images.unsplash.com/photo-1620626011761-996317b8d101",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
      ]
    },
    '4': { // Living Room False Ceiling
      title: "Living Room False Ceiling",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e",
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221"
      ]
    },
    '5': { // Office Interior Design
      title: "Office Interior Design",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586"
      ]
    },
    '6': { // Bedroom Loft Storage
      title: "Bedroom Loft Storage",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        "https://images.unsplash.com/photo-1571508601893-7d6c32e69ebb"
      ]
    }
  };

  const currentProject = projectGalleries[projectId as keyof typeof projectGalleries];

  if (!currentProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-luxury-brown mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-luxury-gold text-white px-6 py-3 rounded-lg hover:bg-luxury-brown transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-white text-xl font-semibold">{currentProject.title}</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-white hover:text-luxury-gold transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Main Image Display */}
      <div className="pt-16 h-screen flex items-center justify-center relative">
        <button 
          onClick={prevImage}
          className="absolute left-4 z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="max-w-6xl max-h-[80vh] w-full h-full flex items-center justify-center px-16">
          <img 
            src={currentProject.images[selectedImageIndex]}
            alt={`${currentProject.title} - Image ${selectedImageIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>

        <button 
          onClick={nextImage}
          className="absolute right-4 z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
          {selectedImageIndex + 1} / {currentProject.images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
        <div className="flex justify-center space-x-2 overflow-x-auto max-w-6xl mx-auto">
          {currentProject.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImageIndex === index 
                  ? 'border-luxury-gold scale-110' 
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img 
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
