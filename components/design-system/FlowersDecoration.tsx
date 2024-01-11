import { FC } from "react";

const FlowersDecoration: FC<{ variant: "topLeft" | "bottomRight" }> = ({
  variant,
}) => {
  if (variant === "topLeft") {
    return (
      <img
        src="/images/top-left-flowers.svg"
        alt="Decorative Image"
        className="absolute top-0 left-0 transform -translate-x-[28%] -translate-y-1/4"
      />
    );
  }
  if (variant === "bottomRight") {
    return (
      <img
        src="/images/top-left-flowers.svg"
        alt="Decorative Image"
        className="absolute bottom-0 right-0 transform translate-x-[28%] translate-y-1/4 rotate-180"
      />
    );
  }

  return <></>;
};

export default FlowersDecoration;
