import { useState, useEffect } from "react";
import "./App.css";
import { Menu } from "lucide-react";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";
import FloatingResume from "./layout/FloatingResume";

import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Certificate from "./Components/Certificate";

const sections = [
  "Profile",
  "About",
  "Experience",
  "Education",
  "Skills",
  "Certificates",
  "Projects",
  "Contact",
];

export default function App() {
  const [active, setActive] = useState("Profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(section);
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex bg-white dark:bg-[#0b1b23] min-h-screen transition">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-6 left-6 z-50 p-2 
        bg-teal-500 text-white rounded-lg"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <Sidebar
        active={active}
        setActive={handleClick}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="w-full min-h-screen md:ml-80">
        <div id="Profile">
          <Profile />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Experience">
          <Experience />
        </div>
        <div id="Education">
          <Education />
        </div>
        <div id="Skills">
          <Skills />
        </div>
        <div id="Certificates">
          <Certificate />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Contact">
          <Contact />
        </div>

        <FloatingResume />
        <Footer />
      </div>
    </div>
  );
}
