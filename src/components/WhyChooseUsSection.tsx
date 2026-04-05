import { Award, Settings, Layers, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const reasons = [
  { icon: Award, title: "Experienced Trainers", desc: "Deep industry expertise across domains and verticals." },
  { icon: Settings, title: "Customized Programs", desc: "Tailored to align with your organizational goals." },
  { icon: Layers, title: "Blended Learning", desc: "Combining online, in-person, and self-paced methodologies." },
  { icon: TrendingUp, title: "Measurable Outcomes", desc: "Trackable ROI and performance-linked training results." },
];

export default function WhyChooseUsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why-us" ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Why <span className="text-primary">Choose Us</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Delivering excellence through experience, innovation, and results.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={cn(
                "text-center p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                isVisible ? "animate-fade-up" : "opacity-0"
              )}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
