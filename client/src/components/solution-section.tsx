import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import howItWorksImage from "@assets/7B7B6E2B-5CD6-46D7-8101-7A977900F01C_1771285225052.png";
import prototypeImage from "@assets/IMG_2965_1771286187104.png";

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-24 lg:py-32 bg-card dark:bg-card"
      data-testid="section-solution"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            JB5 = The Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            JB5 turns loose ingredients into ready to enjoy smoking products without you doing the work. You choose what goes in, JB5 takes care of the process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center">
              <img
                src={howItWorksImage}
                alt="How JB5 works - 4 simple steps"
                className="w-full max-w-sm rounded-md"
                data-testid="img-how-it-works"
              />
            </div>

            <div className="space-y-8">
              {[
                { step: "1", title: "Fill with herbs or tobacco", description: "Open the top compartment and add your preferred blend of herbs, tobacco, or any custom mix." },
                { step: "2", title: "Load filters and papers", description: "Insert your filters and rolling papers into the magazine. JB5 accepts standard sizes." },
                { step: "3", title: "Push the button", description: "One press is all it takes. JB5's precision mechanism does the rest automatically." },
                { step: "4", title: "Take out to enjoy", description: "Your perfectly rolled product slides out ready to use. Consistent quality, every single time." },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: Number(item.step) * 0.1 }}
                  className="flex gap-5"
                  data-testid={`step-${item.step}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20"
        >
          <Card className="overflow-visible p-6 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3" data-testid="text-engineering-label">
                  Behind the Scenes
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4" data-testid="text-engineering-title">
                  Real German Engineering
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-engineering-description">
                  JB5 isn't just a concept — it's being built with real precision engineering. Our prototype is actively developed with high-quality components, tested rigorously for reliability and performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every detail is crafted to deliver a seamless one-button experience you can count on, day after day.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={prototypeImage}
                  alt="JB5 engineering prototype in development"
                  className="w-full max-w-sm rounded-md object-cover"
                  data-testid="img-prototype"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
