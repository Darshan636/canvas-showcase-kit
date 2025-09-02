import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock portfolio data - replace with your actual artwork
const artworks = [
  {
    id: 1,
    title: "Ethereal Landscapes",
    category: "Painting",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    description: "A series exploring the connection between nature and emotion through abstract landscapes."
  },
  {
    id: 2,
    title: "Urban Reflections",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=600&fit=crop",
    description: "Capturing the beauty in everyday urban moments and reflections."
  },
  {
    id: 3,
    title: "Textured Emotions",
    category: "Mixed Media",
    image: "https://images.unsplash.com/photo-1578662015462-0dcc80b2d20d?w=800&h=600&fit=crop",
    description: "Mixed media pieces that explore human emotions through texture and color."
  },
  {
    id: 4,
    title: "Minimalist Forms",
    category: "Sculpture",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    description: "Clean, minimalist sculptures that focus on form and negative space."
  },
  {
    id: 5,
    title: "Color Studies",
    category: "Painting",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=600&fit=crop",
    description: "An exploration of color relationships and their emotional impact."
  },
  {
    id: 6,
    title: "Digital Dreams",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1578662015462-0dcc80b2d20d?w=800&h=600&fit=crop",
    description: "Digital artworks that blend traditional techniques with modern technology."
  }
];

const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (artwork: typeof artworks[0]) => {
    setSelectedArtwork(artwork);
    setCurrentIndex(artworks.findIndex(art => art.id === artwork.id));
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
  };

  const nextArtwork = () => {
    const nextIndex = (currentIndex + 1) % artworks.length;
    setCurrentIndex(nextIndex);
    setSelectedArtwork(artworks[nextIndex]);
  };

  const prevArtwork = () => {
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    setCurrentIndex(prevIndex);
    setSelectedArtwork(artworks[prevIndex]);
  };

  return (
    <section id="portfolio" className="py-20 bg-gallery-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-gallery-charcoal mb-4">Portfolio</h2>
          <p className="text-elegant text-gallery-gray max-w-2xl mx-auto">
            A curated selection of my recent works, spanning various mediums and techniques.
            Each piece represents a unique exploration of form, color, and meaning.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="gallery-item cursor-pointer group"
              onClick={() => openLightbox(artwork)}
            >
              <div className="relative overflow-hidden rounded-sm shadow-soft">
                <img
                  src={artwork.image}
                  alt={`${artwork.title} - ${artwork.category} artwork`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-medium text-lg">{artwork.title}</h3>
                    <p className="text-sm text-white/80">{artwork.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedArtwork && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X size={24} />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={prevArtwork}
              >
                <ChevronLeft size={24} />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                onClick={nextArtwork}
              >
                <ChevronRight size={24} />
              </Button>

              {/* Artwork */}
              <div className="bg-white rounded-sm overflow-hidden shadow-strong">
                <img
                  src={selectedArtwork.image}
                  alt={`${selectedArtwork.title} - Full view`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-light text-gallery-charcoal mb-2">
                    {selectedArtwork.title}
                  </h3>
                  <p className="text-gallery-gray mb-4">{selectedArtwork.category}</p>
                  <p className="text-elegant text-gallery-gray">
                    {selectedArtwork.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;