import { useEffect, useState } from "react";
import { getDeadlineDate } from "../functions/getDeadlineDate";

const useFormattedDeadline = (): string => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const parisDate = getDeadlineDate();

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "Europe/Paris",
    };

    const formatted = new Intl.DateTimeFormat("fr-FR", options).format(
      parisDate
    );

    setFormattedDate(formatted);
  }, []);

  return formattedDate;
};

export default useFormattedDeadline;
