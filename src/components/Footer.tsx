import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/yourartwork',
      description: 'Follow for daily inspiration'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/yourartwork',
      description: 'Art thoughts and updates'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/yourartwork',
      description: 'Connect with the community'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@yourname.com',
      description: 'Direct contact'
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gallery-white border-t border-gallery-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-light text-gallery-charcoal mb-4">Your Name</h3>
            <p className="text-gallery-gray text-sm leading-relaxed mb-6 max-w-md">
              Creating meaningful art that speaks to the soul. Each piece is a journey 
              of discovery, emotion, and technical exploration. Thank you for being 
              part of this artistic adventure.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gallery-accent hover:bg-gallery-charcoal hover:text-white transition-colors duration-300 rounded-sm flex items-center justify-center"
                  aria-label={`Follow on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-gallery-charcoal mb-4">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'Portfolio', 'About', 'Contact', 'Shop'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gallery-gray hover:text-gallery-charcoal transition-colors duration-300 text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-gallery-charcoal mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gallery-gray">
              <p>hello@yourname.com</p>
              <p>+1 (555) 123-4567</p>
              <p>
                123 Art District<br />
                Creative City, CA 90210
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gallery-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gallery-gray">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gallery-gray">
            <a href="#" className="hover:text-gallery-charcoal transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gallery-charcoal transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;