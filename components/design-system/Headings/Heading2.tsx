import React from "react";
import cn from "classnames";

interface Heading2Props {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const Heading2: React.FC<Heading2Props> = ({ children, color, className }) => {
  const headingClasses = cn(
    "text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-8xl",
    "font-classico",
    "uppercase",
    "text-current",
    "text-center",
    color,
    className
  );

  const barClasses = cn("bg-primary", "h-1", "w-20");

  const words = children?.toString().split(" ") || [];
  const lastWord = words[words.length - 1];

  return (
    <div className="relative flex flex-col items-center justify-center gap-4 group py-5 w-full overflow-hidden">
      <div className={barClasses}></div>
      <h2 className={headingClasses}>{children}</h2>
      <span className="absolute text-primary opacity-10 font-classico uppercase left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-[210px]">
        {lastWord}
      </span>
    </div>
  );
};

export default Heading2;
