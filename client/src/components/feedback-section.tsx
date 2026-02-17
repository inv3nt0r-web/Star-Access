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
    <div className="flex gap-1" data-testid="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="p-0.5 transition-transform"
          data-testid={`button-star-${star}`}
        >
          <Star
            className={`h-6 w-6 transition-colors ${
              star <= (hovered || value)
                ? "fill-primary text-primary"
                : "text-muted-foreground"
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
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="font-semibold text-foreground" data-testid={`text-feedback-name-${entry.id}`}>
            {entry.name}
          </p>
          <div className="flex gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-3.5 w-3.5 ${
                  star <= entry.rating ? "fill-primary text-primary" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
        {entry.featured && (
          <Badge className="no-default-hover-elevate no-default-active-elevate flex-shrink-0" data-testid={`badge-featured-${entry.id}`}>
            <Award className="h-3 w-3 mr-1" />
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-foreground font-medium mb-3" data-testid="text-feedback-label">
            Community Feedback
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-feedback-heading">
            Share Your Thoughts, Win a Special Edition
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto" data-testid="text-feedback-subtitle">
            Tell us what excites you about JB5. The best feedback will be featured on our page and rewarded with exclusive perks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl mx-auto"
        >
          <Card className="p-8" data-testid="card-feedback-incentive">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2" data-testid="text-incentive-title">
                  Top Feedback Rewards
                </h3>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">1st</p>
                    <p className="text-sm text-muted-foreground mt-1">JB5 Special Edition + free unit</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">2nd</p>
                    <p className="text-sm text-muted-foreground mt-1">$50 off your pre-order</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">3rd</p>
                    <p className="text-sm text-muted-foreground mt-1">Exclusive early access + merch</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {feedbackList && feedbackList.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {feedbackList.map((entry) => (
              <motion.div key={entry.id} variants={itemVariants}>
                <FeedbackCard entry={entry} />
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8" data-testid="card-feedback-form">
            <h3 className="text-xl font-bold text-foreground mb-6" data-testid="text-form-title">
              Submit Your Feedback
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="form-feedback">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
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
                        <FormLabel className="text-foreground">Email</FormLabel>
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
                      <FormLabel className="text-foreground">Your Rating</FormLabel>
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
                      <FormLabel className="text-foreground">Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What excites you about JB5? How would it improve your daily routine? Share your honest thoughts..."
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
                  className="w-full sm:w-auto"
                  data-testid="button-submit-feedback"
                >
                  {submitFeedback.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Feedback
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground" data-testid="text-feedback-note">
                  By submitting, you agree that your name and feedback may be featured on our website. Your email will never be shared publicly.
                </p>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
