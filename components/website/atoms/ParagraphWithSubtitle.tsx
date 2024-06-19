import React from "react";
import Paragraph from "@/components/design-system/Paragraph";

interface ParagraphWithSubtitleProps {
  title: string;
  subtitle?: string;
}

const ParagraphWithSubtitle: React.FC<ParagraphWithSubtitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="text-center space-y-2">
      <Paragraph className="font-bold text-lg md:text-xl">{title}</Paragraph>
      {subtitle && (
        <Paragraph small className="text-sm text-tagDefaultText">
          {subtitle}
        </Paragraph>
      )}
    </div>
  );
};

export default ParagraphWithSubtitle;
