import { Row, Col, Statistic } from "antd";

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
          <div
            style={{
              border: "1px solid #d9d9d9",
              padding: "16px",
              borderRadius: "4px",
              marginBottom: "16px",
              width: "100%",
            }}
          >
            <Statistic
              title={stat.title}
              value={stat.value}
              style={{ width: "100%" }}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default StatisticList;
