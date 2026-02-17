import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { PackageX, Clock, HandHelping, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: PackageX,
    title: "Questionable ingredients",
    description: "Pre-made cigarettes are full of additives you can't control. Awareness is growing, but alternatives are limited.",
  },
  {
    icon: Clock,
    title: "Rolling is slow and messy",
    description: "Hand rolling takes time, creates mess and odor. You do it multiple times a day, and there's no way to automate it.",
  },
  {
    icon: HandHelping,
    title: "Medical users need independence",
    description: "People with physical limitations often can't roll on their own. They depend on others for something that should be personal.",
  },
  {
    icon: ShieldAlert,
    title: "No fully automatic solution exists",
    description: "Semi-automatic devices still need manual steps. There is no product on the market that handles the entire process from start to finish.",
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
          <p className="text-sm uppercase tracking-widest text-foreground font-medium mb-3" data-testid="text-problem-label">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-problem-heading">
            A billion-dollar market with no real solution
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-problem-subtitle">
            Millions of people roll cigarettes and herbal blends every day. The process is manual, messy, and excludes those who need it most.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {problems.map((problem) => (
            <motion.div key={problem.title} variants={itemVariants}>
              <Card className="p-6 lg:p-8 h-full" data-testid={`card-problem-${problem.title.toLowerCase().replace(/\s+/g, "-").slice(0, 25)}`}>
                <div className="w-12 h-12 rounded-md bg-destructive/10 flex items-center justify-center mb-5">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`text-problem-title-${problem.title.toLowerCase().replace(/\s+/g, "-").slice(0, 15)}`}>
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
