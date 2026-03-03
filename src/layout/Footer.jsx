import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="px-10 md:px-20 
  pt-16 pb-24 md:pb-16
  bg-white dark:bg-[#071c24]
  text-gray-700 dark:text-gray-400
  transition-all duration-500"
    >
      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800 mb-10"></div>

      {/* Content */}
      <div className="text-center space-y-4">
        <p className="flex items-center justify-center gap-2 text-sm">
          Designed & Built with
          <Heart size={16} className="text-teal-500 fill-teal-500" />
          by <span className="text-teal-500">Sneha Rajput</span>
        </p>

        <p className="text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
