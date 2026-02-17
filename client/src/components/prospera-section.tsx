import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Globe, Shield, Zap, Building, Landmark, Users, Bitcoin, FlaskConical, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Landmark,
    title: "Private Governance",
    description: "One of the world's first privately governed charter cities. Operates under its own legal, fiscal, and regulatory framework as a ZEDE (Zone for Employment and Economic Development).",
  },
  {
    icon: Shield,
    title: "Ultra-Low Tax Structure",
    description: "1% business revenue tax, 5% personal income tax, 2.5% sales tax. 50-year legal stability guarantees lock in rates for businesses that incorporate.",
  },
  {
    icon: Zap,
    title: "24-Hour Business Setup",
    description: "Register a company in 6 clicks online. Businesses can choose regulations from any OECD country or propose custom frameworks. Globally recognized entities.",
  },
  {
    icon: FlaskConical,
    title: "Innovation-First Regulation",
    description: "70% faster regulatory approval for biotech and R&D. Home to gene therapy trials, crypto-native finance, and advanced manufacturing prototypes.",
  },
  {
    icon: Bitcoin,
    title: "Crypto-Native Economy",
    description: "Bitcoin recognized as legal tender. BTC, ETH, and USDT accepted for payments, rent, and real estate. Crypto ATMs and blockchain-native banking.",
  },
  {
    icon: Users,
    title: "Global Community",
    description: "1,700+ residents from 40+ countries. 250+ incorporated companies. 950+ jobs created. Backed by investors including Peter Thiel and Marc Andreessen.",
  },
];

const stats = [
  { value: "250+", label: "Companies", sublabel: "Incorporated" },
  { value: "1%", label: "Business Tax", sublabel: "Revenue-based" },
  { value: "40+", label: "Countries", sublabel: "Represented" },
  { value: "24h", label: "Company Setup", sublabel: "Fully online" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProsperaSection() {
  return (
    <section
      id="prospera"
      className="py-24 lg:py-32 bg-card"
      data-testid="section-prospera"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-prospera-label">
            Where JB5 Was Born
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-prospera-heading">
            Pr&oacute;spera, Roat&aacute;n
          </h2>
          <p className="text-muted-foreground mt-5 max-w-3xl mx-auto leading-relaxed" data-testid="text-prospera-subtitle">
            The first working JB5 prototype was built in Pr&oacute;spera &mdash; one of the world&rsquo;s first privately governed pop-up cities, located on Roat&aacute;n Island, Honduras. A special economic zone with its own legal system, ultra-low taxes, and innovation-first regulation that attracts entrepreneurs from around the globe.
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
            <motion.div key={stat.label} variants={itemVariants} className="text-center" data-testid={`card-prospera-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
              <p className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="p-8 lg:p-10 h-full" data-testid={`card-prospera-${item.title.toLowerCase().replace(/[\s-]+/g, "-")}`}>
                <item.icon className="h-6 w-6 text-muted-foreground mb-6" />
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <Card className="p-8 lg:p-12" data-testid="card-prospera-connection">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    JB5 &amp; Pr&oacute;spera
                  </p>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-6" data-testid="text-prospera-connection-heading">
                  Why We Built Here
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    Pr&oacute;spera&rsquo;s innovation-first regulatory environment allowed Daniel to move from concept to working prototype without the bureaucratic delays typical of traditional jurisdictions. The zone&rsquo;s 70% faster regulatory approval and 24-hour company registration made it possible to iterate rapidly.
                  </p>
                  <p>
                    From Pr&oacute;spera, Daniel expanded to Miami and Los Angeles to build the industry connections and manufacturing partnerships needed to bring JB5 to mass production &mdash; combining Caribbean innovation speed with German engineering precision.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-zede">
                    ZEDE Charter City
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-roatan">
                    Roat&aacute;n Island, Honduras
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-private-gov">
                    Private Governance
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-btc-legal">
                    Bitcoin Legal Tender
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-investors">
                    Peter Thiel &amp; Marc Andreessen Backed
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-ernst-young">
                    EY Top 10 Ease of Doing Business
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground/50 leading-relaxed mt-4">
                  Sources: Pr&oacute;spera ZEDE official publications (pzgps.hn), Bloomberg (2021), Wikipedia, Roat&aacute;n Tourism Bureau.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
