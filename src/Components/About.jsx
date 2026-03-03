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
          I'm a Full Stack Developer with hands-on experience in Web
          Development, Android Application Development, and Java-based backend
          systems. I enjoy building practical and scalable applications that
          solve real problems.
        </p>

        <p className="text-lg leading-relaxed mb-10 text-gray-600 dark:text-gray-400">
          My work focuses on creating responsive user interfaces, writing
          structured backend logic, and applying Data Structures and Algorithms
          to improve performance. I aim to write clean, organized, and
          maintainable code.
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
            <h3 className="font-semibold text-teal-500 mb-2">Java & DSA</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Proficient in Java with a good understanding of Data Structures
              and Algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
