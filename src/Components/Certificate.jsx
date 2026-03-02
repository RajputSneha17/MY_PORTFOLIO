import certificatesData from "../data/certificatesData";
import { ExternalLink } from "lucide-react";

export default function Certificate() {
  return (
    <section
      className="min-h-screen px-10 md:px-20 py-24
      bg-white dark:bg-[#071c24]
      text-gray-800 dark:text-gray-300 transition-all duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-20">Certificates</h2>

      <div className="grid md:grid-cols-2 gap-16">
        {certificatesData.map((cert) => (
          <div key={cert.id} className="space-y-4 group">
            {/* Image */}
            <div
              className="relative overflow-hidden rounded-xl
            bg-gray-200 dark:bg-[#0c2b35] aspect-video"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover
                group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cert.issuer}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3
                text-teal-500 hover:underline transition"
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
