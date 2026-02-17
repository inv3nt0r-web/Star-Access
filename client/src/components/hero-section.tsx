import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-1"
          >
            <Badge variant="outline" className="mb-6 no-default-hover-elevate no-default-active-elevate border-white/20 text-white/80 bg-white/5 backdrop-blur-sm" data-testid="badge-engineering">
              German Engineering | Patent Pending
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6" data-testid="text-hero-heading">
              Less effort.{" "}
              <br />
              <span className="text-primary">More you.</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed" data-testid="text-hero-description">
              Fill up JB5 with your custom smoking herbs and your everyday essentials. JB5 does the rest and rolls it up at the push of a button.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollTo("pricing")}
                data-testid="button-hero-waitlist"
              >
                Join the Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white bg-white/5 backdrop-blur-sm"
                onClick={() => scrollTo("solution")}
                data-testid="button-hero-how"
              >
                See How It Works
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-full blur-[80px]" />
            <div className="relative">
              <img
                src={productImage}
                alt="JB5 Automatic Rolling Device"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                data-testid="img-hero-product"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollTo("problems")}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
          data-testid="button-scroll-down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
