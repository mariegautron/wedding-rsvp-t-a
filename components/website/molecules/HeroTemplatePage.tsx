import { FC, ReactNode } from "react";
import HeroImage from "../atoms/HeroImage";

interface HeroTemplateProps {
  children: ReactNode;
  mode?: "light" | "dark";
}

const HeroTemplatePage: FC<HeroTemplateProps> = ({
  mode = "light",
  children,
}) => {
  const textColorClass = mode === "dark" ? "text-fond-foncé" : "text-white";

  return (
    <div
      className={`bg-fond-foncé min-h-screen h-full flex flex-col justify-center items-center ${textColorClass}`}
    >
      <div
        className="w-4/5 mx-auto space-y-8 md:flex md:items-center md:justify-between relative"
        style={{ minHeight: "80vh" }}
      >
        <HeroImage
          containerClassNames="md:hidden py-4"
          imageClassName="w-full"
        />

        <div className="relative z-10 space-y-8 md:w-11/12 w-full">
          {children}
        </div>

        <HeroImage
          containerClassNames="hidden md:block absolute top-0 right-0 h-full py-4 z-0"
          imageClassName="h-full"
        />
      </div>
    </div>
  );
};

export default HeroTemplatePage;
