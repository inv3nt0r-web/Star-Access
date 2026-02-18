import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { Star, Send, Loader2, Award, Gift } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { insertFeedbackSchema, type InsertFeedbackEntry, type FeedbackEntry } from "@shared/schema";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1.5" role="radiogroup" aria-label="Rating" data-testid="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={star === value}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="p-0.5 transition-transform"
          data-testid={`button-star-${star}`}
        >
          <Star
            aria-hidden="true"
            className={`h-5 w-5 transition-colors ${
              star <= (hovered || value)
                ? "fill-foreground text-foreground"
                : "text-muted-foreground/40"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function FeedbackCard({ entry }: { entry: FeedbackEntry }) {
  return (
    <Card className="p-6 h-full flex flex-col" data-testid={`card-feedback-${entry.id}`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <p className="font-medium text-foreground text-sm" data-testid={`text-feedback-name-${entry.id}`}>
            {entry.name}
          </p>
          <div className="flex gap-0.5 mt-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3 w-3 ${
                  star <= entry.rating ? "fill-foreground text-foreground" : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
        {entry.featured && (
          <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate flex-shrink-0 text-xs" data-testid={`badge-featured-${entry.id}`}>
            Featured
          </Badge>
        )}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1" data-testid={`text-feedback-message-${entry.id}`}>
        "{entry.message}"
      </p>
    </Card>
  );
}

export function FeedbackSection() {
  const { toast } = useToast();

  const form = useForm<InsertFeedbackEntry>({
    resolver: zodResolver(insertFeedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      rating: 5,
    },
  });

  const { data: feedbackList, isLoading } = useQuery<FeedbackEntry[]>({
    queryKey: ["/api/feedback"],
  });

  const submitFeedback = useMutation({
    mutationFn: async (data: InsertFeedbackEntry) => {
      const res = await apiRequest("POST", "/api/feedback", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your feedback!",
        description: "Your feedback has been submitted. The best submissions will be featured and rewarded with a JB5 Special Edition!",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/feedback"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Could not submit feedback",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertFeedbackEntry) => {
    submitFeedback.mutate(data);
  };

  return (
    <section
      id="feedback"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-feedback"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-feedback-label">
            Community Feedback
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-feedback-heading">
            Share Your Thoughts
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm" data-testid="text-feedback-subtitle">
            Tell us what excites you about JB5. The best feedback will be featured and rewarded.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl mx-auto"
        >
          <div className="text-center" data-testid="card-feedback-incentive">
            <Gift className="h-6 w-6 text-muted-foreground mx-auto mb-6" />
            <h3 className="text-lg font-semibold text-foreground mb-6" data-testid="text-incentive-title">
              Top Feedback Rewards
            </h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-2xl font-bold text-foreground">1st</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">JB5 Special Edition + free unit</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2nd</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">$50 off your pre-order</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3rd</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Exclusive early access + merch</p>
              </div>
            </div>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="text-center mb-20">
            <p className="text-sm text-muted-foreground">Loading feedback...</p>
          </div>
        ) : feedbackList && feedbackList.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {feedbackList.map((entry) => (
              <motion.div key={entry.id} variants={itemVariants}>
                <FeedbackCard entry={entry} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center mb-20" data-testid="text-feedback-empty">
            <p className="text-foreground font-medium mb-1">Be the first to share your thoughts.</p>
            <p className="text-sm text-muted-foreground">Submit your feedback below for a chance to win a JB5 Special Edition.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <Card className="p-8" data-testid="card-feedback-form">
            <h3 className="text-lg font-semibold text-foreground mb-8" data-testid="text-form-title">
              Submit Your Feedback
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-feedback">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-xs uppercase tracking-wider">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            data-testid="input-feedback-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground text-xs uppercase tracking-wider">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            data-testid="input-feedback-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-xs uppercase tracking-wider">Rating</FormLabel>
                      <FormControl>
                        <StarRating
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground text-xs uppercase tracking-wider">Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What excites you about JB5?"
                          className="resize-none min-h-[120px]"
                          data-testid="input-feedback-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={submitFeedback.isPending}
                  className="w-full"
                  data-testid="button-submit-feedback"
                >
                  {submitFeedback.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Feedback
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center" data-testid="text-feedback-note">
                  By submitting, you agree that your feedback may be featured. Your email stays private.
                </p>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
