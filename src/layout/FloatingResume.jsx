import { ExternalLink } from "lucide-react";

export default function FloatingResume() {
  return (
    <a
      href="https://drive.google.com/file/d/1I6oaZn21CwoTgMI2jsXF6xx3E3PQ1lFq/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50
      flex items-center gap-2
      px-5 py-3 rounded-full
      bg-teal-500 hover:bg-teal-600
      text-white text-sm font-medium
      shadow-lg hover:shadow-xl
      transition-all duration-300"
    >
      <ExternalLink size={18} />
      View Resume
    </a>
  );
}
