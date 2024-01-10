import { FC, ReactNode } from "react";

interface HeroImageProps {
  containerClassNames: string;
  imageClassName: string;
}

const HeroImage: FC<HeroImageProps> = ({
  containerClassNames,
  imageClassName,
}) => {
  const overlayImageStyle = {
    left: "-50%",
    bottom: "-30%",
    minWidth: 300,
    width: "100%",
  };
  return (
    <div>
      <div className={containerClassNames}>
        {/* Image principale */}
        <img
          src="/images/hero-image.png"
          alt="Hero Image"
          className={imageClassName}
        />
        {/* Image supplémentaire en bas à gauche */}
        <img
          src="/images/deco-hero.png"
          alt="Overlay Image"
          style={overlayImageStyle}
          className="absolute"
        />
      </div>
    </div>
  );
};

export default HeroImage;
