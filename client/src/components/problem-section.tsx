import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PackageX, Clock, HandHelping } from "lucide-react";

const problems = [
  {
    icon: PackageX,
    title: "Pre-made packs",
    description: "You still buy pre-made cigarettes from a pack, even though you're not sure what's inside.",
  },
  {
    icon: Clock,
    title: "Time-consuming",
    description: "You would like to create your own mix, but rolling by hand every day costs time and energy.",
  },
  {
    icon: HandHelping,
    title: "Need help",
    description: "And when you need help, you have to ask someone in a discreet way, even though you actually want to stay independent.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ProblemSection() {
  return (
    <section
      id="problems"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-problems"
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
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Do you know this situation?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problems.map((problem) => (
            <motion.div key={problem.title} variants={itemVariants}>
              <Card className="p-6 lg:p-8 h-full" data-testid={`card-problem-${problem.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                  <problem.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
