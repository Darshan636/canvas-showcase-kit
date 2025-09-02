import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock shop data - replace with your actual products
const products = [
  {
    id: 1,
    title: "Abstract Harmony",
    price: 1200,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    category: "Original Painting",
    dimensions: "24\" x 30\"",
    medium: "Oil on Canvas"
  },
  {
    id: 2,
    title: "Urban Dreams",
    price: 850,
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&h=600&fit=crop",
    category: "Limited Print",
    dimensions: "18\" x 24\"",
    medium: "Giclée Print"
  },
  {
    id: 3,
    title: "Textured Emotions",
    price: 2100,
    image: "https://images.unsplash.com/photo-1578662015462-0dcc80b2d20d?w=600&h=600&fit=crop",
    category: "Original Painting",
    dimensions: "36\" x 48\"",
    medium: "Mixed Media"
  },
  {
    id: 4,
    title: "Minimalist Study",
    price: 650,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    category: "Limited Print",
    dimensions: "12\" x 16\"",
    medium: "Archival Print"
  }
];

const Shop = () => {
  const handleAddToCart = (product: typeof products[0]) => {
    // This would integrate with your e-commerce solution
    console.log('Added to cart:', product);
    // You could show a toast notification here
  };

  return (
    <section id="shop" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-gallery-charcoal mb-4">Shop</h2>
          <p className="text-elegant text-gallery-gray max-w-2xl mx-auto">
            Bring my artwork into your space. Each piece is carefully created and available 
            as original works or high-quality limited edition prints.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="gallery-item group"
            >
              <div className="relative overflow-hidden rounded-sm shadow-soft mb-4">
                <img
                  src={product.image}
                  alt={`${product.title} - ${product.category}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gallery-charcoal text-xs px-2 py-1 rounded-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gallery-charcoal mb-1">{product.title}</h3>
                  <p className="text-sm text-gallery-gray">{product.medium}</p>
                  <p className="text-sm text-gallery-gray">{product.dimensions}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-light text-gallery-charcoal">
                    ${product.price.toLocaleString()}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="bg-primary hover:bg-gallery-charcoal text-primary-foreground transition-colors duration-300"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shop Info */}
        <div className="mt-16 pt-16 border-t border-gallery-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-medium text-gallery-charcoal mb-3">Shipping</h3>
              <p className="text-sm text-gallery-gray">
                Carefully packaged and insured shipping worldwide. 
                Free shipping on orders over $500.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gallery-charcoal mb-3">Authenticity</h3>
              <p className="text-sm text-gallery-gray">
                All originals include a certificate of authenticity 
                and are signed by the artist.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gallery-charcoal mb-3">Custom Orders</h3>
              <p className="text-sm text-gallery-gray">
                Interested in a commission? Contact me to discuss 
                custom artwork for your space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;