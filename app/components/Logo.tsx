import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "light" | "dark";
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  color = "dark",
}) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl",
  };

  const colorClasses = {
    light: "text-stone-100",
    dark: "text-stone-700",
  };

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div
        className={`font-extralight tracking-[0.4em] ${sizeClasses[size]} ${colorClasses[color]} mb-1`}
      >
        <span>FERV</span>
        <span className="italic">I</span>
        <span>D</span>
      </div>
      <div className={`w-16 h-px bg-current opacity-60`}></div>
    </div>
  );
};

export default Logo;
