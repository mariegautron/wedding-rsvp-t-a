import React from "react";
import cn from "classnames";
import Loading from "./Loading";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: Function;
  href?: string;
  outlined?: boolean;
  mode?: "dark" | "light";
  className?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  outlined = false,
  mode = "light",
  className,
  loading = false,
}) => {
  const buttonClasses = cn(
    "px-9 py-4 rounded-full block whitespace-nowrap",
    "font-raleway font-bold text-20",
    className,
    {
      "border border-primary text-primary bg-transparent":
        outlined && mode === "dark",
      "border border-white text-white bg-transparent":
        outlined && mode === "light",
      "border border-primary text-white bg-primary":
        !outlined && mode === "light",
      "border border-white text-white bg-white": !outlined && mode === "dark",
    }
  );

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    // Utiliser un lien (<a>) si la propriété href est définie
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={handleClick}
        style={{ transition: "transform 0.2s" }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLAnchorElement;
          target.style.transform = "scale(1.01)";
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLAnchorElement;
          target.style.transform = "scale(1)";
        }}
      >
        {loading ? <Loading /> : children}
      </a>
    );
  } else {
    // Utiliser un bouton (<button>) par défaut
    return (
      <button
        className={buttonClasses}
        onClick={handleClick}
        style={{ transition: "transform 0.2s" }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.transform = "scale(1.01)";
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.transform = "scale(1)";
        }}
        disabled={loading}
      >
        {loading ? <Loading /> : children}
      </button>
    );
  }
};

export default Button;
