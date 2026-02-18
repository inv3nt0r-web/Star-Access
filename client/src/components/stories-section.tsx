import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Target, Briefcase, Rocket } from "lucide-react";
import saraImage from "@assets/IMG_1566_1771286746896.png";
import marcoImage from "@assets/3EFB1DD8-24AE-4A80-A083-DF1EA38E5BB4_1771286746896.png";
import benImage from "@assets/IMG_1563_1771286746896.jpeg";

const stories = [
  {
    image: saraImage,
    name: "Sara, 32",
    role: "Project Manager",
    segment: "Pioneer",
    segmentIcon: Rocket,
    painPoint: "Tired of factory mixes she doesn't trust",
    quote: "Sara values her freedom and never leaves things to chance. She enjoys her ritual, but she doesn't trust ready-made factory mixes. She wants to choose every ingredient herself \u2014 the blend, the filter, the paper \u2014 instead of relying on whatever comes inside a standard pack. The JB5 gives her full control without the mess.",
    benefit: "Full ingredient control, clean process, zero compromise on quality.",
  },
  {
    image: marcoImage,
    name: "Marco, 36",
    role: "Sales Consultant",
    segment: "B2B",
    segmentIcon: Briefcase,
    painPoint: "Always on the road, no time for preparation",
    quote: "Marco spends most of the week traveling. Airports, hotels, quick stops between meetings. He enjoys his small break, but traveling used to mean stress \u2014 loose materials, no clean surface, wasted time. With the JB5, everything stays in one discreet device: his personal mix, filters, and papers \u2014 ready in seconds, anywhere.",
    benefit: "Portability, discretion, professional convenience. One device replaces the whole process.",
  },
  {
    image: benImage,
    name: "Ben, 47",
    role: "IT Consultant",
    segment: "Beachhead",
    segmentIcon: Target,
    painPoint: "Physical limitations make manual preparation impossible",
    quote: "After an accident and surgery, Ben had to relearn many everyday tasks. For a long time, he called a friend whenever he wanted to prepare his blend \u2014 because he simply couldn't manage the fine motor work on his own. Now with his JB5, he loads his materials, presses one button, and the device handles the precision work while he relaxes. Independence, restored.",
    benefit: "Accessibility, independence, dignity. No help needed \u2014 just press a button.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function StoriesSection() {
  return (
    <section
      id="stories"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-stories"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-stories-label">
            Who Is It For
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-5" data-testid="text-stories-heading">
            Meet the Users
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed" data-testid="text-stories-subtitle">
            Real pain points, real solutions. Every customer type gets something different from JB5 &mdash; but they all get their time back.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stories.map((story) => (
            <motion.div key={story.name} variants={itemVariants}>
              <div className="group" data-testid={`card-story-${story.name.split(",")[0].toLowerCase()}`}>
                <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    data-testid={`img-story-${story.name.split(",")[0].toLowerCase()}`}
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold text-foreground" data-testid={`text-story-name-${story.name.split(",")[0].toLowerCase()}`}>
                      {story.name}
                    </h3>
                    <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate text-xs">
                      <story.segmentIcon className="w-3 h-3 mr-1" />
                      {story.segment}
                    </Badge>
                  </div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground" data-testid={`text-story-role-${story.name.split(",")[0].toLowerCase()}`}>
                    {story.role}
                  </p>
                  <Card className="p-4 overflow-visible" data-testid={`card-painpoint-${story.name.split(",")[0].toLowerCase()}`}>
                    <p className="text-xs font-medium text-foreground mb-1">Pain Point</p>
                    <p className="text-xs text-muted-foreground">{story.painPoint}</p>
                  </Card>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {story.quote}
                  </p>
                  <div className="pt-2 border-t border-border/40">
                    <p className="text-xs font-medium text-foreground mb-1">What JB5 gives them</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{story.benefit}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
