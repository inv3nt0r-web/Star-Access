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

const smoothEase = [0.25, 0.1, 0.25, 1];

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-24 lg:py-32 bg-card"
      data-testid="section-solution"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="text-center mb-6"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-solution-label">
            The Solution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-5" data-testid="text-solution-heading">
            The First Fully Automatic Rolling Machine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-solution-subtitle">
            JB5 handles everything: shredding, mixing, storing, rolling and closing. You choose the ingredients and the mix. One button, and your product is ready in seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: smoothEase }}
          className="flex flex-wrap justify-center gap-2 mt-10 mb-20"
        >
          {features.map((f) => (
            <Badge
              key={f.label}
              variant="outline"
              className="no-default-hover-elevate no-default-active-elevate gap-2 py-1.5 px-3 text-xs text-muted-foreground border-border/50"
              data-testid={`badge-feature-${f.label.toLowerCase()}`}
            >
              <f.icon className="h-3.5 w-3.5" />
              {f.label}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="flex justify-center">
              <img
                src={howItWorksImage}
                alt="How JB5 works - 4 simple steps"
                className="w-full max-w-sm rounded-md"
                data-testid="img-how-it-works"
              />
            </div>

            <div className="space-y-12">
              {[
                { step: "1", title: "Fill with herbs or tobacco", description: "Open the top compartment and add your preferred blend. JB5 shreds and mixes to your desired consistency." },
                { step: "2", title: "Load filters and papers", description: "Insert your filters and rolling papers into the built-in magazine. Holds up to 32 sheets and 6 filters." },
                { step: "3", title: "Push the button", description: "One press is all it takes. JB5's precision mechanism doses, rolls and seals automatically." },
                { step: "4", title: "Take out to enjoy", description: "Your perfectly rolled product slides out ready to use. Consistent quality, every single time." },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: Number(item.step) * 0.08, ease: smoothEase }}
                  className="flex gap-6"
                  data-testid={`step-${item.step}`}
                >
                  <span className="flex-shrink-0 text-2xl font-bold text-muted-foreground/40 tabular-nums leading-none pt-1">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5 tracking-tight" data-testid={`text-step-title-${item.step}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-step-desc-${item.step}`}>
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
          transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
          className="mt-24"
        >
          <Card className="overflow-visible p-8 lg:p-12" data-testid="card-engineering">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-engineering-label">
                  Production Ready
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-5 tracking-tight" data-testid="text-engineering-title">
                  From Prototype to Serial Production
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid="text-engineering-description">
                  JB5 is built with CNC-milled brushed aluminum housing, stainless steel cutting mechanisms, and precision stepper motors. The modular design makes it easy to clean and maintain.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  Currently in production preparation. CE certification is underway following EU Low Voltage Directive and Machinery Directive requirements. All materials comply with REACH and RoHS standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate text-xs text-muted-foreground border-border/50" data-testid="badge-ce">
                    CE Certification (In Progress)
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate text-xs text-muted-foreground border-border/50" data-testid="badge-reach">
                    REACH Materials
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate text-xs text-muted-foreground border-border/50" data-testid="badge-rohs">
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
