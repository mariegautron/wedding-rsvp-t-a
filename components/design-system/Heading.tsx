// Heading Component
import React from "react";
import cn from "classnames";

interface HeadingProps {
  level: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
  color,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const getFontSize = (lvl: number) => {
    switch (lvl) {
      case 1:
        return "text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-14xl ";
      case 2:
        return "text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-10xl ";
      case 3:
        return "text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-7xl ";
      default:
        return "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-10xl ";
    }
  };

  const headingClasses = cn(
    getFontSize(level),
    className,
    color,
    "font-classico",
    "uppercase"
  );

  return <HeadingTag className={headingClasses}>{children}</HeadingTag>;
};

export default Heading;
