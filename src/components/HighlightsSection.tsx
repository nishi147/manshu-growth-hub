import { BookOpen, Users, Wrench, Wallet } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const highlights = [
  { icon: BookOpen, title: "Industry-Relevant Courses", desc: "Curriculum aligned with current market demands and emerging trends." },
  { icon: Users, title: "Expert Mentors & Trainers", desc: "Learn from seasoned professionals with deep domain expertise." },
  { icon: Wrench, title: "Practical, Hands-On Learning", desc: "Real projects and case studies that build job-ready skills." },
  { icon: Wallet, title: "Flexible & Affordable Programs", desc: "Multiple formats and pricing to fit every schedule and budget." },
];

export default function HighlightsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Why Learners <span className="text-primary">Choose Us</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Empowering professionals with the skills that matter most.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={cn(
                "group bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                isVisible ? "animate-fade-up" : "opacity-0"
              )}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <h.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
