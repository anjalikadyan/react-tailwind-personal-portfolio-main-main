import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
import { Certificates } from "@/sections/Certificates";
import { Training } from "@/sections/Training";
import { Contact } from "@/sections/Contact";
import { Resume } from "@/sections/Resume";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Training />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
