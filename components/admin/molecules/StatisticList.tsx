import Statistic from "@/components/design-system/Statistic";
import classNames from "classnames";

export type Statistic = { title: string; value: number | string };

interface StatisticListProps {
  statistics: Statistic[];
  numColumns?: number; // Ajout de la prop pour spécifier le nombre de colonnes (par défaut 5)
}

const StatisticList: React.FC<StatisticListProps> = ({
  statistics,
  numColumns = 5,
}) => {
  const gridStyles = classNames("px-4 mb-4", {
    "w-1/3": numColumns === 3,
    "w-1/5": numColumns === 5,
  });

  return (
    <div className={`flex flex-wrap -mx-4 mb-10`}>
      {statistics.map((stat, index) => (
        <div key={index} className={gridStyles}>
          <Statistic title={stat.title} value={stat.value} />
        </div>
      ))}
    </div>
  );
};

export default StatisticList;
