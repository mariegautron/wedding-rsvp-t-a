import { FC, ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-solid border-tagDefaultBorder rounded-md mb-4 w-full text-current">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-xl font-bold font-classico text-primary">
          {title}
        </h2>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="#b68e88ff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-solid border-tagDefaultBorder">
          <div className="text-current">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
