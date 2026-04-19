import { Scale } from "lucide-react";

const Logo = ({ className = "", showText = true, size = "default" }) => {
  const sizes = {
    small: {
      container: "w-8 h-8",
      text: "text-lg",
      icon: "w-5 h-5",
    },
    default: {
      container: "w-12 h-12",
      text: "text-2xl",
      icon: "w-7 h-7",
    },
    large: {
      container: "w-16 h-16",
      text: "text-3xl",
      icon: "w-10 h-10",
    },
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon with Balance Scale */}
      <div
        className={`${currentSize.container} bg-[#0A3D5C] dark:bg-[#0A3D5C] rounded-lg flex items-center justify-center border-2 border-[#0A3D5C] dark:border-[#0A3D5C] shadow-lg`}
      >
        <Scale className={`${currentSize.icon} text-white`} strokeWidth={2.5} />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`${currentSize.text} font-bold text-[#0A3D5C] dark:text-white tracking-wider`}
          >
            WBS
          </span>
          <span className="text-xs font-semibold text-[#0A3D5C] dark:text-gray-300 tracking-wide">
            CONSULTANTS
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
