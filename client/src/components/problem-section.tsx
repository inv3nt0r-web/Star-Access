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

const smoothEase = [0.25, 0.1, 0.25, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
};

export function ProblemSection() {
  return (
    <section
      id="problems"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-problems"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-problem-label">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-problem-heading">
            A billion-dollar market with no real solution
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed" data-testid="text-problem-subtitle">
            Millions of people roll cigarettes and herbal blends every day. The process is manual, messy, and excludes those who need it most.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-0"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className={`py-10 px-8 lg:px-12 ${
                index < 2 ? "border-b border-border/40" : ""
              } ${
                index % 2 === 0 ? "sm:border-r border-border/40" : ""
              }`}
              data-testid={`card-problem-${problem.title.toLowerCase().replace(/\s+/g, "-").slice(0, 25)}`}
            >
              <div className="w-8 h-8 rounded-md bg-muted/50 flex items-center justify-center mb-6">
                <problem.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight" data-testid={`text-problem-title-${problem.title.toLowerCase().replace(/\s+/g, "-").slice(0, 15)}`}>
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
