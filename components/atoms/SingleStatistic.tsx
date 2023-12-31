import { Row, Col, Statistic } from "antd";
import React from "react";

interface SingleStatisticProps {
  title: string;
  value: number;
}

const SingleStatistic: React.FC<SingleStatisticProps> = ({ title, value }) => {
  return (
    <Col span={6}>
      <div
        style={{
          border: "1px solid #d9d9d9",
          padding: "16px",
          borderRadius: "4px",
        }}
      >
        <Statistic title={title} value={value} />
      </div>
    </Col>
  );
};

export default SingleStatistic;
