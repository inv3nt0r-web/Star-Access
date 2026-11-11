import { motion } from "framer-motion";
import { Check, Loader2, Minimize2 } from "lucide-react";

const clips = [
  {
    src: "/videos/lab-prototype-shell.mp4",
    poster: "/images/lab-prototype-shell.jpg",
    title: "Prototype, 3D printed shell",
    caption: "Display, light ring and mixer chamber running on the current prototype.",
    testId: "video-lab-shell",
  },
  {
    src: "/videos/lab-mixer-blade.mp4",
    poster: "/images/lab-mixer-blade.jpg",
    title: "Mixer chamber",
    caption: "Blade spinning inside the perforated mixing bowl, seen from above.",
    testId: "video-lab-mixer",
  },
];

const status = [
  { icon: Check, label: "Working prototype", detail: "Mix, display and control running", done: true },
  { icon: Loader2, label: "Aluminum production housing", detail: "In the works for the first batch", done: false },
  { icon: Minimize2, label: "About half the size", detail: "Reworked build for the production version", done: false },
];

export function LabUpdateSection() {
  return (
    <section id="lab" className="py-24 lg:py-32 bg-background" data-testid="section-lab">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-lab-label">
            Latest from the Lab
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-lab-heading">
            Where JB5 is right now
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {clips.map((clip, i) => (
            <motion.figure
              key={clip.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden border border-border bg-card"
            >
              <video
                src={clip.src}
                poster={clip.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={clip.title}
                className="w-full aspect-[9/16] object-cover bg-black"
                data-testid={clip.testId}
              />
              <figcaption className="p-5">
                <p className="font-semibold text-foreground">{clip.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{clip.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
          data-testid="list-lab-status"
        >
          {status.map(({ icon: Icon, label, detail, done }) => (
            <li key={label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${done ? "text-primary" : "text-muted-foreground"}`} aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
