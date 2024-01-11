import Heading from "@/components/design-system/Headings";
import Paragraph from "@/components/design-system/Paragraph";
import { FC, ReactNode } from "react";

interface CardInformationProps {
  title: string;
  text: string;
  button: ReactNode;
  icon: ReactNode;
}

const CardInformation: FC<CardInformationProps> = ({
  title,
  text,
  button,
  icon,
}) => {
  return (
    <div
      className="bg-white pt-20 pb-8 px-12 w-96 flex flex-col justify-end items-center space-y-10 m-8"
      style={{ borderRadius: "300px 300px 0 0" }}
    >
      <div>{icon}</div>
      <Heading level={3} className="text-xl font-bold text-primary text-center">
        {title}
      </Heading>
      <Paragraph className="text-center">{text}</Paragraph>
      {button}
    </div>
  );
};

export default CardInformation;
