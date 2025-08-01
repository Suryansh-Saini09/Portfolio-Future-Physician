import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, ChevronDown } from "lucide-react";
import pex from "@/assets/pex.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return ( 
    <section 
      className="min-h-screen flex items-center justify-center px-4 relative"
      style={{
        backgroundImage: `url(${pex})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Suvir Leekha Talamas
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aspiring Physician | Clinical Research Intern | JSHS Winner | National Merit Scholar | 
            Equity in Healthcare Advocate
          </p>
          <p className="text-lg text-muted-foreground">
            Windermere, Florida, United States
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button 
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            onClick={scrollToAbout}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        <div className="flex justify-center space-x-6 pt-8">
          <a 
            href="tel:+18478079237" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Phone"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a 
            href="mailto:suvirleekha145679@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/suvirleekha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;