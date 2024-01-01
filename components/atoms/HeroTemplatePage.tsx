import React, { FC, ReactNode } from "react";

interface HeroTemplateProps {
  children: ReactNode;
}

const HeroTemplatePage: FC<HeroTemplateProps> = ({ children }) => {
  return (
    <div className="hero">
      <div className="leaves"></div>
      <div className="container">
        <div className="w50 text-container">{children}</div>
      </div>
      <div className="image-container" />
    </div>
  );
};

export default HeroTemplatePage;
