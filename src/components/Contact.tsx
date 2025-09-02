import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gallery-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section text-gallery-charcoal mb-4">Get in Touch</h2>
          <p className="text-elegant text-gallery-gray max-w-2xl mx-auto">
            I'd love to hear from you. Whether you're interested in commissioning a piece, 
            collaborating on a project, or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-light text-gallery-charcoal mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gallery-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gallery-charcoal" />
                </div>
                <div>
                  <h4 className="font-medium text-gallery-charcoal mb-1">Email</h4>
                  <p className="text-gallery-gray">hello@yourname.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gallery-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gallery-charcoal" />
                </div>
                <div>
                  <h4 className="font-medium text-gallery-charcoal mb-1">Phone</h4>
                  <p className="text-gallery-gray">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gallery-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gallery-charcoal" />
                </div>
                <div>
                  <h4 className="font-medium text-gallery-charcoal mb-1">Studio</h4>
                  <p className="text-gallery-gray">
                    123 Art District<br />
                    Creative City, CA 90210
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gallery-border">
              <p className="text-gallery-gray text-sm leading-relaxed">
                Studio visits are welcome by appointment. I love meeting fellow art enthusiasts 
                and sharing the creative process behind each piece.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gallery-charcoal">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gallery-charcoal">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gallery-charcoal">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-2 min-h-[120px]"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-gallery-charcoal text-primary-foreground transition-colors duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;