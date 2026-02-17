import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "How It Works", id: "solution" },
    { label: "Benefits", id: "benefits" },
    { label: "Market", id: "market" },
    { label: "Feedback", id: "feedback" },
    { label: "Pre-Order", id: "pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl border-b border-border/40"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 h-14">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center"
            data-testid="link-logo"
          >
            <span className="text-base font-semibold tracking-tight text-foreground">
              STARACCES
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs text-muted-foreground transition-colors duration-200 hover-elevate active-elevate-2 px-3 py-1.5 rounded-md"
                data-testid={`link-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => scrollTo("pricing")}
              className="hidden md:inline-flex"
              data-testid="button-header-waitlist"
            >
              Pre-Order
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-border/40"
            data-testid="nav-mobile"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm text-muted-foreground transition-colors py-2.5 hover-elevate active-elevate-2 px-3 rounded-md"
                  data-testid={`link-mobile-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="sm"
                onClick={() => scrollTo("pricing")}
                className="mt-3"
                data-testid="button-mobile-waitlist"
              >
                Pre-Order
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
