import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../../assets/logo.png";

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D4A3F]/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-[#0D4A3F] dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Left Side - Logo & Contact Info */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt="WBS Consultants Logo"
                className="h-14 sm:h-20 md:h-24 w-auto object-contain"
              />
            </a>

            {/* Contact Info - Desktop Only */}
            <div className="hidden lg:flex items-center gap-6 border-l-2 border-[#7FD99A]/30 pl-6">
              {/* Phone */}
              <a
                href="tel:+919371112215"
                className="flex flex-col hover:scale-105 transition-transform"
              >
                <span className="text-[#7FD99A] dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Call Us
                </span>
                <span className="text-white text-sm font-bold">
                  +91 937 111 2215
                </span>
              </a>

              {/* Divider */}
              <div className="h-10 w-px bg-[#7FD99A]/20"></div>

              {/* Email */}
              <a
                href="mailto:wbsconsultants@outlook.com"
                className="flex flex-col hover:scale-105 transition-transform"
              >
                <span className="text-[#7FD99A] dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Email Us
                </span>
                <span className="text-white text-sm font-medium">
                  wbsconsultants@outlook.com
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-white hover:text-[#7FD99A] transition-colors duration-300 font-semibold text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D4A3F] border-t border-[#7FD99A]/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block text-white hover:text-[#7FD99A] font-semibold text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
