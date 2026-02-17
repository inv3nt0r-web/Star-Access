import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, Heart } from "lucide-react";

const stats = [
  { value: "$105B", label: "Market size 2025", sublabel: "Pre-rolls segment" },
  { value: "$822B", label: "Projected by 2032", sublabel: "7.8x growth" },
  { value: "+11.9%", label: "Annual growth rate", sublabel: "Revenue CAGR" },
  { value: "0", label: "Competitors", sublabel: "Fully automatic" },
];

const segments = [
  {
    icon: Users,
    title: "Adult Consumers",
    description: "Health-conscious smokers who want control over ingredients and avoid industrial additives.",
  },
  {
    icon: Heart,
    title: "Medical Users",
    description: "People with physical limitations who need independence in preparing their prescribed herbal products.",
  },
  {
    icon: Building2,
    title: "B2B Partners",
    description: "Coffeeshops, delivery services, and dispensaries looking for in-house production capability.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function MarketSection() {
  return (
    <section
      id="market"
      className="py-24 lg:py-32 bg-card dark:bg-card"
      data-testid="section-market"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-foreground font-medium mb-3" data-testid="text-market-label">
            Market Opportunity
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-market-heading">
            A $822 Billion Market by 2032
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-market-subtitle">
            Legalization is driving unprecedented demand for cannabis and tobacco products. Pre-rolls are the fastest growing segment with dynamic growth worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="p-5 lg:p-6 text-center h-full" data-testid={`card-stat-${stat.value.toLowerCase().replace(/[^a-z0-9]/g, "")}`}>
                <p className="text-2xl lg:text-3xl font-bold text-foreground mb-1" data-testid={`text-stat-value-${stat.value.toLowerCase().replace(/[^a-z0-9]/g, "")}`}>
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-foreground" data-testid={`text-stat-label-${stat.value.toLowerCase().replace(/[^a-z0-9]/g, "")}`}>
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground" data-testid="text-segments-heading">
            Target Segments
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {segments.map((seg) => (
            <motion.div key={seg.title} variants={itemVariants}>
              <Card className="p-6 lg:p-8 h-full" data-testid={`card-segment-${seg.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                  <seg.icon className="h-6 w-6 text-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3" data-testid={`text-segment-title-${seg.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  {seg.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{seg.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Card className="p-6 lg:p-8 inline-block" data-testid="card-business-model">
            <p className="text-sm uppercase tracking-widest text-foreground font-medium mb-3" data-testid="text-model-label">
              Business Model
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-premium">
                Premium Variant
              </Badge>
              <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-lowprice">
                Low-Price Variant
              </Badge>
              <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-b2c">
                B2C Direct Sales
              </Badge>
              <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-b2b">
                B2B Partnerships
              </Badge>
              <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-crowdfunding">
                Crowdfunding
              </Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
