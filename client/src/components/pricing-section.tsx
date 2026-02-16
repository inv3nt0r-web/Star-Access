import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertWaitlistSchema, type InsertWaitlistEntry } from "@shared/schema";

const timeline = [
  { quarter: "Q2 2026", label: "Waitlist Open", active: true },
  { quarter: "Q3 2026", label: "Beta Testing", active: false },
  { quarter: "Q4 2026", label: "First Units Ship", active: false },
  { quarter: "Q1 2027", label: "Full Production", active: false },
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

  const joinWaitlist = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      const res = await apiRequest("POST", "/api/waitlist", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when JB5 is ready. Thank you for your interest!",
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

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32 bg-card dark:bg-card"
      data-testid="section-pricing"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3" data-testid="text-pricing-label">
            Limited Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-pricing-title">
            Reserve Your JB5
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 lg:p-10 text-center" data-testid="card-pricing">
              <Badge className="mb-6 no-default-hover-elevate no-default-active-elevate" data-testid="badge-early-bird">
                Early Bird Special
              </Badge>

              <div className="mb-2">
                <span className="text-lg text-muted-foreground line-through" data-testid="text-regular-price">
                  Regular: $149
                </span>
              </div>

              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-6xl lg:text-7xl font-bold text-foreground" data-testid="text-price">$99</span>
              </div>

              <Badge variant="outline" className="mb-8 no-default-hover-elevate no-default-active-elevate text-primary border-primary/30" data-testid="badge-save">
                SAVE $50
              </Badge>

              <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="text-pricing-description">
                Be among the first to experience automatic rolling. Limited spots available at this price.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-waitlist">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="text-center"
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
                    className="w-full"
                    size="lg"
                    disabled={joinWaitlist.isPending}
                    data-testid="button-join-waitlist"
                  >
                    {joinWaitlist.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      "Join Waitlist Now"
                    )}
                  </Button>
                </form>
              </Form>

              <p className="text-xs text-muted-foreground mt-4" data-testid="text-delivery-info">
                Expected delivery: Q4 2026 | Full refund policy
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8" data-testid="text-timeline-title">
              Timeline
            </h3>

            <div className="relative space-y-0">
              <div className="absolute left-[19px] top-6 bottom-6 w-px bg-border" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.quarter}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex items-start gap-5 py-4"
                  data-testid={`timeline-${item.quarter.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    item.active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.active ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-current" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground" data-testid={`text-timeline-quarter-${index}`}>
                      {item.quarter}
                    </p>
                    <p className="text-muted-foreground" data-testid={`text-timeline-label-${index}`}>
                      {item.label}
                      {item.active && (
                        <span className="ml-2 text-primary font-medium">(NOW)</span>
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
