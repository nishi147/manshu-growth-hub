import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "HR Director, TechVista Solutions",
    text: "Manshu Learning transformed our team's capabilities. The customized corporate training program was perfectly aligned with our goals, and we saw a measurable improvement in productivity within three months.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager, GrowthEdge Inc.",
    text: "The e-learning programs are exceptionally well-structured. Our team found the content practical and immediately applicable. The flexibility of the platform was a major advantage for our distributed workforce.",
    stars: 5,
  },
  {
    name: "Amit Patel",
    role: "CEO, InnovatePro Consulting",
    text: "Working with Manshu Learning for executive coaching was a game-changer. The personalized approach and deep industry insight helped me refine my leadership style and drive better outcomes for our clients.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Trusted by professionals and organizations across industries.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={cn(
                "bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow relative",
                isVisible ? "animate-fade-up" : "opacity-0"
              )}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
