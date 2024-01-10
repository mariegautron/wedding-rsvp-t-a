import React from "react";
import cn from "classnames";

interface SubtileProps {
  children: React.ReactNode;
  className?: string;
  mode?: "light" | "dark";
}

const Subtile: React.FC<SubtileProps> = ({
  children,
  className,
  mode = "light",
}) => {
  const textColorClass = mode === "dark" ? "text-white" : "text-fond-foncé";

  const subtileClasses = cn(
    "font-classico text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ",
    textColorClass,
    className
  );

  return <p className={subtileClasses}>{children}</p>;
};

export default Subtile;
