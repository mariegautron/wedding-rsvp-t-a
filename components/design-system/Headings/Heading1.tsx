import React from "react";
import cn from "classnames";

interface Heading1Props {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const Heading1: React.FC<Heading1Props> = ({ children, color, className }) => {
  const headingClasses = cn(
    "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-14xl",
    "font-classico",
    "uppercase",
    color,
    className
  );

  const barClasses = cn("bg-white", "h-1", "w-20");

  return (
    <div>
      <h1 className={headingClasses}>{children}</h1>
      <div className={barClasses}></div>
    </div>
  );
};

export default Heading1;
