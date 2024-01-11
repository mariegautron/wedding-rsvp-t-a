import Heading from "@/components/design-system/Headings";
import { useFormattedEventDate } from "@/utils/hooks/useFormattedEventDate";
import { EnvironmentOutlined, GiftOutlined } from "@ant-design/icons";
import ButtonAddToCalendar from "../atoms/ButtonAddToCalendar";
import ButtonLinkPresent, { presentsListUrl } from "../atoms/ButtonLinkPresent";
import CardInformation from "../atoms/CardInformation";

const ImportantInformation = () => {
  const hour = process.env.NEXT_PUBLIC_EVENT_HOUR;
  const placeName = process.env.NEXT_PUBLIC_EVENT_PLACE_NAME;
  const placeAdress = process.env.NEXT_PUBLIC_EVENT_PLACE;

  const date = useFormattedEventDate();

  const description = `Rejoignez-nous pour une journée spéciale !
  Date: ${date}
  Heure: ${hour}
  Lieu: Mairie de Chateau-Larcher, 2 rue de la Mairie, 86370 Chateau-Larcher
  
  Nous avons hâte de vous accueillir à la cérémonie ! Un jour rempli d'amour et de moments mémorables vous attend. Votre présence est le plus beau des cadeaux, mais si vous souhaitez offrir quelque chose, consultez notre liste de cadeaux de mariage pour trouver l'inspiration !
  
  La liste de cadeaux de mariage est disponible ici : ${presentsListUrl}
  Vos contributions rendront notre journée encore plus spéciale et mémorable pour nous deux. À bientôt ! 🎁💕`;

  return (
    <div className="relative bg-fond-clair py-10" id="informations">
      <div className="w-4/5 mx-auto  flex flex-col justify-center items-center">
        <Heading level={2}>Informations</Heading>
        <div className="flex flex-col md:flex-row p-4 md:p-10">
          <CardInformation
            title="Date et Lieu"
            text={`Le ${date} à ${hour} à ${placeName}, ${placeAdress}`}
            button={
              <ButtonAddToCalendar
                eventDetails={{
                  title: "Mariage de Thomas & Amélie ❤️",
                  date: process.env.NEXT_PUBLIC_EVENT_DATE as string,
                  location: placeAdress as string,
                  description: description,
                }}
              />
            }
            icon={<EnvironmentOutlined className="text-primary text-5xl" />}
          />
          <CardInformation
            title="Cadeaux"
            text="Vos présents nous rendront le jour encore plus mémorable ! Merci d'avance pour votre générosité."
            button={<ButtonLinkPresent />}
            icon={<GiftOutlined className="text-primary text-5xl" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ImportantInformation;
