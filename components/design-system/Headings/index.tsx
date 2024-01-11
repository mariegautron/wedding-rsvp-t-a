// Heading Component
import React from "react";
import cn from "classnames";
import Heading2 from "./Heading2";
import Heading1 from "./Heading1";

interface HeadingProps {
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className,
  color,
}) => {
  if (level === 1) {
    return (
      <Heading1 color={color} className={className}>
        {children}
      </Heading1>
    );
  }

  if (level === 2) {
    return (
      <Heading2 color={color} className={className}>
        {children}
      </Heading2>
    );
  }

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const getFontSize = (lvl: number) => {
    switch (lvl) {
      case 3:
        return " text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl ";
      default:
        return "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-10xl uppercase ";
    }
  };

  const headingClasses = cn(
    getFontSize(level),
    className,
    color,
    "font-classico"
  );

  return <HeadingTag className={headingClasses}>{children}</HeadingTag>;
};

export default Heading;
