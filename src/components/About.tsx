const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="heading-section text-gallery-charcoal mb-6">About Me</h2>
            
            <div className="space-y-6 text-elegant text-gallery-gray">
              <p>
                Welcome to my creative world. I'm a passionate artist with over a decade of experience 
                exploring the intersection of traditional techniques and contemporary expression. My work 
                spans various mediums, from oil paintings to digital compositions, each piece reflecting 
                my ongoing dialogue with color, form, and emotion.
              </p>
              
              <p>
                Born and raised in an environment rich with artistic heritage, I've always been drawn 
                to the power of visual storytelling. My formal education in Fine Arts provided the 
                foundation, but it's the countless hours spent experimenting and pushing boundaries 
                that truly shaped my artistic voice.
              </p>
              
              <p>
                Today, my studio serves as a sanctuary where ideas transform into tangible expressions. 
                Whether working on commissioned pieces or personal explorations, I approach each project 
                with the same dedication to craftsmanship and authenticity that has defined my journey 
                as an artist.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gallery-border">
              <h3 className="text-lg font-medium text-gallery-charcoal mb-4">Education & Exhibitions</h3>
              <div className="space-y-3 text-sm text-gallery-gray">
                <div>
                  <p className="font-medium">MFA Fine Arts</p>
                  <p>University of Arts, 2018</p>
                </div>
                <div>
                  <p className="font-medium">Solo Exhibition</p>
                  <p>Contemporary Gallery, 2023</p>
                </div>
                <div>
                  <p className="font-medium">Group Exhibition</p>
                  <p>Modern Art Collective, 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Artist Photo */}
          <div className="order-first lg:order-last">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Artist portrait in natural lighting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gallery-accent rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;