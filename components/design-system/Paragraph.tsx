import React from "react";
import cn from "classnames";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  small?: boolean;
  mode?: "light" | "dark";
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  small = false,
  mode = "light",
}) => {
  const textColorClass = mode === "dark" ? "text-white" : "text-fond-foncé";
  const fontSizeClass = small ? "text-small" : "text-base md:text-lg";

  const paragraphClasses = cn(
    "font-Raleway",
    fontSizeClass,
    textColorClass,
    className
  );

  return <p className={paragraphClasses}>{children}</p>;
};

export default Paragraph;
