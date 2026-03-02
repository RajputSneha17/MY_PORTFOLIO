import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20
bg-white dark:bg-[#071c24] mt-16 md:mt-20
      text-gray-800 dark:text-gray-300 transition-all duration-300"
    >
      <div className="max-w-4xl ">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 ">About Me</h2>

        {/* Description */}
        <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-400">
          I'm a passionate Full Stack Developer with experience in building
          modern web applications, responsive user interfaces, and Java-based
          backend systems. I enjoy transforming ideas into scalable and
          user-friendly digital solutions.
        </p>

        <p className="text-lg leading-relaxed mb-10 text-gray-600 dark:text-gray-400">
          I specialize in creating clean UI designs, structured backend logic,
          and efficient application workflows. My focus is always on writing
          maintainable code and delivering smooth user experiences.
        </p>

        {/* Skills Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 rounded-xl 
          bg-gray-100 dark:bg-[#0c2b35] 
          hover:scale-105 transition duration-300"
          >
            <h3 className="font-semibold text-teal-500 mb-2">
              Web Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building responsive and interactive websites using modern frontend
              technologies.
            </p>
          </div>

          <div
            className="p-6 rounded-xl 
          bg-gray-100 dark:bg-[#0c2b35] 
          hover:scale-105 transition duration-300"
          >
            <h3 className="font-semibold text-teal-500 mb-2">
              App Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Creating structured applications with clean logic and scalable
              architecture.
            </p>
          </div>

          <div
            className="p-6 rounded-xl 
          bg-gray-100 dark:bg-[#0c2b35] 
          hover:scale-105 transition duration-300"
          >
            <h3 className="font-semibold text-teal-500 mb-2">Java & Backend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Developing backend systems and problem-solving using Java and
              structured programming concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
