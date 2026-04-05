import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>
      <div
        className={cn(
          "container mx-auto px-4 text-center relative",
          isVisible ? "animate-fade-up" : "opacity-0"
        )}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Partner with Manshu Learning to build future-ready teams.
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
          Let's design a learning journey tailored to your organization's unique needs.
        </p>
        <a href="#contact">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 text-base px-8 font-semibold"
          >
            Get in Touch <ArrowRight size={18} />
          </Button>
        </a>
      </div>
    </section>
  );
}
