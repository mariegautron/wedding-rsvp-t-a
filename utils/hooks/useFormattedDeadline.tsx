import { useEffect, useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const useFormattedDeadline = () => {
  const dateString = process.env.NEXT_PUBLIC_DEADLINE_DATE;
  const formatString = "d MMMM 'à' HH'h'mm";

  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (!dateString || !formatString) return;

    const date = new Date(dateString);
    const formatted = format(date, formatString, { locale: fr });

    setFormattedDate(formatted);
  }, [dateString, formatString]);

  return formattedDate;
};

export default useFormattedDeadline;
