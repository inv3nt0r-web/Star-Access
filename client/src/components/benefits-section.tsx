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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-benefits"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Why JB5
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Meet the Benefits
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.title} variants={itemVariants}>
              <Card className="p-6 lg:p-8 h-full hover-elevate transition-all duration-300" data-testid={`card-benefit-${benefit.title.toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
