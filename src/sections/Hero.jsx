import { ArrowDown, ArrowUpRight, Code2, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import cvFile from "../assets/Anjali_Kadyan_CV.pdf";
import profilePhoto from "../assets/add.jpeg";

const orbitSkills = [
  { label: "React", className: "orbit-react" },
  { label: "Node.js", className: "orbit-node" },
  { label: "Python", className: "orbit-python" },
  { label: "MongoDB", className: "orbit-mongo" },
  { label: "JavaScript", className: "orbit-js" },
  { label: "SQL", className: "orbit-sql" },
];

export const Hero = () => {
  return (
    <section id="home" className="hero-shell relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="hero-glow hero-glow-one absolute pointer-events-none" />
      <div className="hero-glow hero-glow-two absolute pointer-events-none" />
      <div className="hero-noise absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-center">
          <div className="space-y-8">
            <div className="hero-enter inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-foreground/90">
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>
              Open to software engineering opportunities
              <Sparkles size={15} className="text-primary" />
            </div>

            <div className="space-y-5">
              <p className="hero-enter hero-delay-1 text-sm md:text-base uppercase tracking-[0.28em] text-primary font-semibold">Hello, I'm Anjali Kadyan</p>
              <h1 className="hero-enter hero-delay-2 text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.04] tracking-tight">
                I build things<br />
                <span className="hero-gradient-text">for the web.</span>
              </h1>
              <p className="hero-enter hero-delay-3 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Full Stack Developer and B.Tech CSE student at Lovely Professional University. I turn ideas into accessible, responsive, and useful digital experiences.
              </p>
            </div>

            <div className="hero-enter hero-delay-4 flex flex-wrap gap-3">
              <AnimatedBorderButton href="#projects">
                Explore my work <ArrowUpRight className="w-5 h-5" />
              </AnimatedBorderButton>
              <a href={cvFile} download="Anjali_Kadyan_CV.pdf" className="hero-secondary-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium">
                <Download size={18} /> Download CV
              </a>
            </div>

            <div className="hero-enter hero-delay-5 flex items-center gap-4 pt-1">
              <a className="hero-social" href="https://github.com/anjalikadyan" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a className="hero-social" href="https://www.linkedin.com/in/anjali-kadyan-070274248/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <span className="h-6 w-px bg-border" />
              <span className="text-sm text-muted-foreground">Build • Learn • Improve</span>
            </div>

            <a href="#about" className="hero-enter hero-delay-5 inline-flex items-center gap-2 pt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
              Scroll to explore <ArrowDown size={14} className="animate-bounce" />
            </a>
          </div>

          <div className="hero-enter hero-delay-3 relative mx-auto w-full max-w-[470px]">
            <div className="orbit-stage">
              <div className="orbit-ring orbit-ring-one" />
              <div className="orbit-ring orbit-ring-two" />
              <div className="orbit-ring orbit-ring-three" />
              <div className="orbit-core-glow" />
              <div className="orbit-core">
                <div className="orbit-core-inner"><Code2 size={56} strokeWidth={1.3} /></div>
              </div>
              {orbitSkills.map((skill) => <div key={skill.label} className={`orbit-chip ${skill.className}`}>{skill.label}</div>)}
              <div className="orbit-spark orbit-spark-one" />
              <div className="orbit-spark orbit-spark-two" />
              <div className="orbit-spark orbit-spark-three" />
            </div>
            <div className="hero-profile-card glass-strong">
              <div className="hero-profile-photo-wrap"><img src={profilePhoto} alt="Anjali Kadyan" className="hero-profile-photo" /></div>
              <div className="min-w-0 flex-1"><p className="font-semibold text-foreground">Anjali Kadyan</p><p className="text-sm text-muted-foreground">Full Stack Developer</p></div>
              <div className="hero-card-mark"><Code2 size={18} /></div>
            </div>
            <div className="hero-floating-note hero-note-top"><span className="hero-note-icon"><Sparkles size={15} /></span><span><b>Curious by nature</b><small>Always learning something new</small></span></div>
            <div className="hero-floating-note hero-note-bottom"><span className="hero-note-icon"><Code2 size={15} /></span><span><b>216+ DSA problems</b><small>Problem-solving mindset</small></span></div>
          </div>
        </div>
      </div>
    </section>
  );
};
