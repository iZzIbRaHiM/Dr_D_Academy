import { navLinks } from "@/content/site-data";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-serif text-2xl font-bold gold-gradient-text">
              Dr D Academy
            </span>
            <p className="text-muted-foreground font-sans text-sm mt-4 leading-relaxed">
              The premier trading institute dedicated to transforming aspiring
              traders into consistently profitable professionals through
              simplified, proven strategies.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground font-sans text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">
              Contact
            </h4>
            <div className="space-y-3 text-muted-foreground font-sans text-sm">
              <p>info@drdacademy.com</p>
              <p>+92 315 2191891</p>
              <p>10:00 AM - 07:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground font-sans text-sm">
            © {new Date().getFullYear()} Dr D Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
