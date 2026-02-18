import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBackground from "@assets/IMG_1525_1771285225052.jpeg";
import productImage from "@assets/C29A54D1-2496-4398-AC3D-1F56EB929DFB_1771286187104.png";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="JB5 product showcase background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center lg:text-left order-1"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6 font-medium" data-testid="badge-engineering">
              German Engineering
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8" data-testid="text-hero-heading">
              Less effort.
              <br />
              More you.
            </h1>

            <p className="text-base lg:text-lg text-white/60 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed" data-testid="text-hero-description">
              The first fully automatic rolling machine. Fill it up, push the button, done.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollTo("pricing")}
                data-testid="button-hero-waitlist"
              >
                Pre-Order Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 text-white bg-white/5 backdrop-blur-md"
                onClick={() => scrollTo("solution")}
                data-testid="button-hero-how"
              >
                See How It Works
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            className="relative flex items-center justify-center order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 rounded-full blur-[100px]" />
            <div className="relative">
              <img
                src={productImage}
                alt="JB5 Automatic Rolling Device"
                className="w-full max-w-md mx-auto"
                data-testid="img-hero-product"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollTo("problems")}
          aria-label="Scroll to next section"
          className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
          data-testid="button-scroll-down"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
