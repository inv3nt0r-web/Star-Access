import { motion } from "framer-motion";
import staraccesLogo from "@assets/IMG_0709_1771285225052.jpeg";

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 lg:py-20 bg-background border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-center mb-12">
            <div className="mb-6">
              <img
                src={staraccesLogo}
                alt="Staracces Innovations"
                className="h-32 w-auto rounded-md"
                data-testid="img-footer-logo"
              />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="text-footer-brand">JB5</h3>
            <p className="text-muted-foreground" data-testid="text-footer-contact">
              Questions? Email us at{" "}
              <a
                href="mailto:info@staracces.com"
                className="text-primary"
                data-testid="link-email"
              >
                info@staracces.com
              </a>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-12">
            {[
              { label: "How It Works", id: "solution" },
              { label: "Benefits", id: "benefits" },
              { label: "Pricing", id: "pricing" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md"
                data-testid={`link-footer-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:info@staracces.com"
              className="text-sm text-muted-foreground transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md"
              data-testid="link-footer-contact-email"
            >
              Contact
            </a>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              &copy; 2026 STARACCES | Staracces UG (haftungsbeschr&auml;nkt)
            </p>
            <p className="text-xs text-muted-foreground mt-1" data-testid="text-location">
              Los Angeles, CA / Germany | Patent Pending
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
