import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Shop from '@/components/Shop';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <Shop />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
