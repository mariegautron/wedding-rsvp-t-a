import React from "react";
import cn from "classnames";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "error" | "transparent";
  isRadio?: boolean;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = "default",
  isRadio = false,
}) => {
  let tagClasses =
    "inline-block m-1 border-2 rounded-sm font-Raleway text-center";

  if (isRadio) {
    tagClasses += " px-6 py-4  text-xl";
  } else {
    tagClasses += " px-4 py-1 text-xs";
  }

  switch (variant) {
    case "success":
      tagClasses +=
        " bg-tagSuccess border-tagSuccessBorder text-tagSuccessText";
      break;
    case "error":
      tagClasses += " bg-tagError border-tagErrorBorder text-tagErrorText";
      break;
    case "transparent":
      tagClasses += " bg-transparent border-tagErrorBorder text-tagErrorText";
      break;
    default:
      tagClasses +=
        " bg-tagDefault border-tagDefaultBorder text-tagDefaultText";
      break;
  }

  return <span className={cn(tagClasses)}>{children}</span>;
};

export default Tag;
