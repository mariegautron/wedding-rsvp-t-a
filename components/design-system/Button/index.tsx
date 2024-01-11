import cn from "classnames";
import React, { MouseEventHandler, ReactNode } from "react";
import Loading from "../Loading";
import ButtonContainer from "./ButtonContainer";
import LinkContainer from "./LinkContainer";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  outlined?: boolean;
  mode?: "dark" | "light";
  className?: string;
  loading?: boolean;
  target?: string;
  rel?: string;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  outlined = false,
  mode = "light",
  className,
  loading = false,
  rel,
  target,
  icon,
}) => {
  const isDarkMode = mode === "dark";
  const buttonClasses = cn(
    "px-9 py-4 rounded-full block whitespace-nowrap flex justify-center align-center",
    "font-raleway font-bold text-base",
    className,
    {
      "border text-primary bg-transparent": outlined && isDarkMode,
      "border text-white bg-transparent": outlined && !isDarkMode,
      "text-white bg-primary": !outlined && !isDarkMode,
      "border text-white bg-white": !outlined && isDarkMode,
      "opacity-50": loading,
    }
  );

  const Container = href ? LinkContainer : ButtonContainer;

  return (
    <Container
      className={buttonClasses}
      onClick={onClick}
      href={href!}
      loading={loading}
      target={target}
      rel={rel}
    >
      {loading ? (
        <>
          <span className="mr-4">{children}</span>
          <Loading small white={!outlined} />
        </>
      ) : (
        <>
          {icon && <span>{icon}</span>} {children}
        </>
      )}
    </Container>
  );
};

export default Button;
