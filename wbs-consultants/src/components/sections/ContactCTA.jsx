import { Mail, Phone, MapPin } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-16 bg-emerald-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-emerald-900 dark:text-white mb-4">
          Let's Transform Your Business
        </h2>

        <p className="text-emerald-800 dark:text-gray-300 mb-8 text-lg">
          Ready to take the next step? Get in touch today!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            <span className="text-gray-800 dark:text-gray-200">
              info@yourname.com
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            <span className="text-gray-800 dark:text-gray-200">
              +123-456-7890
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
            <span className="text-gray-800 dark:text-gray-200">
              Your City, Country
            </span>
          </div>
        </div>

        <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300">
          Schedule a Call
        </button>
      </div>
    </section>
  );
};

export default ContactCTA;
