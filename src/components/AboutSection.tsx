import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — decorative block */}
          <div
            className={cn(
              "relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5",
              isVisible ? "animate-fade-up" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/logo_manshu.png" alt="Manshu Learning" className="w-40 md:w-56 opacity-80" />
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-2xl" />
          </div>

          {/* Right — text */}
          <div className={cn(isVisible ? "animate-fade-up" : "opacity-0")} style={{ animationDelay: "150ms" }}>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-6">
              About <span className="text-primary">Manshu Learning</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Manshu Learning is a professional training and development organization committed to delivering high-quality learning experiences. With a strong focus on practical application and industry relevance, we offer corporate training, skill development, and e-learning programs that empower individuals and organizations to achieve measurable growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of seasoned professionals brings decades of combined experience across multiple industries, ensuring every program is grounded in real-world expertise and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
