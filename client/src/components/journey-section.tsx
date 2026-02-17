import { motion } from "framer-motion";
import prototypeOpen from "@assets/IMG_3493_1771287297010.jpeg";
import prototypeDisplay from "@assets/IMG_3469_1771287297010.jpeg";
import prototypeExploded from "@assets/IMG_2378_1771287297010.jpeg";
import prosperaLocation from "@assets/IMG_1849_1771287297010.jpeg";
import miamiWorkspace from "@assets/IMG_6387_1771287297010.jpeg";
import prosperaDistrict from "@assets/IMG_6352_1771287297010.jpeg";

const journeySteps = [
  {
    images: [prototypeExploded, prototypeOpen],
    title: "Invented & Prototyped",
    location: "Pr\u00f3spera, Honduras",
    description: "Daniel designed every component himself and hand-built the first working prototype in Pr\u00f3spera \u2014 a special economic zone in Honduras known for attracting builders and innovators from around the world.",
  },
  {
    images: [prototypeDisplay, prosperaLocation],
    title: "Refined the Engineering",
    location: "ZEDE Innovation Hub",
    description: "From raw electronics and 3D-printed parts to a functional device with an integrated display, motor system, and rolling mechanism. Each iteration brought JB5 closer to production readiness.",
  },
  {
    images: [miamiWorkspace, prosperaDistrict],
    title: "Scaling Up",
    location: "Miami & Los Angeles",
    description: "With a working prototype in hand, Daniel moved to Miami and LA to build the business connections needed to take JB5 from prototype to industrial serial production and global distribution.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function JourneySection() {
  return (
    <section
      id="journey"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-journey"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-foreground font-medium mb-3" data-testid="text-journey-label">
            From Idea to Reality
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-journey-heading">
            The JB5 Journey
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-journey-subtitle">
            Built from scratch by a solo inventor. No venture capital. No big team. Just relentless engineering across three countries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16 lg:space-y-24"
        >
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
              data-testid={`journey-step-${index}`}
            >
              <div className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                {step.images.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="overflow-hidden rounded-md aspect-[4/3]"
                  >
                    <img
                      src={img}
                      alt={`${step.title} - ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                      data-testid={`img-journey-${index}-${imgIndex}`}
                    />
                  </div>
                ))}
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold"
                    data-testid={`text-journey-step-number-${index}`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className="text-xs uppercase tracking-widest text-muted-foreground font-medium"
                    data-testid={`text-journey-location-${index}`}
                  >
                    {step.location}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4" data-testid={`text-journey-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-journey-desc-${index}`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
