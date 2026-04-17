import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2500; // 2.5 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-accent font-bold text-emerald-600 dark:text-emerald-400 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
