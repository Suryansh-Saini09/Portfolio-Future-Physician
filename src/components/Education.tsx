import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import pexe from "@/assets/pexe.jpg";

const Education = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [cardRef, cardVisible] = useScrollAnimation();

  const highlights = [
    { icon: BookOpen, label: "IB & AP Coursework", description: "Advanced academic foundation" },
    { icon: Award, label: "Pre-Medical Focus", description: "Specialized healthcare track" },
    { icon: GraduationCap, label: "Research Skills", description: "Data analysis & ethics" }
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center px-4 relative py-24 bg-background" 
      style={{
        backgroundImage: `url(${pexe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-blue-900  mb-6">
            Education
          </h2> */}
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Building a strong academic foundation for future medical career
          </p>
        </div>

        <div ref={cardRef} className={`transition-all duration-1000 ${
          cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Card className="bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow group overflow-hidden hover:scale-105 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
            <CardHeader className="text-center pb-6 relative">
              <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                <GraduationCap className="w-10 h-10 text-blue-900" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Windermere Preparatory School
              </CardTitle>
              <div className="flex items-center justify-center gap-2 text-muted-foreground bg-background/50 rounded-full px-4 py-2 mx-auto w-fit">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Expected Graduation: May 2026</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 relative">
              <div className="text-center">
                <p className="text-2xl text-primary font-bold mb-4 group-hover:text-primary/80 transition-colors duration-300">High School Diploma</p>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                  Pursuing a rigorous academic foundation with IB and AP coursework, focusing on 
                  pre-medical studies, bioinformatics, and scientific research. Developing key skills 
                  in data analysis, clinical communication, and ethical reasoning through comprehensive 
                  academic and practical experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-primary/20">
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon;
                  return (
                    <div key={index} className="text-center group/highlight animate-fade-in-up"
                         style={{ animationDelay: `${800 + index * 200}ms`, animationFillMode: 'both' }}>
                      <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover/highlight:bg-primary/25 transition-colors duration-300 group-hover/highlight:scale-110">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-1 group-hover/highlight:text-primary transition-colors duration-300">{highlight.label}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;