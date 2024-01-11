import { MouseEventHandler, ReactNode } from "react";
import { handleMouseEnter, handleMouseLeave } from "./utils";

export interface ContainerProps {
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  children: ReactNode;
}

const ButtonContainer: React.FC<ContainerProps> = ({
  className,
  onClick,
  loading,
  children,
}) => (
  <button
    className={className}
    onClick={onClick}
    style={{ transition: "transform 0.2s" }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    disabled={loading}
  >
    {children}
  </button>
);

export default ButtonContainer;
