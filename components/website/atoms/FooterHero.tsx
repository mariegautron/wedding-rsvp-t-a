import { Button, Row, Col } from "antd";
import { FC } from "react";

const FooterHero: FC<{ type?: "modify" | "respond" | "basic" }> = ({
  type = "basic",
}) => {
  const scrollToRsvp = () => {
    const rsvpSection = document.getElementById("rsvp");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToInformations = () => {
    const rsvpSection = document.getElementById("informations");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (type === "basic") {
    return (
      <Button
        type="default"
        onClick={scrollToInformations}
        block={true}
        style={{ marginTop: 30 }}
      >
        Voir les informations
      </Button>
    );
  }

  return (
    <Row gutter={10} justify="start" align="middle" style={{ marginTop: 30 }}>
      <Col xs={24} sm={12}>
        <Button type="primary" onClick={scrollToRsvp} block={true}>
          {type === "modify"
            ? "Modifier ma réponse"
            : "Répondre à l'invitation"}
        </Button>
      </Col>
      <Col xs={24} sm={12}>
        <Button type="default" onClick={scrollToInformations} block={true}>
          Voir les informations
        </Button>
      </Col>
    </Row>
  );
};

export default FooterHero;
