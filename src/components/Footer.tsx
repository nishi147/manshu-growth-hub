import { Mail, Phone, MapPin } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-14">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img src="/logo_manshu.png" alt="Manshu Learning" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed opacity-70">
              Empowering professionals and organizations through industry-relevant learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Corporate Training</li>
              <li>E-Learning Programs</li>
              <li>Skill Development</li>
              <li>Executive Coaching</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail size={14} /> info@manshulearning.com
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone size={14} /> 010-020-0340
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <MapPin size={14} /> Guntur, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center">
          <p className="text-sm opacity-60">
            © 2025 Manshu Learning. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
