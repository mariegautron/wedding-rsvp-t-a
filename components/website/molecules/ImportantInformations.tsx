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

  const textBlockClass = "text-lg";

  const titleStyle = "underline text-center text-5xl font-serif";

  const description = `Rejoignez-nous pour une journée spéciale !
  Date: 22 juin
  Heure: 15h
  Lieu: Mairie de Chateau-Larcher, 2 rue de la Mairie, 86370 Chateau-Larcher
  
  Nous avons hâte de vous accueillir à la cérémonie ! Un jour rempli d'amour et de moments mémorables vous attend. Votre présence est le plus beau des cadeaux, mais si vous souhaitez offrir quelque chose, consultez notre liste de cadeaux de mariage pour trouver l'inspiration !
  
  La liste de cadeaux de mariage est disponible ici : ${presentsListUrl}
  Vos contributions rendront notre journée encore plus spéciale et mémorable pour nous deux. À bientôt ! 🎁💕`;

  return (
    <div className="relative">
      <div className="container py-6" id="informations">
        <Title level={2} className={titleStyle}>
          Informations
        </Title>
        <Divider />

        <Row justify="center" className="mb-10">
          <Col xs={24} md={12}>
            <Text className={textBlockClass}>
              Nous avons hâte de vous accueillir à la cérémonie ! RDV à {hour} à
              la {placeName} pour partager ce moment spécial avec nous.
            </Text>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={10} className="mt-5">
            <div className="text-center">
              <CustomIcon Icon={EnvironmentOutlined} />
              <Title level={4} className="text-2xl">
                Date et Lieu
              </Title>
              <p className={textBlockClass}>
                Le {date} à {hour} à la {placeName}, {placeAdress}
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

          <Col xs={24} sm={24} md={10} className="mt-5">
            <div className="text-center">
              <CustomIcon Icon={GiftOutlined} />
              <Title level={4} className="text-2xl">
                Cadeaux
              </Title>
              <p className={textBlockClass}>
                Vos présents nous rendront le jour encore plus mémorable ! Merci
                d'avance pour votre générosité.{" "}
              </p>
              <Button
                type="primary"
                href={presentsListUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5"
              >
                Voir la liste de cadeaux
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      <img
        src={"/images/leaves-2.svg"}
        alt="Leaves"
        className="absolute bottom-[-40%] left-[-2%] z-[-1]"
      />
    </div>
  );
};

export default ImportantInformation;
