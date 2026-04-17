const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-800 dark:bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Your Name. All Rights Reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-emerald-300 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-emerald-300 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-emerald-300 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
