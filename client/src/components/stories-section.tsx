import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import saraImage from "@assets/IMG_1566_1771286746896.png";
import marcoImage from "@assets/3EFB1DD8-24AE-4A80-A083-DF1EA38E5BB4_1771286746896.png";
import benImage from "@assets/IMG_1563_1771286746896.jpeg";

const stories = [
  {
    image: saraImage,
    name: "Sara, 32",
    role: "Project Manager",
    quote: "Sara loves her freedom and does not leave things to chance. She enjoys smoking, but she does not trust ready-made factory mixes. She wants to choose every ingredient herself instead of relying on whatever is inside a standard pack.",
  },
  {
    image: marcoImage,
    name: "Marco, 36",
    role: "Sales Consultant",
    quote: "Marco spends most of the week on the road. Airports, hotels, quick stops between meetings. He enjoys his small smoke break, but travelling used to mean stress. With the JB5 he now has everything in one discreet place \u2014 his personal mix, filters and papers stay together in the device, ready to use.",
  },
  {
    image: benImage,
    name: "Ben, 47",
    role: "IT Consultant",
    quote: "After an accident and surgery, Ben had to learn many everyday things all over again. For a long time he called his friend whenever he wanted to smoke, because he could not manage the preparation on his own. Now with his JB5 he loads his herbs, filters and papers, presses one button and the device takes care of the fine work while he relaxes.",
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-foreground font-medium mb-3" data-testid="text-stories-label">
            Who Is It For
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" data-testid="text-stories-heading">
            Meet the Users
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {stories.map((story) => (
            <motion.div key={story.name} variants={itemVariants}>
              <Card className="overflow-visible h-full flex flex-col" data-testid={`card-story-${story.name.split(",")[0].toLowerCase()}`}>
                <div className="aspect-[3/4] overflow-hidden rounded-t-md">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover object-top"
                    data-testid={`img-story-${story.name.split(",")[0].toLowerCase()}`}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground" data-testid={`text-story-name-${story.name.split(",")[0].toLowerCase()}`}>
                    {story.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-3" data-testid={`text-story-role-${story.name.split(",")[0].toLowerCase()}`}>{story.role}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                    {story.quote}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
