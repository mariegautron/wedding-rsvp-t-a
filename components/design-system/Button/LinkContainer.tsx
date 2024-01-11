import { ContainerProps } from "./ButtonContainer";
import { handleMouseEnter, handleMouseLeave } from "./utils";

interface LinkContainerProps extends ContainerProps {
  href: string;
  target?: string;
  rel?: string;
}

const LinkContainer: React.FC<LinkContainerProps> = ({
  className,
  href,
  children,
  target,
  rel,
}) => (
  <a
    href={href}
    className={className}
    style={{ transition: "transform 0.2s" }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    target={target}
    rel={rel}
  >
    {children}
  </a>
);

export default LinkContainer;
