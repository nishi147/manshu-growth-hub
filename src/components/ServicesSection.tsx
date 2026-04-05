import { Building2, Monitor, Lightbulb, UserCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Corporate Training Solutions",
    desc: "Customized training programs that address specific organizational challenges and drive measurable business outcomes.",
  },
  {
    icon: Monitor,
    title: "E-Learning Programs",
    desc: "Interactive, self-paced digital courses designed for maximum engagement and flexible scheduling.",
  },
  {
    icon: Lightbulb,
    title: "Skill Development Workshops",
    desc: "Intensive, hands-on workshops focused on building practical, in-demand professional skills.",
  },
  {
    icon: UserCheck,
    title: "Executive & Personal Coaching",
    desc: "One-on-one coaching sessions to enhance leadership capabilities and personal effectiveness.",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" ref={ref} className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Comprehensive learning solutions for every stage of professional growth.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={cn(
                "group relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden",
                isVisible ? "animate-fade-up" : "opacity-0"
              )}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
