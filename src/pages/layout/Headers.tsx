import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";
function Headers() {
  const location = useLocation();
  const navItems = [
    { name: "제품 회수", path: "/" },
    { name: "영양 정보", path: "/Nutrients" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between shadow-[0px_10px_16px_rgba(17,_17,_26,_0.1)] dark:shadow-gray-700 py-4 px-4 sm:px-6 bg-white dark:bg-gray-900 font-sans min-h-[70px] tracking-wide">
      <a href="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="logo" className="w-10 h-10" />
        <span className="hidden md:inline text-lg font-semibold text-gray-700 dark:text-gray-100 tracking-wide">
          안전한 먹거리
        </span>
      </a>

      <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-5">
        {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-base font-semibold px-4 py-2 transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              }`}
            >
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
      </nav>
      
      <DarkModeToggle />
    </header>
  );
}

export default Headers;
