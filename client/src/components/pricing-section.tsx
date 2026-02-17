import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check, ArrowRight, ExternalLink, Crown, Zap, Star, Briefcase, Gem } from "lucide-react";

const timeline = [
  { quarter: "Q2 2026", label: "Early Bird Pre-Orders Open", active: true },
  { quarter: "Q3 2026", label: "Serial Prototypes & Stress Tests", active: false },
  { quarter: "Q4 2026", label: "CE Certification & First Units Ship", active: false },
  { quarter: "Q1 2027", label: "Full Production & Global Launch", active: false },
];

const tiers = [
  {
    name: "Early Bird",
    price: 129,
    originalPrice: 149,
    icon: Zap,
    badge: "Most Popular",
    featured: false,
    description: "Pre-order the JB5 at the lowest price available.",
    perks: [
      "1x JB5 unit delivered Q4 2026",
      "Save $20 off regular price",
      "First production batch guaranteed",
      "Development updates until delivery",
      "Lifetime customer support",
      "Priority shipping",
    ],
    note: "Limited pre-orders available",
    url: "https://buy.stripe.com/4gM3cw5Kg8u75qH5FX00003",
    buttonText: "Pre-Order Now",
  },
  {
    name: "Founder's Bundle",
    price: 279,
    originalPrice: null,
    icon: Star,
    badge: "Best Value",
    featured: true,
    description: "Complete package: JB5 device + full insider access.",
    perks: [
      "1x JB5 unit ($129 value)",
      "Full insider access included",
      "Priority shipping + 2-year warranty",
      "Monthly reports & quarterly Q&A",
      "Founding Supporter status",
      "Custom branding access",
    ],
    note: "Limited to 100 bundles",
    url: "https://buy.stripe.com/4gMbJ20pWh0D06ngkB00005",
    buttonText: "Get the Bundle",
  },
  {
    name: "Insider Pass",
    price: 149,
    originalPrice: null,
    icon: Crown,
    badge: "Intelligence Only",
    featured: false,
    description: "Unprecedented access to JB5's journey. No device included.",
    perks: [
      "Monthly investor reports",
      "Partnership updates (Casa Verde, Cookies, Stiiizy)",
      "Quarterly Q&A with founder",
      "Private community access",
      "Affiliate program access",
    ],
    note: "Device not included",
    url: "https://buy.stripe.com/4gM7sMa0wcKng5ld8p00004",
    buttonText: "Get Insider Access",
  },
];

const premiumTiers = [
  {
    name: "Business Partner",
    price: 529,
    icon: Briefcase,
    badge: "Premium",
    description: "Enhanced partnership package with expanded access and multiple units for serious supporters and early business partners.",
    perks: [
      "Multiple JB5 units included",
      "All insider access benefits",
      "Business partnership opportunities",
      "Extended warranty coverage",
      "Priority founder access",
    ],
    url: "https://buy.stripe.com/3cI8wQdcIbGj8CT7O500006",
    buttonText: "Become a Partner",
  },
  {
    name: "Co-Creator Circle",
    price: 999,
    icon: Gem,
    badge: "Only 5 Spots",
    description: "Ultimate insider experience with direct founder access, 2x JB5 units, co-branding opportunities, and revenue share potential.",
    perks: [
      "2x JB5 units included",
      "Direct founder access (WhatsApp)",
      "Studio visits & all event invites",
      "Co-branding & revenue share potential",
      "Custom prototype access",
    ],
    url: "https://buy.stripe.com/eVqbJ28Ws39Ng5l1pH00007",
    buttonText: "Join the Circle",
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-pricing"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-pricing-label">
            Pre-Order Now
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-pricing-title">
            Choose Your Tier
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm" data-testid="text-pricing-subtitle">
            Secure your JB5 at the early bird price. All payments processed securely through Stripe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`p-8 h-full flex flex-col relative overflow-visible ${
                  tier.featured ? "ring-1 ring-foreground/20" : ""
                }`}
                data-testid={`card-tier-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="no-default-hover-elevate no-default-active-elevate text-xs" data-testid="badge-best-value">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-muted">
                      <tier.icon className="w-4 h-4 text-foreground" />
                    </div>
                    {!tier.featured && (
                      <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate text-xs">
                        {tier.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground" data-testid={`text-tier-name-${index}`}>
                    {tier.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  {tier.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through mr-2">
                      ${tier.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-foreground tracking-tight" data-testid={`text-price-${index}`}>
                    ${tier.price}
                  </span>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {tier.perks.map((perk) => (
                    <div key={perk} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{perk}</span>
                    </div>
                  ))}
                </div>

                {tier.note && (
                  <p className="text-xs text-muted-foreground/60 mb-4">{tier.note}</p>
                )}

                <Button
                  className="w-full"
                  variant={tier.featured ? "default" : "outline"}
                  onClick={() => window.open(tier.url, "_blank", "noopener,noreferrer")}
                  data-testid={`button-buy-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {tier.buttonText}
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {premiumTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col overflow-visible" data-testid={`card-tier-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-muted">
                    <tier.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate text-xs">
                    {tier.badge}
                  </Badge>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1" data-testid={`text-premium-tier-name-${index}`}>
                  {tier.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {tier.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground tracking-tight" data-testid={`text-premium-price-${index}`}>
                    ${tier.price}
                  </span>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {tier.perks.map((perk) => (
                    <div key={perk} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{perk}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(tier.url, "_blank", "noopener,noreferrer")}
                  data-testid={`button-buy-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {tier.buttonText}
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-muted-foreground/50">
            All payments are securely processed through Stripe. Prices in USD.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 max-w-2xl mx-auto"
        >
          <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-10 text-center" data-testid="text-timeline-title">
            Roadmap
          </h3>

          <div className="relative">
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-border" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex items-start gap-6 py-4"
                data-testid={`timeline-${item.quarter.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className={`relative z-10 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  item.active
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {item.active ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground" data-testid={`text-timeline-quarter-${index}`}>
                    {item.quarter}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-0.5">
                    <span className="text-sm text-muted-foreground" data-testid={`text-timeline-label-${index}`}>
                      {item.label}
                    </span>
                    {item.active && (
                      <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate text-xs" data-testid="badge-now">
                        NOW
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
