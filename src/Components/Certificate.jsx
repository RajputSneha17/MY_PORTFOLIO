import certificatesData from "../data/certificatesData";
import { ExternalLink } from "lucide-react";

export default function Certificate() {
  return (
    <section
      className="px-10 md:px-20 py-20
      bg-white dark:bg-[#071c24]
      text-gray-800 dark:text-gray-300 transition-all duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Certificates</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="p-6 rounded-xl
            bg-gray-100 dark:bg-[#0c2b35]
            border border-gray-200 dark:border-gray-700
            hover:border-teal-500 transition duration-300"
          >
            <h3 className="text-lg font-semibold">{cert.title}</h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {cert.issuer}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4
              text-teal-500 hover:underline transition"
            >
              View Certificate
              <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
