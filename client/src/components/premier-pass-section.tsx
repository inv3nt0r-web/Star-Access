import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Crown, Newspaper, TrendingUp, Lock, Rocket, Users, Check, Loader2 } from "lucide-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const perks = [
  {
    icon: Newspaper,
    title: "Exclusive Updates",
    description: "Behind-the-scenes progress reports, prototype milestones, and production updates before anyone else.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Curated industry insights, competitor analysis, and market data relevant to the JB5 opportunity.",
  },
  {
    icon: Rocket,
    title: "Early Access",
    description: "First look at new features, beta testing invitations, and priority access to limited product drops.",
  },
  {
    icon: Lock,
    title: "Investor Briefings",
    description: "Quarterly investor updates, financial projections, and strategic roadmap presentations.",
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Join a private network of early supporters, investors, and industry professionals.",
  },
  {
    icon: Crown,
    title: "Founding Member Status",
    description: "Permanent recognition as a founding Premier Pass holder with priority on all future offerings.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PremierPassSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const { data: countData } = useQuery<{ count: number }>({
    queryKey: ["/api/premier-pass/count"],
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/premier-pass", { email, name: name || undefined });
      return res.json();
    },
    onSuccess: (data: { message: string }) => {
      toast({ title: "Welcome to the Premier Pass!", description: data.message });
      setEmail("");
      setName("");
      queryClient.invalidateQueries({ queryKey: ["/api/premier-pass/count"] });
    },
    onError: (error: Error) => {
      toast({ title: "Could not sign up", description: error.message, variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    mutation.mutate();
  };

  return (
    <section
      id="premier-pass"
      className="py-24 lg:py-32 bg-card"
      data-testid="section-premier-pass"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-premier-label">
            Insider Access
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-premier-heading">
            Premier Pass
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed" data-testid="text-premier-subtitle">
            Get deeper insights into the JB5 project. Exclusive updates, investor briefings, market intelligence, and founding member status &mdash; completely free during early access.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {perks.map((perk) => (
            <motion.div key={perk.title} variants={itemVariants}>
              <Card className="p-8 lg:p-10 h-full" data-testid={`card-perk-${perk.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <perk.icon className="h-6 w-6 text-muted-foreground mb-6" />
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {perk.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{perk.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 lg:p-12" data-testid="card-premier-signup">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-5 w-5 text-muted-foreground" />
                  <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate" data-testid="badge-free-access">
                    Free During Early Access
                  </Badge>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight mb-4" data-testid="text-premier-cta-heading">
                  Join the Inner Circle
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  Sign up for your Premier Pass and get immediate access to exclusive project updates, investor briefings, and founding member benefits. No payment required &mdash; this is our way of rewarding early believers.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Progress reports
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Market insights
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Investor updates
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Early access
                  </span>
                </div>
                {countData && countData.count > 0 && (
                  <p className="text-xs text-muted-foreground/60 mt-6" data-testid="text-premier-count">
                    {countData.count} {countData.count === 1 ? "member" : "members"} already joined
                  </p>
                )}
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-premier-pass">
                  <Input
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    data-testid="input-premier-name"
                  />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-testid="input-premier-email"
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={mutation.isPending || !email}
                    data-testid="button-premier-submit"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        <Crown className="mr-2 h-4 w-4" />
                        Get Your Premier Pass
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground/50 text-center">
                    No spam. No payment. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
