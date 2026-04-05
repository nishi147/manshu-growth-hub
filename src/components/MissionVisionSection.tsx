import { Target, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function MissionVisionSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
          Our <span className="text-primary">Purpose</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission */}
          <div
            className={cn(
              "bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow",
              isVisible ? "animate-fade-up" : "opacity-0"
            )}
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To design and deliver structured, impactful, and innovative learning solutions that enhance personal effectiveness and drive organizational success.
            </p>
          </div>

          {/* Vision */}
          <div
            className={cn(
              "bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow",
              isVisible ? "animate-fade-up" : "opacity-0"
            )}
            style={{ animationDelay: "150ms" }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-5">
              <Eye className="text-accent" size={24} />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a trusted global partner in professional learning and corporate development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
