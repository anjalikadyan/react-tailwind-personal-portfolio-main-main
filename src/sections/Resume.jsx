import { ArrowUpRight, CheckCircle2, Download, Eye, FileText, GraduationCap, Layers3, Trophy } from "lucide-react";
import cvFile from "../assets/Anjali_Kadyan_CV.pdf";

const highlights = [
  { icon: Layers3, value: "3", label: "Featured projects" },
  { icon: Trophy, value: "346+", label: "DSA problems solved" },
  { icon: GraduationCap, value: "B.Tech", label: "Computer Science" },
];

const resumeSections = ["Technical skills", "Full-stack projects", "Training & certificates", "Education & achievements"];

export const Resume = () => {
  return (
    <section id="resume" className="resume-section relative overflow-hidden py-24 md:py-28">
      <div className="resume-orb resume-orb-one" />
      <div className="resume-orb resume-orb-two" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="resume-eyebrow"><FileText size={14} /> THE DETAILS, IN ONE PLACE</span>
          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">My <span className="hero-gradient-text">Resume</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            A quick overview of my technical skills, projects, education, and achievements. Open the latest CV or save a copy for later.
          </p>
        </div>

        <div className="resume-panel mx-auto grid max-w-5xl overflow-hidden rounded-3xl md:grid-cols-[0.9fr_1.1fr]">
          <div className="resume-preview-pane relative flex min-h-[340px] flex-col justify-between overflow-hidden p-7 md:min-h-[470px] md:p-10">
            <div className="resume-preview-grid" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="resume-file-icon"><FileText size={24} /></span>
              <span className="resume-pdf-pill">PDF DOCUMENT</span>
            </div>
            <div className="resume-paper-wrap relative z-10 mx-auto my-7 w-[72%] max-w-[270px]">
              <div className="resume-paper">
                <div className="resume-paper-topline" />
                <div className="resume-paper-name">Anjali Kadyan</div>
                <div className="resume-paper-subtitle">COMPUTER SCIENCE & ENGINEERING</div>
                <div className="resume-paper-rule" />
                <div className="resume-paper-heading">SKILLS</div>
                <div className="resume-paper-lines"><i /><i /><i /></div>
                <div className="resume-paper-heading">PROJECTS</div>
                <div className="resume-paper-project">Sports Management System</div>
                <div className="resume-paper-lines"><i /><i /></div>
                <div className="resume-paper-project">Tours & Travel Packages App</div>
                <div className="resume-paper-lines"><i /><i /></div>
                <div className="resume-paper-heading">EDUCATION</div>
                <div className="resume-paper-lines"><i /><i /></div>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-between gap-3 text-xs text-white/65">
              <span>ANJALI KADYAN · CV</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={13} /> Updated profile</span>
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <div className="mb-7">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Candidate profile</p>
              <h3 className="text-2xl font-bold md:text-3xl">Anjali Kadyan</h3>
              <p className="mt-2 leading-6 text-muted-foreground">Full Stack Development · B.Tech CSE · Lovely Professional University</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {highlights.map(({ icon: Icon, value, label }) => (
                <div className="resume-stat" key={label}>
                  <Icon size={17} className="mb-3 text-primary" />
                  <div className="text-lg font-bold md:text-xl">{value}</div>
                  <div className="mt-1 text-[11px] leading-4 text-muted-foreground md:text-xs">{label}</div>
                </div>
              ))}
            </div>

            <div className="my-7 h-px bg-white/10" />
            <p className="mb-4 text-sm font-semibold text-foreground">Inside my resume</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {resumeSections.map((item) => (
                <li className="flex items-start gap-2 text-sm text-muted-foreground" key={item}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" /> {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="resume-primary-btn inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold" href={cvFile} target="_blank" rel="noreferrer">
                <Eye size={17} /> View Resume <ArrowUpRight size={16} />
              </a>
              <a className="resume-secondary-btn inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold" href={cvFile} download="Anjali_Kadyan_CV.pdf">
                <Download size={17} /> Download PDF
              </a>
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">For recruiters and hiring teams: the buttons open or download the CV PDF attached to this portfolio.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
