import { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Mail, Moon, Sun, X } from "lucide-react";

export default function Sidebar({
  active,
  setActive,
  sidebarOpen,
  setSidebarOpen,
}) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const menuItems = [
    "About",
    "Experience",
    "Education",
    "Skills",
    "Certificates",
    "Projects",
    "Contact",
  ];

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div
        className={`h-screen w-80 fixed left-0 top-0 
  bg-white dark:bg-[#0b1b23] 
  text-gray-700 dark:text-gray-400
  px-12 pt-16 pb-24 md:pb-16 flex flex-col justify-between transition-all duration-300
  ${sidebarOpen ? "translate-x-0 z-50" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Top Section */}
        <div>
          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full 
            bg-gray-200 dark:bg-[#0c2b35] 
            text-gray-700 dark:text-teal-400
            hover:scale-110 transition"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Close Button (Inside Sidebar) */}
          <button
            className="absolute top-6 left-6 md:hidden
  bg-gray-200 dark:bg-[#0c2b35]
  p-2 rounded-full shadow-lg"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} className="text-gray-800 dark:text-white" />
          </button>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-200">
            Sneha Rajput
          </h1>

          <h2 className="text-teal-500 mt-3 text-lg">Full Stack Developer</h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            Skilled in Android and Web Application Development.
          </p>

          {/* Menu */}
          <ul className="mt-14 space-y-7">
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className="group flex items-center cursor-pointer"
              >
                {/* Line */}
                <span
                  className={`h-[2px] transition-all duration-300 mr-4
                ${
                  active === item
                    ? "w-12 bg-gray-900 dark:bg-gray-200"
                    : "w-6 bg-gray-400 dark:bg-gray-600 group-hover:w-12"
                }`}
                ></span>

                {/* Text */}
                <span
                  className={`uppercase text-xs tracking-widest transition-all duration-300
                ${
                  active === item
                    ? "text-gray-900 dark:text-gray-200"
                    : "group-hover:text-gray-900 dark:group-hover:text-gray-200"
                }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Icons */}
        <div className="flex m-10 space-x-6 text-gray-500 dark:text-gray-500">
          <a
            href="https://github.com/RajputSneha17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              className="hover:text-teal-500 cursor-pointer transition"
              size={18}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sneha-rajput-5102b0284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              className="hover:text-teal-500 cursor-pointer transition"
              size={18}
            />
          </a>

          <a
            href="https://www.instagram.com/sneharajput9205/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              className="hover:text-teal-500 cursor-pointer transition"
              size={18}
            />
          </a>

          <a href="mailto:sneharajput63154@gmail.com">
            <Mail
              className="hover:text-teal-500 cursor-pointer transition"
              size={18}
            />
          </a>
        </div>
      </div>
    </>
  );
}
