import { Button } from "antd";
import React, { FC, ReactNode } from "react";

interface HeroTemplateProps {
  children: ReactNode;
}

const HeroTemplatePage: FC<HeroTemplateProps> = ({ children }) => {
  return (
    <div className="hero">
      <div className=" hero-container">
        <div className="container">
          <div className="text-container">
            {children}
            <div
              style={{ padding: 10, display: "flex", justifyContent: "center" }}
            >
              <Button type="default" href="#informations">
                Voir les informations importantes
              </Button>
            </div>
          </div>
        </div>
        <img
          className="image-container"
          src="/images/new-hero-image.png"
          alt="Hero Image"
        />
      </div>
      <img
        className="leaves svg-decoration"
        src="/images/leaves-1.svg"
        aria-hidden="true"
        alt="Leaves"
      />
    </div>
  );
};

export default HeroTemplatePage;
