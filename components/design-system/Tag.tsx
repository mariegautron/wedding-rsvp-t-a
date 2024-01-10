import React from "react";
import cn from "classnames";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "error";
}

const Tag: React.FC<TagProps> = ({ children, variant = "default" }) => {
  let tagClasses = "inline-block px-4 py-1 m-1 text-xs border-2 rounded-sm";

  switch (variant) {
    case "success":
      tagClasses +=
        " bg-tagSuccess border-tagSuccessBorder text-tagSuccessText";
      break;
    case "error":
      tagClasses += " bg-tagError border-tagErrorBorder text-tagErrorText";
      break;
    default:
      tagClasses +=
        " bg-tagDefault border-tagDefaultBorder text-tagDefaultText";
      break;
  }

  return <span className={cn(tagClasses)}>{children}</span>;
};

export default Tag;
