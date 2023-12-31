import { Row } from "antd";
import SingleStatistic from "../atoms/SingleStatistic";

interface StatisticListProps {
  statistics: { title: string; value: number }[];
}

const StatisticList: React.FC<StatisticListProps> = ({ statistics }) => {
  return (
    <Row gutter={[16, 16]} justify="space-around" style={{ marginBottom: 10 }}>
      {statistics.map((stat, index) => (
        <SingleStatistic key={index} title={stat.title} value={stat.value} />
      ))}
    </Row>
  );
};

export default StatisticList;
