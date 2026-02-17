import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SlidersHorizontal, Zap, EyeOff, CircleDot, Wrench, Blend } from "lucide-react";

const benefits = [
  {
    icon: SlidersHorizontal,
    title: "Full control over what you use",
    description: "You decide the ingredients and the mix. No hidden stuff from industrial packs.",
  },
  {
    icon: Zap,
    title: "Less effort in your daily routine",
    description: "No more rolling session after session. JB5 prepares your mix so you can focus on your moment.",
  },
  {
    icon: EyeOff,
    title: "Clean and more discreet",
    description: "Everything stays inside one closed system. Less smell in your room and less chaos on your table.",
  },
  {
    icon: CircleDot,
    title: "One-button operation",
    description: "Fill it up, push the button, done. It's that simple. No learning curve, no complicated setup.",
  },
  {
    icon: Wrench,
    title: "German precision engineering",
    description: "Built to last with high-quality components. Reliable performance, day after day.",
  },
  {
    icon: Blend,
    title: "Works with any blend",
    description: "Compatible with all your favorite herbs and tobacco substitutes. Full customization freedom.",
  },
];

const smoothEase = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
};

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-benefits"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
            Why JB5
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Meet the Benefits
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} variants={itemVariants}>
              <Card className="p-8 lg:p-10 h-full hover-elevate" data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}>
                <div className="w-9 h-9 rounded-md bg-muted/50 flex items-center justify-center mb-6">
                  <benefit.icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
