import { Button } from "antd";

interface EventDetails {
  title: string;
  date: string; // Format : YYYY-MM-DD
  location: string;
  description: string;
}

const ButtonAddToCalendar: React.FC<{ eventDetails: EventDetails }> = ({
  eventDetails,
}) => {
  const { title, date, location, description } = eventDetails;

  const formattedDate = new Date(date).toISOString().replace(/-|:|\.\d+/g, "");

  const addToCalendar = () => {
    const userAgent = window.navigator.userAgent;

    // Exemple basique de détection d'un client de messagerie
    const isOutlook = userAgent.includes("Outlook");
    const calendarUrl = isOutlook
      ? `https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(
          title
        )}&startdt=${formattedDate}&enddt=${formattedDate}&location=${encodeURIComponent(
          location
        )}&body=${encodeURIComponent(description)}`
      : `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
          title
        )}&dates=${formattedDate}/${formattedDate}&location=${encodeURIComponent(
          location
        )}&details=${encodeURIComponent(description)}`;

    window.open(calendarUrl, "_blank");
  };

  return (
    <Button
      type="primary"
      size="large"
      onClick={addToCalendar}
      style={{ marginTop: 20 }}
    >
      Ajouter à mon calendrier
    </Button>
  );
};

export default ButtonAddToCalendar;
