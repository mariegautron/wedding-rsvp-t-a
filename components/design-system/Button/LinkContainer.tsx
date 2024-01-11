import { ContainerProps } from "./ButtonContainer";
import { handleMouseEnter, handleMouseLeave } from "./utils";

interface LinkContainerProps extends ContainerProps {
  href: string;
}

const LinkContainer: React.FC<LinkContainerProps> = ({
  className,
  onClick,
  href,
  children,
}) => (
  <a
    href={href}
    className={className}
    style={{ transition: "transform 0.2s" }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {children}
  </a>
);

export default LinkContainer;
