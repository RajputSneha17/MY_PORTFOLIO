import projectsData from "../data/projectsData";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section
      className="min-h-screen px-10 md:px-20 py-24
      bg-white dark:bg-[#071c24]
      text-gray-800 dark:text-gray-300 transition-all duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-20">Projects</h2>

      <div className="space-y-24">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`grid md:grid-cols-2 gap-12 items-center`}
          >
            {/* LEFT IMAGE */}
            <div className="group">
              <div
                className="relative rounded-xl overflow-hidden
              bg-gray-200 dark:bg-[#0c2b35]
              aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover 
                  group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-500 transition"
                >
                  <Github size={20} />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-500 transition"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 pt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full
                    bg-teal-100 dark:bg-teal-900/40
                    text-teal-600 dark:text-teal-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
