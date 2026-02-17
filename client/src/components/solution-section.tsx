import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Scissors, Blend, Archive, RotateCcw, Lock, Leaf } from "lucide-react";
import howItWorksImage from "@assets/7B7B6E2B-5CD6-46D7-8101-7A977900F01C_1771285225052.png";
import prototypeImage from "@assets/IMG_2965_1771286187104.png";

const features = [
  { icon: Scissors, label: "Shredding" },
  { icon: Blend, label: "Mixing" },
  { icon: Archive, label: "Storing" },
  { icon: RotateCcw, label: "Rolling" },
  { icon: Lock, label: "Closing" },
  { icon: Leaf, label: "Any blend" },
];

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
          <p className="text-sm uppercase tracking-widest text-foreground font-medium mb-3" data-testid="text-solution-label">
            The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-solution-heading">
            The First Fully Automatic Rolling Machine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-solution-subtitle">
            JB5 handles everything: shredding, mixing, storing, rolling and closing. You choose the ingredients and the mix. One button, and your product is ready in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mt-8 mb-16"
        >
          {features.map((f) => (
            <Badge
              key={f.label}
              variant="outline"
              className="no-default-hover-elevate no-default-active-elevate gap-2 py-2 px-4"
              data-testid={`badge-feature-${f.label.toLowerCase()}`}
            >
              <f.icon className="h-4 w-4" />
              {f.label}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
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
                { step: "1", title: "Fill with herbs or tobacco", description: "Open the top compartment and add your preferred blend. JB5 shreds and mixes to your desired consistency." },
                { step: "2", title: "Load filters and papers", description: "Insert your filters and rolling papers into the built-in magazine. Holds up to 32 sheets and 6 filters." },
                { step: "3", title: "Push the button", description: "One press is all it takes. JB5's precision mechanism doses, rolls and seals automatically." },
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
                    <h3 className="text-lg font-semibold text-foreground mb-1" data-testid={`text-step-title-${item.step}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-step-desc-${item.step}`}>
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
          <Card className="overflow-visible p-6 lg:p-10" data-testid="card-engineering">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest text-foreground font-medium mb-3" data-testid="text-engineering-label">
                  Production Ready
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4" data-testid="text-engineering-title">
                  From Prototype to Serial Production
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-engineering-description">
                  JB5 is built with CNC-milled brushed aluminum housing, stainless steel cutting mechanisms, and precision stepper motors. The modular design makes it easy to clean and maintain.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently in production preparation. CE certification is underway following EU Low Voltage Directive and Machinery Directive requirements. All materials comply with REACH and RoHS standards.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-ce">
                    CE Certification (In Progress)
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-reach">
                    REACH Materials
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-rohs">
                    RoHS Materials
                  </Badge>
                </div>
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
