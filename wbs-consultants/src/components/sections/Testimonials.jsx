import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Reduced operational costs by 20% through ERP integration.",
      author: "XYZ Manufacturing",
    },
    {
      quote: "Streamlined processes and boosted productivity.",
      author: "ABC Services",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-emerald-700 dark:text-emerald-400 mb-12">
          Client Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg relative"
            >
              <Quote className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mb-4 opacity-50" />
              <p className="text-gray-800 dark:text-gray-200 italic mb-4 text-lg">
                "{testimonial.quote}"
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-right font-medium">
                — {testimonial.author}
              </p>
              <div className="absolute bottom-4 right-4 w-16 h-1 bg-emerald-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
