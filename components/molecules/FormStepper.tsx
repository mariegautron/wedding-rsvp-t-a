import { Button, Card, Space, Typography } from "antd";
import { useState } from "react";
import RadioTagList from "./RadioTagList";

const { Text } = Typography;

const FormStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userSelections, setUserSelections] = useState({});

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSelectionChange = (step: number, value: string) => {
    setUserSelections({ ...userSelections, [step]: value });
  };

  const optionsIsPresent = [
    { value: "yes", text: "Oui, je viens" },
    { value: "no", text: "Non, je ne viendrai pas" },
  ];

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Text style={{ fontSize: "20px" }}>Question 1</Text>
            <Card style={{ padding: "30px", textAlign: "center" }}>
              <Space direction="vertical" size="large" className="gap-50">
                <Text style={{ fontSize: "50px" }}>Tu viens ?</Text>
                <RadioTagList
                  options={optionsIsPresent}
                  onChange={handleSelectionChange}
                  step={1}
                />
                <Button type="primary" onClick={handleNext}>
                  Suivant
                </Button>
              </Space>
            </Card>
          </>
        );

      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

export default FormStepper;
