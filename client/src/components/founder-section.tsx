import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import founderPhoto from "@assets/IMG_2536_1771286746896.jpeg";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-founder"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-founder-label">
            The Founder
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-founder-heading">
            Built by an Engineer, for Real People
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Card className="p-8 lg:p-12 overflow-visible" data-testid="card-founder">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-2 flex justify-center">
                <img
                  src={founderPhoto}
                  alt="Daniel Seyffarth - Founder of Staracces"
                  className="w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover"
                  data-testid="img-founder"
                />
              </div>

              <div className="lg:col-span-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1" data-testid="text-founder-name">
                  Daniel Seyffarth
                </h3>
                <p className="text-muted-foreground font-medium mb-8" data-testid="text-founder-role">
                  Founder &amp; Inventor of JB5
                </p>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Trained as a mechanic at Mercedes-Benz, with two years studying mechanical engineering, Daniel spent over 15 years in consumer electronics &mdash; including several years at Apple, where he ran in-store launches for products like Apple Vision Pro and delivered live demos to key customers from day one.
                  </p>
                  <p>
                    He invented the JB5 entirely on his own and built the first working prototype in Pr&oacute;spera, a special economic zone in Honduras. From there, he moved to Miami and Los Angeles to build the business connections needed to scale JB5 from prototype to industrial production.
                  </p>
                  <p>
                    The result: a patent-pending, fully automatic rolling machine backed by the German Federal Ministry for Economic Affairs (BMWK) and the WIPANO funding program, with support from Forschungszentrum J&uuml;lich.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-patent">
                    Patent DE 10 2023 130 535 A1
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-bmwk">
                    BMWK Funded
                  </Badge>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-wipano">
                    WIPANO Program
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid sm:grid-cols-3 gap-8"
        >
          {[
            { value: "$822B", label: "Projected market by 2032", sublabel: "+11.9% annual growth" },
            { value: "15+", label: "Years in consumer tech", sublabel: "Mercedes-Benz & Apple" },
            { value: "100%", label: "German engineered", sublabel: "Government funded R&D" },
          ].map((stat) => (
            <div key={stat.label} className="text-center" data-testid={`card-founder-stat-${stat.value.toLowerCase().replace(/[^a-z0-9]/g, "")}`}>
              <p className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-2">{stat.value}</p>
              <p className="font-medium text-foreground text-sm">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
