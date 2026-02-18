import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const loadingVideo = "/videos/jb5-loading.mp4";
const processVideo = "/videos/jb5-process.mp4";
const resultVideo = "/videos/jb5-result.mp4";

const smoothEase = [0.25, 0.1, 0.25, 1];

const videos = [
  {
    id: "load",
    src: loadingVideo,
    step: "01",
    title: "Load",
    description: "Fill herbs, filters and water. Close the lid.",
  },
  {
    id: "process",
    src: processVideo,
    step: "02",
    title: "Press",
    description: "One button press. JB5 grinds, mixes and rolls automatically.",
  },
  {
    id: "result",
    src: resultVideo,
    step: "03",
    title: "Done",
    description: "Your perfectly rolled product is ready in seconds.",
  },
];

function VideoCard({ video, index }: { video: typeof videos[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: smoothEase }}
    >
      <Card className="overflow-visible bg-card border-border/50">
        <div className="relative group overflow-hidden rounded-t-md">
          <video
            ref={videoRef}
            src={video.src}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            aria-label={`JB5 demo: ${video.title} - ${video.description}`}
            className="w-full aspect-video object-cover"
            onEnded={() => setIsPlaying(false)}
            data-testid={`video-jb5-${video.id}`}
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 md:opacity-0 max-md:opacity-100">
            <Button
              size="icon"
              variant="outline"
              onClick={togglePlay}
              className="bg-background/20 backdrop-blur-sm border-white/20 text-white"
              data-testid={`button-play-${video.id}`}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={toggleMute}
              className="bg-background/20 backdrop-blur-sm border-white/20 text-white"
              data-testid={`button-mute-${video.id}`}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
          </div>
          <div className="absolute top-3 left-3">
            <span className="text-xs font-mono text-white/70 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
              STEP {video.step}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-1" data-testid={`text-video-title-${video.id}`}>
            {video.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-video-desc-${video.id}`}>
            {video.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export function VideoShowcaseSection() {
  return (
    <section
      id="demo"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-video-showcase"
      aria-label="Product demonstration videos"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4" data-testid="text-demo-label">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-5" data-testid="text-demo-heading">
            Three Steps. Zero Effort.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-demo-subtitle">
            Load, press, done. The JB5 handles everything automatically with precision German engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
