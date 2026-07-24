import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
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

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = href === "#home" ? 0 : 90; // No offset for home, 90px for others
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
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Left Side - Logo & Contact Info */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
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
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
              />
            </a>

            {/* Contact Info - Large Desktop Only */}
            <div className="hidden xl:flex items-center gap-6 border-l-2 border-[#7FD99A]/30 pl-6">
              {/* Phone */}
              <a
                href="tel:+919371112215"
                className="flex flex-col hover:scale-105 transition-transform"
              >
                <span className="text-[#7FD99A] dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Call Us
                </span>
                <span className="text-white text-sm font-bold">
                  937 111 2215
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
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D4A3F]/98 dark:bg-gray-900/98 backdrop-blur-lg border-t border-[#7FD99A]/20 shadow-2xl">
          <div className="px-4 sm:px-6 py-6 space-y-6 max-w-md mx-auto">
            {/* Navigation Links */}
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block px-4 py-3 text-white hover:text-[#7FD99A] hover:bg-white/5 rounded-lg font-semibold text-base tracking-wide transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact Info - Mobile/Tablet */}
            <div className="pt-4 border-t border-[#7FD99A]/20 space-y-4">
              {/* Phone */}
              <a
                href="tel:+919371112215"
                className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-all group"
              >
                <div className="p-2 bg-[#7FD99A]/20 rounded-lg group-hover:bg-[#7FD99A]/30 transition-colors">
                  <Phone size={20} className="text-[#7FD99A]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#7FD99A] dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                    Call Us
                  </span>
                  <span className="text-white text-sm font-bold">
                    937 111 2215
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:wbsconsultants@outlook.com"
                className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition-all group"
              >
                <div className="p-2 bg-[#7FD99A]/20 rounded-lg group-hover:bg-[#7FD99A]/30 transition-colors">
                  <Mail size={20} className="text-[#7FD99A]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#7FD99A] dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                    Email Us
                  </span>
                  <span className="text-white text-sm font-medium break-all">
                    wbsconsultants@outlook.com
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
