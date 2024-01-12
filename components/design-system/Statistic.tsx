import { FC } from "react";

interface StatisticProps {
  value: number | string;
  title: string;
}

const Statistic: FC<StatisticProps> = ({ value, title }) => {
  return (
    <div className="border border-solid border-tagDefaultBorder p-4 rounded-md mb-4 w-full h-full">
      <div className="flex flex-col items-start space-y-2 w-full">
        <p className="text-2xl font-bold font-classico text-primary">{value}</p>
        <p className="font-Raleway text-current text-sm">{title}</p>
      </div>
    </div>
  );
};

export default Statistic;
