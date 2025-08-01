import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, Stethoscope, GraduationCap, FlaskConical, Users } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import nj from "@/assets/nj.jpg";

const Experience = () => {
  const experiences = [
    {
      
      title: "Nursing Specialist | Clinical Support & Patient Care | Medical Logistics",
      company: "Orlando Health Horizon West Hospital",
      period: "March 2025 - Present (5 months)",
      location: "Florida, United States",
      description: [
        "Proactively supported nursing staff by managing and restocking essential medical supplies and executing non-clinical patient care tasks.",
        "Enhanced patient well-being through frequent empathetic visits and attentive check-ups, demonstrating strong compassionate care and interpersonal communication skills.",
        "Gained practical insight into clinical workflows and hospital operations."
      ],
      skills: ["Patient Care", "Medical Logistics", "Clinical Communication"],
      icon: Stethoscope,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Standardized Patient | Medical Education Simulation & Communication Training",
      company: "University of Central Florida College of Medicine",
      period: "January 2025 - Present (7 months)",
      location: "Florida, United States",
      description: [
        "Selected as the first teenage standardized patient, portraying complex adolescent cases in multi-day clinical simulations.",
        "Collaborated with medical educators to enhance the adolescent training model, directly improving medical students' practice in communication, empathy, and diagnostic skills.",
        "Contributed to shaping a new standard for adolescent patient training, demonstrating significant impact on medical education development.",
        "Developed strong active listening and verbal communication skills through realistic patient interactions."
      ],
      skills: ["Medical Education", "Communication", "Patient Simulation"],
      icon: GraduationCap,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "SAT Tutor | Math & Reading/Writing Instruction | Academic Coaching",
      company: "Schoolhouse by Khan Academy",
      period: "2024 - Present (1 year)",
      location: "Remote",
      description: [
        "Designed and delivered three comprehensive SAT Prep Bootcamps, providing interactive and targeted instruction in Math and Reading & Writing.",
        "Supported significant score improvements for peer learners, demonstrating effective pedagogy and curriculum development.",
        "Utilized strong writing and public speaking skills to clarify complex concepts and engage diverse learners."
      ],
      skills: ["Academic Coaching", "Curriculum Development", "Public Speaking"],
      icon: Users,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Research Intern | Computational Biology & Glioblastoma Research | Data Analysis",
      company: "EigenSciences",
      period: "2024 - 2025 (1 year)",
      location: "Research Position",
      description: [
        "Conducted cutting-edge computational research on RNA aptamers targeting glioblastoma progression, utilizing advanced Bioinformatics techniques.",
        "Meticulously analyzed molecular data and contributed significantly to therapeutic modeling.",
        "Published formal research findings as part of a comprehensive report, demonstrating strong scientific writing and data interpretation abilities."
      ],
      skills: ["Computational Biology", "Data Analysis", "Research Writing"],
      icon: FlaskConical,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Clinical Observer | Pediatric & Orthopedic Surgical Shadowing | Medical Ethics",
      company: "Pediatric Associates of Orlando & Lakeland Regional Health",
      period: "September 2024 - December 2024 (4 months)",
      location: "Florida, United States",
      description: [
        "Completed 50 hours of clinical shadowing with a pediatrician and orthopedic surgeon, observing patient consultations, surgical procedures, and post-operative care.",
        "Gained invaluable firsthand insight into clinical workflows, physician-patient communication, and the ethical complexities of medical practice.",
        "Developed a foundational understanding of various medical specialties and direct patient interaction."
      ],
      skills: ["Clinical Observation", "Medical Ethics", "Patient Interaction"],
      icon: Building2,
      color: "from-teal-500/20 to-green-500/20"
    }
  ];

  const [titleRef, titleVisible] = useScrollAnimation();
  const [experienceRef, experienceAnimated] = useStaggeredAnimation(experiences.length, 300);

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 relative py-24 bg-background"
      style={{
        backgroundImage: `url(${nj})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in clinical settings, research, and medical education
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 hidden md:block"></div>
          
          <div ref={experienceRef} className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isAnimated = experienceAnimated.has(index);
              return (
                <div key={index} className={`relative group transition-all duration-700 ${
                  isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`} style={{ transitionDelay: `${index * 300}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background shadow-glow hidden md:block group-hover:scale-125 transition-transform duration-300 animate-glow-pulse"></div>
                  
                  <Card className={`ml-0 md:ml-20 bg-background/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow group overflow-hidden hover:translate-y-[-8px] hover:scale-[1.02] cursor-pointer`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <CardHeader className="pb-4 relative">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                            <IconComponent className="w-7 h-7 text-background group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="space-y-2 flex-1">
                            <CardTitle className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                              {exp.title}
                            </CardTitle>
                            <h3 className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                              {exp.company}
                            </h3>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 bg-background/50 px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4 text-primary" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2 bg-background/50 px-3 py-1 rounded-full">
                            <MapPin className="w-4 h-4 text-primary" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 relative">
                      <ul className="space-y-3">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start group/item">
                            <span className="text-primary mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-300">•</span>
                            <span className="group-hover/item:text-foreground transition-colors duration-300 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-primary/20">
                        {exp.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/15 hover:border-primary/50 transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;