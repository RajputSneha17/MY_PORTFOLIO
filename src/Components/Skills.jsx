import skillsData from "../data/skillsData";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="min-h-screen px-6 md:px-20 py-20
      bg-white dark:bg-[#071c24]
      text-gray-800 dark:text-gray-300 transition-all duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16">Skills</h2>

      <div className="space-y-16">
        {skillsData.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-[200px_1fr]
            gap-6 md:gap-12
            border-b border-gray-200 dark:border-gray-800
            pb-10"
          >
            {/* Category */}
            <div>
              <h3
                className="text-sm uppercase tracking-widest
              text-gray-500 dark:text-gray-400"
              >
                {item.category}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {item.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-base md:text-lg font-medium
                  text-gray-700 dark:text-gray-300
                  relative group cursor-default"
                >
                  {skill}

                  {/* Underline hover animation */}
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-[2px]
                  bg-teal-500 transition-all duration-300
                  group-hover:w-full"
                  ></span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
