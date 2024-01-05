export function formatDate(_date: Date): string {
  const date = new Date(_date);

  const utcTimestamp = date.getTime() + date.getTimezoneOffset() * 60 * 1000;

  const parisDate = new Date(utcTimestamp);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Paris",
  };

  const formatted = new Intl.DateTimeFormat("fr-FR", options).format(parisDate);

  return formatted;
}
