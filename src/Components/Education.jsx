import educationData from "../data/educationData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section
      id="Education"
      className="min-h-screen px-6 md:px-20 py-20
      bg-white dark:bg-[#071c24]
      text-gray-800 dark:text-gray-300 transition-all duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16">Education</h2>

      <div className="relative">
        {/* Vertical Line (Desktop Only) */}
        <div
          className="hidden md:block absolute left-[165px] top-0 bottom-0 w-px
          bg-gray-300 dark:bg-gray-700"
        ></div>

        <div className="space-y-16">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-[150px_40px_1fr] gap-6"
            >
              {/* Duration */}
              <div className="text-sm text-gray-500 dark:text-gray-400 md:text-right">
                {item.duration}
              </div>

              {/* Dot (Desktop Only) */}
              <div className="hidden md:flex justify-center relative">
                <div
                  className="w-3 h-3 rounded-full
                  bg-teal-500
                  shadow-[0_0_10px_#14b8a6]"
                ></div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <GraduationCap size={18} className="text-teal-500" />
                  {item.title}
                </h3>

                <p className="text-teal-500 mt-1">{item.institution}</p>

                <p
                  className="mt-3 text-sm leading-relaxed
                  text-gray-600 dark:text-gray-400 max-w-2xl"
                >
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {item.highlights.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full
                      bg-teal-100 dark:bg-teal-900/40
                      text-teal-600 dark:text-teal-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
