import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormData = { name: "", phone: "", email: "", subject: "", message: "" };

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState<FormData>(initialForm);
  const [sending, setSending] = useState(false);

  const validate = (): string | null => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim()) return "Phone is required.";
    if (!/^[\d\s+\-().]{7,20}$/.test(form.phone)) return "Please enter a valid phone number.";
    if (!form.subject.trim()) return "Subject is required.";
    if (!form.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }

    setSending(true);
    try {
      // EmailJS integration — replace these IDs with your own
      await emailjs.send(
        "service_manshu",      // EmailJS service ID
        "template_manshu",     // EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"       // EmailJS public key
      );
      toast.success("Message sent successfully! We'll get back to you soon.");
      setForm(initialForm);
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section id="contact" ref={ref} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          Ready to transform your team? Let's start a conversation.
        </p>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={cn(
              "md:col-span-3 space-y-5",
              isVisible ? "animate-fade-up" : "opacity-0"
            )}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name *" value={form.name} onChange={update("name")} />
              <Input placeholder="Phone Number *" value={form.phone} onChange={update("phone")} />
            </div>
            <Input placeholder="Email Address *" type="email" value={form.email} onChange={update("email")} />
            <Input placeholder="Subject *" value={form.subject} onChange={update("subject")} />
            <Textarea
              placeholder="Your Message *"
              rows={5}
              value={form.message}
              onChange={update("message")}
              className="resize-none"
            />
            <Button type="submit" size="lg" className="w-full gap-2" disabled={sending}>
              {sending ? "Sending..." : "Send Message"} <Send size={18} />
            </Button>
          </form>

          {/* Contact info */}
          <div
            className={cn(
              "md:col-span-2 space-y-8",
              isVisible ? "animate-fade-up" : "opacity-0"
            )}
            style={{ animationDelay: "200ms" }}
          >
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Contact Information</h3>
              <p className="text-sm text-muted-foreground mb-6">
                We'd love to hear from you. Reach out via any of the channels below.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:info@manshulearning.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@manshulearning.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a href="tel:010-020-0340" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    010-020-0340
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-muted-foreground">Guntur, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
