"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Award, Target } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
// import pe from  "@/assets/pe.jpg";
import { BackgroundBeams } from "@/components/background-beams";

const About = () => {
  const topSkills = [
    "Public Health Awareness",
    "Patient Interaction", 
    "Clinical Communication"
  ];

  const honors = [
    "Headmaster's List (Grade 9 – 12)",
    "National Merit Scholarship Program Qualifier",
    "JSHS Regional Winner",
    "1st Place, JSHS Regional Poster Competition",
    "National Honor Society Member"
  ];

  const stats = [
    { number: "50+", label: "Clinical Hours", icon: Stethoscope },
    { number: "$5K+", label: "Funds Raised", icon: Target },
    { number: "5", label: "Major Awards", icon: Award },
  ];

  const [titleRef, titleVisible] = useScrollAnimation();
  const [statsRef, statsAnimated] = useStaggeredAnimation(stats.length, 200);
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 relative py-24 bg-black/90"
      style={{
        // backgroundImage: `url(${pe})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className=" max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming healthcare through research, education, and compassionate patient care
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const isAnimated = statsAnimated.has(index);
            return (
              <Card 
                key={index} 
                className={`bg-gradient-primary backdrop-blur-sm border-2 hover:border-primary/40 transition-all duration-500 hover:shadow-glow group cursor-pointer transform ${
                  isAnimated ? 'animate-scale-in' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <IconComponent className="w-8 h-8 text-background" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div ref={contentRef} className={`grid lg:grid-cols-2 gap-16 items-start transition-all duration-1000 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-8 animate-slide-in-left"
               style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a student at Windermere Preparatory School and an aspiring physician passionate about 
                patient-centered care, medical research, and health equity. With a rigorous foundation in 
                IB and AP coursework, I've developed key skills in bioinformatics, data analysis, clinical 
                communication, and ethical reasoning — all reinforced by direct, hands-on experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Research Intern at EigenSciences, I contributed to computational modeling of RNA aptamers 
                targeting glioblastoma, analyzing molecular datasets and co-authoring formal research reports. 
                At the UCF College of Medicine, I served as the first teenage standardized patient, helping 
                shape adolescent patient simulation training.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My clinical exposure includes over 50 hours of shadowing in pediatric and orthopedic surgical 
                settings, where I observed consultations, procedures, and post-op care. I also lead 
                service-oriented initiatives, raising over $5,000 and boosting service participation by 25%.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-up" 
               style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
            <Card className="bg-gradient-primary backdrop-blur-sm border-2 hover:border-primary/40 transition-all duration-500 hover:shadow-glow group overflow-hidden hover:scale-105">
              <div className="absolute inset-0 bg-gradient-primary group-hover:opacity-10 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Target className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-muted-foreground">Core Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {topSkills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/25 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary backdrop-blur-sm border-2 hover:border-primary/40 transition-all duration-500 hover:shadow-glow group overflow-hidden hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: '800ms', animationFillMode: 'both' }}>
              <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Award className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-muted-foreground">Honors & Awards</h3>
                </div>
                <ul className="space-y-3">
                  {honors.map((honor, index) => (
                    <li key={index} className="text-muted-foreground flex items-start group/item animate-fade-in"
                        style={{ animationDelay: `${1000 + index * 100}ms`, animationFillMode: 'both' }}>
                      <span className="text-primary mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300 animate-bounce-gentle">•</span>
                      <span className="group-hover/item:text-foreground transition-colors duration-300">{honor}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
           <BackgroundBeams />
      </div>
    </section>
  );
};

export default About;