import { FC } from "react";
import { Typography, Button } from "antd";

const { Title, Text } = Typography;

const Hero: FC<{ firstname: string }> = ({ firstname }) => {
  return (
    <div className="hero">
      <div className="leaves"></div>
      <div className="container">
        <div className="w50 text-container">
          <Title level={2}>Bonjour {firstname},</Title>
          <Title level={2}>tu es invité(e) au mariage de </Title>
          <Title level={1} style={{ marginTop: 20, marginBottom: 20 }}>
            Thomas & Amélie
          </Title>
          <Text style={{ display: "block", fontSize: 25 }}>
            Nous sommes ravis de t’inviter à partager ce jour unique avec nous,
            qui se déroulera le{" "}
            <span style={{ textDecoration: "underline", fontSize: 25 }}>
              22 juin 2024 au 2 rue de la mairie, 86370 Chateau-Larcher
            </span>
          </Text>
          <Button type="primary" style={{ marginTop: 20 }}>
            Répondre à l'invitation
          </Button>
        </div>
      </div>
      <div className="image-container" />
    </div>
  );
};

export default Hero;
