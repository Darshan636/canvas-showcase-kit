import heroArtwork from '@/assets/hero-artwork.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-sm shadow-medium">
              <img
                src={heroArtwork}
                alt="Featured artwork showcasing artistic style and technique"
                className="w-full h-auto object-cover gallery-item"
                loading="eager"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="heading-display text-gallery-charcoal mb-6">
              Creating Art That
              <span className="block text-gallery-gray">Speaks to the Soul</span>
            </h1>
            
            <p className="text-elegant text-gallery-gray mb-8 max-w-lg mx-auto lg:mx-0">
              Welcome to my artistic journey. Each piece is a reflection of emotion, 
              technique, and the endless pursuit of beauty through creative expression.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary text-primary-foreground hover:bg-gallery-charcoal transition-colors duration-300 rounded-sm font-light"
              >
                View Portfolio
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-gallery-border text-gallery-charcoal hover:bg-gallery-accent transition-colors duration-300 rounded-sm font-light"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;