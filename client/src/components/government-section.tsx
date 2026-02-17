import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building2, FlaskConical, FileCheck, Shield } from "lucide-react";

export function GovernmentSection() {
  return (
    <section
      id="government"
      className="py-24 lg:py-32 bg-card"
      data-testid="section-government"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-government-label">
            Government Backed
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6" data-testid="text-government-heading">
            Funded by the German Government
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-government-subtitle">
            JB5 is officially supported through federal innovation funding &mdash; validated and backed by Germany&rsquo;s top institutions for economic development and applied research.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 lg:p-10 h-full overflow-visible" data-testid="card-bmwk">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-md bg-muted">
                  <Building2 className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate mb-2">
                    Federal Ministry
                  </Badge>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    Bundesministerium f&uuml;r Wirtschaft und Klimaschutz
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    BMWK &mdash; Federal Ministry for Economic Affairs and Climate Action
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The BMWK is Germany&rsquo;s federal ministry responsible for economic policy, industrial strategy, and innovation funding. Their support for Staracces through the WIPANO program validates JB5 as a commercially viable innovation with strong intellectual property potential.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-wipano-program">
                  <FileCheck className="w-3 h-3 mr-1.5" />
                  WIPANO Program
                </Badge>
                <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-patent-funding">
                  <Shield className="w-3 h-3 mr-1.5" />
                  Patent Funding
                </Badge>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="p-8 lg:p-10 h-full overflow-visible" data-testid="card-fzj">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-md bg-muted">
                  <FlaskConical className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate mb-2">
                    Research Centre
                  </Badge>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    Forschungszentrum J&uuml;lich
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    J&uuml;lich Research Centre &mdash; One of Europe&rsquo;s largest interdisciplinary research institutions
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Part of the Helmholtz Association, Forschungszentrum J&uuml;lich is one of Europe&rsquo;s largest research centres with over 7,000 employees. As the appointed project management agency (Projekttr&auml;ger), they oversee Staracces&rsquo;s WIPANO funding &mdash; ensuring rigorous standards for innovation and IP development.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-helmholtz">
                  <FlaskConical className="w-3 h-3 mr-1.5" />
                  Helmholtz Association
                </Badge>
                <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-projekttraeger">
                  <Building2 className="w-3 h-3 mr-1.5" />
                  Projekttr&auml;ger
                </Badge>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="p-8 lg:p-10 overflow-visible" data-testid="card-wipano-detail">
            <div className="text-center mb-8">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2" data-testid="text-wipano-heading">
                WIPANO &mdash; Knowledge and Technology Transfer through Patents
              </h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Wissens- und Technologietransfer durch Patente und Normen
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  value: "100%",
                  label: "Patent costs covered",
                  sublabel: "Full IP protection funding",
                },
                {
                  value: "DE",
                  label: "German patent granted",
                  sublabel: "DE 10 2023 130 535 A1",
                },
                {
                  value: "EU+",
                  label: "International expansion",
                  sublabel: "Global patent strategy funded",
                },
              ].map((stat) => (
                <div key={stat.label} className="text-center" data-testid={`stat-wipano-${stat.value.toLowerCase().replace(/[^a-z0-9]/g, "")}`}>
                  <p className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-2">
                    {stat.value}
                  </p>
                  <p className="font-medium text-foreground text-sm">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
