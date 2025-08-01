import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send, Heart } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import pexel from  "@/assets/pexel.jpg";

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardsRef, cardsAnimated] = useStaggeredAnimation(4, 200);
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 847-807-9237",
      href: "tel:+18478079237"
    },
    {
      icon: Mail,
      label: "Email",
      value: "suvirleekha145679@gmail.com",
      href: "mailto:suvirleekha145679@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/suvirleekha",
      href: "https://www.linkedin.com/in/suvirleekha"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Windermere, Florida, United States",
      href: null
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-background relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${pexel})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-primary opacity-30 animate-glow-pulse" />
      
      <div className="max-w-6xl mx-auto relative">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seeking opportunities in BS/MD programs, NIH internships, medical volunteering, 
            and translational healthcare research. Let's connect and shape the future of healthcare together!
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const isAnimated = cardsAnimated.has(index);
            return (
              <Card 
                key={index} 
                className={`bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow group overflow-hidden hover:translate-y-[-8px] hover:scale-105 cursor-pointer ${
                  isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                      <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-primary transition-colors duration-300 font-semibold text-lg group-hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-semibold text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className={`transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="bg-gradient-primary/10 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-500 hover:shadow-glow max-w-2xl mx-auto overflow-hidden hover:scale-105">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            
            <CardContent className="p-8 text-center relative">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow animate-bounce-gentle">
                <Heart className="w-8 h-8 text-background" />
              </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Let's collaborate on advancing healthcare through research, education, and compassionate patient care. 
              I'm excited to discuss opportunities and share our passion for medicine.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-primary text-background hover:opacity-90 transition-all duration-300 shadow-glow hover:shadow-xl hover:scale-105 group"
              >
                <a href="mailto:suvirleekha145679@gmail.com" className="flex items-center">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Email
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <a href="https://www.linkedin.com/in/suvirleekha" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;