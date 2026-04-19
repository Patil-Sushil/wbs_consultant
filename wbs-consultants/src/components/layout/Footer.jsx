const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D4A3F] dark:bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="WBS Consultants Logo"
                className="h-12 w-auto"
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold text-white tracking-wider">
                  WBS
                </span>
                <span className="text-xs font-semibold text-white/90 tracking-wide">
                  CONSULTANTS
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Expert consulting services for managing and optimizing your
              balance sheet. Achieving financial clarity and stability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#home"
                className="block hover:text-[#7FD99A] transition-colors duration-300 text-sm"
              >
                Home
              </a>
              <a
                href="#services"
                className="block hover:text-[#7FD99A] transition-colors duration-300 text-sm"
              >
                Services
              </a>
              <a
                href="#about"
                className="block hover:text-[#7FD99A] transition-colors duration-300 text-sm"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block hover:text-[#7FD99A] transition-colors duration-300 text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Shri</p>
              <p>Phone: 9371225251</p>
              <p>Email: shri@wbsconsultants.com</p>
              <p className="mt-4">Mumbai | Bangalore | Delhi</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} WBS Consultants. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
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
