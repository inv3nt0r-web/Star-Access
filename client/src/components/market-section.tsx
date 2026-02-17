import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Users, Building2, Heart, TrendingUp } from "lucide-react";

const stats = [
  { value: "$21B", label: "Legal Cannabis Market 2023", sublabel: "Grand View Research" },
  { value: "$102B", label: "Projected by 2030", sublabel: "Grand View Research" },
  { value: "25.7%", label: "CAGR (2024\u20132030)", sublabel: "Grand View Research" },
  { value: "219M+", label: "Global Cannabis Users", sublabel: "UNODC World Drug Report 2024" },
];

const marketLayers = [
  { label: "TAM", title: "Total Addressable Market", value: "$102B", description: "Global legal cannabis market by 2030, growing at 25.7% CAGR from $21B in 2023. Driven by legalization in 40+ countries including Germany (April 2024).", source: "Grand View Research, Legal Marijuana Market Report 2024" },
  { label: "SAM", title: "Serviceable Market", value: "$1.1B", description: "Global rolling papers and preparation devices market, growing at 5.6% CAGR. The fastest-growing sub-segment within the $73B smoking accessories market.", source: "Cognitive Market Research, 2023; 360iResearch, 2024" },
  { label: "SOM", title: "Initial Target Market", value: "$11\u2013$33M", description: "JB5 targets 1\u20133% penetration of the rolling preparation segment within 5 years. Zero direct competitors in fully automatic rolling devices.", source: "Staracces UG internal projection" },
];

const segments = [
  {
    icon: Users,
    title: "219M Adult Consumers",
    description: "Health-conscious users in 40+ legal markets who want control over ingredients. 4.5M users in Germany alone since April 2024 legalization.",
  },
  {
    icon: Heart,
    title: "Medical Patients",
    description: "900,000+ medical cannabis patients in Germany (4x growth in one year). Global medical market projected to reach $66B by 2030 at 21.8% CAGR.",
  },
  {
    icon: Building2,
    title: "B2B Partners",
    description: "Dispensaries, coffeeshops, and delivery services seeking in-house preparation. 368+ cannabis social clubs approved in Germany alone.",
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
      className="py-24 lg:py-32 bg-card"
      data-testid="section-market"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-market-label">
            Market Opportunity
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-market-heading">
            $21B to $102B by 2030
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed" data-testid="text-market-subtitle">
            The global legal cannabis market is projected to grow nearly 5x by 2030, fueled by legalization in 40+ countries. 219 million consumers worldwide, zero fully automatic rolling solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center" data-testid={`card-stat-${stat.value.toLowerCase().replace(/[^a-z0-9]/g, "")}`}>
              <p className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-2" data-testid={`text-stat-value-${stat.value.toLowerCase().replace(/[^a-z0-9]/g, "")}`}>
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground" data-testid={`text-stat-label-${stat.value.toLowerCase().replace(/[^a-z0-9]/g, "")}`}>
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
            Market Sizing
          </p>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight" data-testid="text-tam-heading">
            TAM / SAM / SOM
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-24"
        >
          {marketLayers.map((layer) => (
            <motion.div key={layer.label} variants={itemVariants}>
              <Card className="p-8 lg:p-10 h-full" data-testid={`card-${layer.label.toLowerCase()}`}>
                <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate mb-4">
                  {layer.label}
                </Badge>
                <p className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-1">
                  {layer.value}
                </p>
                <p className="text-sm font-medium text-foreground mb-3">{layer.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{layer.description}</p>
                <p className="text-xs text-muted-foreground/60 italic">Source: {layer.source}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight" data-testid="text-segments-heading">
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
              <Card className="p-8 lg:p-10 h-full" data-testid={`card-segment-${seg.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <seg.icon className="h-6 w-6 text-muted-foreground mb-6" />
                <h4 className="text-lg font-semibold text-foreground mb-3" data-testid={`text-segment-title-${seg.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  {seg.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{seg.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
          data-testid="card-business-model"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6" data-testid="text-model-label">
            Business Model
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-premium">
              Premium Hardware Sales
            </Badge>
            <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-lowprice">
              Consumables & Accessories
            </Badge>
            <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-b2c">
              B2C Direct-to-Consumer
            </Badge>
            <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-b2b">
              B2B Dispensary Partnerships
            </Badge>
            <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-crowdfunding">
              Crowdfunding Launch
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground/50 max-w-3xl mx-auto leading-relaxed" data-testid="text-sources">
            Sources: Grand View Research, "Legal Marijuana Market Size To Reach $102.2Bn By 2030" (2024). Cognitive Market Research, "Rolling Paper Market Report" (2023). 360iResearch, "Smoking Accessories Market Size & Share" (2024). UNODC, "World Drug Report" (2024). German Federal Institute for Drugs and Medical Devices (BfArM), medical patient data (2024\u20132025).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
