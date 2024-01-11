import Statistic from "@/components/design-system/Statistic";
import { Row, Col } from "antd";

interface StatisticListProps {
  statistics: { title: string; value: number }[];
}

const StatisticList: React.FC<StatisticListProps> = ({ statistics }) => {
  const numCols = Math.min(Math.max(1, 24 / statistics.length), 6);
  const colWidth = `${100 / statistics.length}%`;

  return (
    <Row gutter={[16, 16]} justify="space-around" style={{ marginBottom: 10 }}>
      {statistics.map((stat, index) => (
        <Col
          key={index}
          xs={24 / numCols}
          sm={24 / numCols}
          md={24 / numCols}
          lg={24 / numCols}
          style={{ maxWidth: colWidth }}
        >
          <Statistic title={stat.title} value={stat.value} />
        </Col>
      ))}
    </Row>
  );
};

export default StatisticList;
