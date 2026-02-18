import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import staraccesLogo from "@assets/IMG_0709_1771285225052.jpeg";

export function Footer() {
  const [location] = useLocation();

  const scrollTo = (id: string) => {
    if (location !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer role="contentinfo" aria-label="Site footer" className="py-12 bg-background border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
            <div className="flex items-center gap-3">
              <img
                src={staraccesLogo}
                alt="Staracces Innovations"
                className="h-8 w-8 rounded-md object-cover"
                data-testid="img-footer-logo"
              />
              <span className="text-sm font-semibold text-foreground tracking-wider" data-testid="text-footer-brand">
                STARACCES
              </span>
            </div>

            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6">
              <button
                onClick={() => scrollTo("solution")}
                className="text-xs text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md"
                data-testid="link-footer-solution"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollTo("benefits")}
                className="text-xs text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md"
                data-testid="link-footer-benefits"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollTo("feedback")}
                className="text-xs text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md"
                data-testid="link-footer-feedback"
              >
                Feedback
              </button>
              <button
                onClick={() => scrollTo("pricing")}
                className="text-xs text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md"
                data-testid="link-footer-pricing"
              >
                Pricing
              </button>
              <Link
                href="/contact"
                className="text-xs text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md"
                data-testid="link-footer-contact"
              >
                Contact
              </Link>
              <Link
                href="/imprint"
                className="text-xs text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md"
                data-testid="link-footer-imprint"
              >
                Imprint
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground hover-elevate active-elevate-2 px-1 py-0.5 rounded-md"
                data-testid="link-footer-privacy"
              >
                Privacy
              </Link>
            </nav>
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-xs text-muted-foreground" data-testid="text-copyright">
              &copy; 2026 Staracces UG (haftungsbeschr&auml;nkt)
            </p>
            <p className="text-xs text-muted-foreground" data-testid="text-location">
              Los Angeles, CA / Germany
            </p>
            <a
              href="mailto:info@staracces.com"
              className="text-xs text-muted-foreground hover-elevate px-1 py-0.5 rounded-md"
              data-testid="link-email"
            >
              info@staracces.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
