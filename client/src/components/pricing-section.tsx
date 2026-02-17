import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertWaitlistSchema, type InsertWaitlistEntry } from "@shared/schema";

const timeline = [
  { quarter: "Q2 2026", label: "Early Bird Pre-Orders Open", active: true },
  { quarter: "Q3 2026", label: "Serial Prototypes & Stress Tests", active: false },
  { quarter: "Q4 2026", label: "CE Certification & First Units Ship", active: false },
  { quarter: "Q1 2027", label: "Full Production & Global Launch", active: false },
];

const earlyBirdPerks = [
  "Guaranteed early bird pricing",
  "Priority shipping before public launch",
  "Exclusive access to beta testing",
  "Free lifetime firmware updates",
  "Full refund guarantee",
];

export function PricingSection() {
  const { toast } = useToast();

  const form = useForm<InsertWaitlistEntry>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const { data: countData } = useQuery<{ count: number }>({
    queryKey: ["/api/waitlist/count"],
  });

  const joinWaitlist = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      const res = await apiRequest("POST", "/api/waitlist", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when JB5 is ready for pre-order. Thank you for your interest!",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Could not join waitlist",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlistEntry) => {
    joinWaitlist.mutate(data);
  };

  const spotsText = countData?.count
    ? `${countData.count} people already signed up`
    : null;

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
            Early Bird Pre-Order
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-pricing-title">
            Be First. Pay Less.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm" data-testid="text-pricing-subtitle">
            Secure your JB5 at the early bird price before public launch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 lg:p-10 h-full" data-testid="card-early-bird">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
                <div>
                  <Badge variant="outline" className="mb-4 no-default-hover-elevate no-default-active-elevate text-xs" data-testid="badge-early-bird">
                    Early Bird
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground" data-testid="text-tier-name">
                    JB5 Pre-Order
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1" data-testid="text-tier-desc">
                    Reserve yours now, pay later
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-sm text-muted-foreground line-through" data-testid="text-regular-price">
                    $149
                  </span>
                  <div>
                    <span className="text-5xl lg:text-6xl font-bold text-foreground tracking-tight" data-testid="text-price">$99</span>
                  </div>
                  <Badge variant="outline" className="mt-2 no-default-hover-elevate no-default-active-elevate text-xs" data-testid="badge-save">
                    SAVE $50
                  </Badge>
                </div>
              </div>

              <div className="space-y-3 mb-10">
                {earlyBirdPerks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-muted-foreground" data-testid={`text-perk-${perk.slice(0, 20).toLowerCase().replace(/\s+/g, "-")}`}>
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3" data-testid="form-waitlist">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage data-testid="text-email-error" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={joinWaitlist.isPending}
                    data-testid="button-join-waitlist"
                  >
                    {joinWaitlist.isPending ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Reserve Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <p className="text-xs text-muted-foreground" data-testid="text-delivery-info">
                  Expected delivery: Q4 2026
                </p>
                {spotsText && (
                  <p className="text-xs text-muted-foreground" data-testid="text-waitlist-count">
                    {spotsText}
                  </p>
                )}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card className="p-8 lg:p-10 h-full flex flex-col" data-testid="card-investor">
              <Badge variant="outline" className="mb-6 no-default-hover-elevate no-default-active-elevate self-start text-xs" data-testid="badge-investor">
                Investors &amp; Partners
              </Badge>
              <h3 className="text-xl font-semibold text-foreground mb-3" data-testid="text-investor-title">
                Partner With Us
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1" data-testid="text-investor-desc">
                We're scaling from prototype to serial production. Join us in bringing the first fully automatic rolling machine to the global market.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Patented technology (DE 10 2023 130 535 A1)",
                  "Government-backed R&D (BMWK / WIPANO)",
                  "$822B addressable market by 2032",
                  "Production-ready design with CE path",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.location.href = "mailto:invest@staracces.com?subject=JB5 Investment Inquiry"}
                data-testid="button-investor-contact"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </motion.div>
        </div>

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
