import CustomIcon from "@/components/shared/atoms/CustomIcon";
import { useFormattedEventDate } from "@/utils/hooks/useFormattedEventDate";
import { EnvironmentOutlined, GiftOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import ButtonAddToCalendar from "../atoms/ButtonAddToCalendar";

const { Title, Text } = Typography;

const ImportantInformation = () => {
  const hour = process.env.NEXT_PUBLIC_EVENT_HOUR;
  const placeName = process.env.NEXT_PUBLIC_EVENT_PLACE_NAME;
  const placeAdress = process.env.NEXT_PUBLIC_EVENT_PLACE;

  const presentsListUrl = process.env.NEXT_PUBLIC_PRESENT_LIST;

  const date = useFormattedEventDate();

  const description = `Rejoignez-nous pour une journée spéciale !
Date: 22 juin
Heure: 15h
Lieu: Mairie de Chateau-Larcher, 2 rue de la Mairie, 86370 Chateau-Larcher

Nous avons hâte de vous accueillir à la cérémonie ! Un jour rempli d'amour et de moments mémorables vous attend. Votre présence est le plus beau des cadeaux, mais si vous souhaitez offrir quelque chose, consultez notre liste de cadeaux de mariage pour trouver l'inspiration !

La liste de cadeaux de mariage est disponible ici : ${presentsListUrl}
Vos contributions rendront notre journée encore plus spéciale et mémorable pour nous deux. À bientôt ! 🎁💕`;

  return (
    <div style={{ padding: "24px" }} className="container" id="informations">
      <Title
        level={2}
        style={{
          textAlign: "center",
          fontSize: "50px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        Informations
      </Title>
      <Divider />

      <Row justify="center" style={{ marginBottom: "50px" }}>
        <Col xs={24} md={12}>
          <Text
            style={{
              fontSize: "20px",
              textAlign: "center",
              padding: "20px",
              width: "100%", // Sur mobile, la largeur est de 100%
              display: "block",
            }}
          >
            Nous avons hâte de vous accueillir à la cérémonie ! RDV à {hour} à
            la {placeName} pour partager ce moment spécial avec nous.
          </Text>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={10} style={{ marginTop: 20 }}>
          <div style={{ textAlign: "center" }}>
            <CustomIcon Icon={EnvironmentOutlined} />
            <Title level={4} style={{ fontSize: "25px" }}>
              Date et Lieu
            </Title>
            <p>
              <Text style={{ fontSize: "20px" }}>
                Le {date} à {hour} à la {placeName}, {placeAdress}
              </Text>
            </p>
            <ButtonAddToCalendar
              eventDetails={{
                title: "Mariage de Thomas & Amélie ❤️",
                date: process.env.NEXT_PUBLIC_EVENT_DATE as string,
                location: placeAdress as string,
                description: description,
              }}
            />
          </div>
        </Col>

        <Col xs={24} sm={24} md={10} style={{ marginTop: 20 }}>
          <div style={{ textAlign: "center" }}>
            <CustomIcon Icon={GiftOutlined} />
            <Title level={4} style={{ fontSize: "25px" }}>
              Cadeaux
            </Title>
            <p>
              <Text style={{ fontSize: "20px" }}>
                Vos présents nous rendront le jour encore plus mémorable ! Merci
                d'avance pour votre générosité.{" "}
              </Text>
            </p>
            <Button
              type="primary"
              size="large"
              href={presentsListUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 20 }}
            >
              Voir la liste de cadeaux de mariage
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ImportantInformation;
