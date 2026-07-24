import logo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D4A3F] dark:bg-gray-900 text-white py-6 md:py-12 overflow-x-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
              <img
                src={logo}
                alt="WBS Consultants Logo"
                className="h-8 md:h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
              Expert consulting services for managing and optimizing your
              balance sheet. Achieving financial clarity and stability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-4">Quick Links</h3>
            <div className="space-y-1 md:space-y-2">
              <a
                href="#home"
                className="block hover:text-[#7FD99A] transition-colors duration-300 text-xs md:text-sm"
              >
                Home
              </a>
              <a
                href="#services"
                className="block hover:text-[#7FD99A] transition-colors duration-300 text-xs md:text-sm"
              >
                Services
              </a>
              <a
                href="#about"
                className="block hover:text-[#7FD99A] transition-colors duration-300 text-xs md:text-sm"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block hover:text-[#7FD99A] transition-colors duration-300 text-xs md:text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-4">Contact Us</h3>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-300">
              <p>Shri</p>
              <a
                href="tel:+919371112215"
                className="block hover:text-[#7FD99A] transition-colors duration-300"
              >
                Phone: +91 937 111 2215
              </a>
              <a
                href="mailto:wbsconsultants@outlook.com"
                className="block hover:text-[#7FD99A] transition-colors duration-300"
              >
                Email: wbsconsultants@outlook.com
              </a>
              <p className="mt-2 md:mt-4">Sangli</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-0 text-center md:text-left">
            © {currentYear} WBS Consultants. All Rights Reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6 text-xs md:text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-[#7FD99A] transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#7FD99A] transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
