import { parseISO } from "date-fns";
import { useMemo } from "react";

export function useFormattedEventDate(): string {
  const formattedDate = useMemo(() => {
    const eventDate = process.env.NEXT_PUBLIC_EVENT_DATE;
    if (!eventDate) return "";

    const parsedDate = parseISO(eventDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Europe/Paris",
    };
    const formatted = new Intl.DateTimeFormat("fr-FR", options).format(
      parsedDate
    );

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }, []);

  return formattedDate;
}
